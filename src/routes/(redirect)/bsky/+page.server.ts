import { redirect } from "@sveltejs/kit";

export const load = async () => {
  redirect(308, "https://bsky.app/profile/raynec.dev");
};
