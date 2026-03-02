import { text } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({}) => {
  const res = await fetch("https://discord.com/api/guilds/1477927141315186892/widget.json");
  if (!res.ok) return text("unknown");
  const data = await res.json();
  return text(data.members[0]?.status ?? "offline");
};