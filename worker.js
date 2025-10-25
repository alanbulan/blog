// Cloudflare Worker - 反向代理到 Pages
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 目标 Pages 项目的 URL
    const pagesUrl = 'https://blog-37u.pages.dev';
    
    // 构建新的请求URL
    const targetUrl = new URL(url.pathname + url.search, pagesUrl);
    
    // 创建新请求
    const modifiedRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: 'manual'
    });
    
    // 获取响应
    const response = await fetch(modifiedRequest);
    
    // 创建新响应
    const modifiedResponse = new Response(response.body, response);
    
    // 添加CORS头（如果需要）
    modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');
    
    return modifiedResponse;
  }
};
