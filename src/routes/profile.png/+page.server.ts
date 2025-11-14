import { redirect } from "@sveltejs/kit";

export const load = async () => {
  redirect(308, "https://avatars.githubusercontent.com/u/129226914");
};
