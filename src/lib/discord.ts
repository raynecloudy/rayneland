export const discordAccount = "1336737164691505246";

export interface DiscordAccount {
  id: string,
  username: string,
  avatar: string,
  discriminator: string,
  public_flags: number,
  flags: number,
  banner: string,
  accent_color: number,
  global_name: string,
  avatar_decoration_data: {
    asset: string,
    sku_id: string,
    expires_at: null
  },
  collectibles: {
    nameplate: {
      sku_id: string,
      asset: string,
      label: string,
      palette: string
    }
  },
  display_name_styles: {
    font_id: number,
    effect_id: number,
    colors: number[]
  },
  banner_color: string,
  clan: {
    identity_guild_id: string,
    identity_enabled: boolean,
    tag: string,
    badge: string
  },
  primary_guild: {
    identity_guild_id: string,
    identity_enabled: boolean,
    tag: string,
    badge: string
  }
};
