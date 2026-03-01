import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { readFile } from "node:fs/promises";

export const GET: RequestHandler = async ({ params, request }) => {
  const accept = request.headers.get("accept");
  
  if (accept && accept.includes("text/html") || request.url.endsWith(".json") || request.url.endsWith(".md")) {
    return redirect(308, "/art/".concat(params.route));
  }
  
  let file = await readFile("./static-private/art/".concat(params.route, ".png"));
  return new Response(file, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31556952, immutable"
    }
  });
};
