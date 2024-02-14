import type { APIRoute } from "astro";


export const prerender = false;

export const GET: APIRoute = async () => {
  const txt: string[] = [];
  
  txt.push("google.com, pub-3588358928451770, DIRECT, f08c47fec0942fa0")

  const txtfile = txt.join("\n");
  const headers = {"Content-Type": "text/plain; charset=utf-8"};
  return new Response(txtfile, { status: 200, headers });
};
