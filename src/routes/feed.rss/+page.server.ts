import { redirect } from "@sveltejs/kit";

export const load = async () => {
  redirect(307, "https://stuff.raynec.dev/feed.rss");
};
