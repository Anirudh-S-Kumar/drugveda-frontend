<script lang="ts">
	import { browser } from "$app/environment";
    import Checkout from "$lib/components/Checkout.svelte";
    import { onMount } from "svelte";
    import cartStore from "$lib/cart";
    import jwtStore from "$lib/jwt";
    import type { CartItem } from "$lib/interfaces";

    let cart: CartItem[] = [];
    let jwt: string = "";

    onMount(() => {
        cartStore.subscribe((value) => {
            cart = value;
        });

        jwtStore.subscribe((value) => {
            jwt = value;
        });

        if (browser){
            if (cart.length === 0){
                window.location.href = "/categories";
            }
            
            if (jwt === ""){
                window.location.href = "/login";
            }
        }

    });




    
</script>

<Checkout cart={cart}/>