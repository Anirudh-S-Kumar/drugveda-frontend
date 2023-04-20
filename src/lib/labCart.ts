import { writable, type Writable } from "svelte/store";
import type { CartItem, LabTest } from "$lib/interfaces";

// Create a writable store with an initial value of an empty array
// making the cart persist in memory
// let storageStore = window.localStorage.getItem("cart");

// let cartStore: Writable<CartItem[]> = writable(storageStore === null? [] : JSON.parse(storageStore));

let labCartStore: Writable<LabTest[]> = writable([]);
export default labCartStore;