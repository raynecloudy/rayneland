import { env } from "$env/dynamic/private";

export const load = async () => {
  const res = await fetch("https://api.github.com/repos/raynecloudy/rayneland/commits?per_page=1", {
    "headers": {
      "Authorization": `Bearer ${env.GITHUB_ACCESS_TOKEN}`
    }
  })
  if (res.ok) {
    const data = await res.json();
    return {
      commitTimestamp: new Date(data[0].commit.committer.date)
    };
  }
};