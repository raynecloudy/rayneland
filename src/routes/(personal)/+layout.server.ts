import { env } from "$env/dynamic/private";
import { discordAccount, type DiscordAccount } from "$lib/discord";

export const load = async () => {
  const res = await fetch(`https://discord.com/api/v9/users/${discordAccount}`, {
    headers: {
      "Authorization": `Bot ${env.DISCORD_TOKEN}`
    }
  });
  return {
    discord: await res.json() as DiscordAccount
  };
};
