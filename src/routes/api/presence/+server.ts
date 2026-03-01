import { text } from "@sveltejs/kit";
import { client, getStatus, setStatus } from "../../../hooks.server";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({}) => {
  const status = getStatus();
  if (Date.now() - status.lastUpdated < 30_000) return text(status.type);
  else {
    const status = (await (await client.guilds.fetch("1327892346758762538")).members.fetch("1336737164691505246")).presence?.status ?? "unknown";
    setStatus(status);
    return text(status);
  }
};