import { env } from "$env/dynamic/private";
import { text } from "@sveltejs/kit";
import { Client, GatewayIntentBits } from "discord.js";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({}) => {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildPresences
    ]
  });
  await client.login(env.DISCORD_TOKEN);
  const status = (await (await client.guilds.fetch("1327892346758762538")).members.fetch("1336737164691505246")).presence?.status ?? "unknown";
  return text(status);
};