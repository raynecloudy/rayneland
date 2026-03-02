import { Jimp } from "jimp";
import { readFileSync } from "node:fs";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ setHeaders }) => {
  let image = readFileSync("./src/lib/assets/favicon.png");
  const original = await Jimp.fromBuffer(image);
  const buffer = await original.color([{
    apply: "hue",
    params: [Math.random() * 360]
  }]).getBuffer("image/png");

  setHeaders({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
    "Content-Type": "image/png"
  });
  return new Response(new Uint8Array(buffer));
};
