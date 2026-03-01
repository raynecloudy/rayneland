import { readFile } from "node:fs/promises";
import type { RequestHandler } from "./$types";
import { join } from "node:path";
import sharp from "sharp";

export const GET: RequestHandler = async ({ setHeaders }) => {
  let image = await readFile(join(process.cwd(), "src", "lib", "assets", "favicon.png"));
  const buffer = await sharp(image).modulate({
    hue: Math.floor(Math.random() * 360)
  }).toBuffer();

  setHeaders({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
    "Content-Type": "image/png"
  });
  return new Response(new Uint8Array(buffer));
};
