import { writable, type Writable } from "svelte/store";


// Writable object for the JWT
let jwtStore: Writable<string> = writable("");

export default jwtStore;