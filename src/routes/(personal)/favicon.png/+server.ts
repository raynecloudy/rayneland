import { Jimp } from "../../../../node_modules/jimp/dist/esm/index.js";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ setHeaders }) => {
  const dataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAAeklEQVQ4T2NkwAL+r3n4H1mYMUSeEZs6kBiKBLpGdE3YDIIbQEgzzDB0Q5hwOQ2XOIb3iLUZm4Eg1zBSYgDIUJK9QKqXiVePzSvIYrjYKDZQxRCQiUCDQBglNRLlF3RNhFyE1VCQJpAL8AFi1GB4gyhNhHImWeFCKPAAQMhjoksyRskAAAAASUVORK5CYII=";
  const original = await Jimp.fromBuffer(Buffer.from(dataURL.split(",")[1], "base64"));
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
