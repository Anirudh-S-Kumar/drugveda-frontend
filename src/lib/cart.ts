import { writable, type Writable } from "svelte/store";
import type { CartItem } from "$lib/interfaces";

// Create a writable store with an initial value of an empty array
let cartStore: Writable<CartItem[]> = writable([]);

export default cartStore;