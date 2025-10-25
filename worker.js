// Cloudflare Worker - OAuth + 反向代理
function renderBody(status, content) {
  const html = `
  <!DOCTYPE html>
  <html>
  <head><title>Authorizing...</title></head>
  <body>
    <p>Authorizing with GitHub...</p>
    <script>
      const receiveMessage = (message) => {
        window.opener.postMessage(
          'authorization:github:${status}:${JSON.stringify(content)}',
          message.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    </script>
  </body>
  </html>
  `;
  return html;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 处理 OAuth 认证路由
    if (url.pathname === '/api/auth') {
      const client_id = env.GITHUB_OAUTH_ID || env.GITHUB_CLIENT_ID;
      
      // 调试：如果没有client_id，返回错误
      if (!client_id) {
        return new Response('Missing GITHUB_OAUTH_ID or GITHUB_CLIENT_ID environment variable', { 
          status: 500,
          headers: { 'Content-Type': 'text/plain' }
        });
      }
      
      try {
        const redirectUrl = new URL('https://github.com/login/oauth/authorize');
        redirectUrl.searchParams.set('client_id', client_id);
        redirectUrl.searchParams.set('redirect_uri', url.origin + '/api/callback');
        redirectUrl.searchParams.set('scope', 'repo user');
        redirectUrl.searchParams.set(
          'state',
          crypto.getRandomValues(new Uint8Array(12)).join('')
        );
        return Response.redirect(redirectUrl.href, 301);
      } catch (error) {
        return new Response(error.message, { status: 500 });
      }
    }
    
    // 处理 OAuth 回调
    if (url.pathname === '/api/callback') {
      const client_id = env.GITHUB_OAUTH_ID || env.GITHUB_CLIENT_ID;
      const client_secret = env.GITHUB_OAUTH_SECRET || env.GITHUB_CLIENT_SECRET;
      
      try {
        const code = url.searchParams.get('code');
        const response = await fetch(
          'https://github.com/login/oauth/access_token',
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'user-agent': 'cloudflare-worker-github-oauth',
              'accept': 'application/json',
            },
            body: JSON.stringify({ client_id, client_secret, code }),
          }
        );
        const result = await response.json();
        
        if (result.error) {
          return new Response(renderBody('error', result), {
            headers: { 'content-type': 'text/html;charset=UTF-8' },
            status: 401,
          });
        }
        
        const token = result.access_token;
        const provider = 'github';
        const responseBody = renderBody('success', { token, provider });
        
        return new Response(responseBody, {
          headers: { 'content-type': 'text/html;charset=UTF-8' },
          status: 200,
        });
      } catch (error) {
        return new Response(error.message, {
          headers: { 'content-type': 'text/html;charset=UTF-8' },
          status: 500,
        });
      }
    }
    
    // 反向代理到 Pages
    const pagesUrl = 'https://blog-37u.pages.dev';
    const targetUrl = new URL(url.pathname + url.search, pagesUrl);
    
    const modifiedRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: 'manual'
    });
    
    const response = await fetch(modifiedRequest);
    const modifiedResponse = new Response(response.body, response);
    modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');
    
    return modifiedResponse;
  }
};
