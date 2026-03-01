import { env } from "$env/dynamic/private";
import type { RequestHandler } from "./$types";
import { json, text } from "@sveltejs/kit";

export const GET: RequestHandler = async ({}) => {
  // const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_ACCOUNT}/tunnels`, {
  //   headers: {
  //     "Authorization": `Bearer ${env.CLOUDFLARE_TOKEN}`
  //   }
  // });
  // return json(await res.json());
  return json({result:[]});
};