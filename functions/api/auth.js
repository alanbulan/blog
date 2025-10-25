// Cloudflare Pages Function for GitHub OAuth
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // GitHub OAuth配置 - 从环境变量读取
  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;
  const redirectUri = `${url.origin}/api/auth/callback`;
  
  if (!clientId || !clientSecret) {
    return new Response('OAuth credentials not configured', { status: 500 });
  }

  // 处理回调
  if (url.pathname === '/api/auth/callback') {
    const code = url.searchParams.get('code');
    
    if (!code) {
      return new Response('No code provided', { status: 400 });
    }

    // 用code换取access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        redirect_uri: redirectUri,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return new Response(`Error: ${tokenData.error}`, { status: 400 });
    }

    // 返回token给CMS
    return new Response(
      `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Authorization Success</title>
      </head>
      <body>
        <script>
          (function() {
            window.opener.postMessage(
              'authorization:github:success:${JSON.stringify(tokenData)}',
              window.location.origin
            );
            window.close();
          })();
        </script>
      </body>
      </html>
      `,
      {
        headers: {
          'Content-Type': 'text/html',
        },
      }
    );
  }

  // 重定向到GitHub OAuth
  const authUrl = new URL('https://github.com/login/oauth/authorize');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('scope', 'repo,user');

  return Response.redirect(authUrl.toString(), 302);
}
