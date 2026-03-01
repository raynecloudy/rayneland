import { writable } from "svelte/store";

export let censorGore = writable(true);
export let censorNudity = writable(true);

export type ArtObject = {
  name: string,
  created: string,
  nudity?: boolean,
  gore?: boolean
};
