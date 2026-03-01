import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences
  ]
});

let status = {
  type: "offline",
  lastUpdated: 0
};

const getStatus = () => { return status; };

const setStatus = (type: string) => status = {
  type,
  lastUpdated: Date.now()
};

export { client, getStatus, setStatus };
