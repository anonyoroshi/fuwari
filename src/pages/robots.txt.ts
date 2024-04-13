// src/pages/robots.txt.ts
// GoogleなどのWEBクローラー向けに、サイトマップのURLを動的に生成してレスポンスのrobots.txtの内容に含める目的で、
// Typescriptファイルでrobots.txtを作成し、URL操作ライブラリをインポートしています。
// また、メモリ上でrobots.txtの内容を動的に生成しており、静的なrobots.txtファイルは生成されません。
// AstroのAPIルートタイプをインポートします
import type { APIRoute } from 'astro';

// robots.txtの内容を定義します
// User-agent: * はすべてのウェブクローラーに対する指示で、
// Allow: / はウェブサイトのすべてのページをクロールすることを許可しています
// Sitemap: ... はサイトマップのURLを指定しています
// このURLは環境変数から動的に取得しています
const robotsTxt = `
User-agent: *
Allow: /
Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

// GETリクエストに対するレスポンスを定義します
// この関数は、リクエストが来たときに実行され、robots.txtの内容をレスポンスとして返します
// robots.txtは特定のディレクトリに物理的に生成されるわけではなく、
// リクエストが来たときにメモリ上で動的に生成され、WEBクローラーに返されます
export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      // Content-Typeヘッダーを設定して、レスポンスの形式がテキストであることを示します
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};