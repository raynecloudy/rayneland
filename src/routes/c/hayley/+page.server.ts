import { redirect } from "@sveltejs/kit";

export const load = async () => {
  redirect(308, "https://toyhou.se/34189709");
};
