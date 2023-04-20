<script lang="ts">
	import { browser } from "$app/environment";
    import LabCheckout from "$lib/components/ProductCheckout.svelte";
    import { onMount } from "svelte";
    import labCart from "$lib/labCart";
    import jwtStore from "$lib/jwt";
    import type { CartItem, LabTest } from "$lib/interfaces";

    let cart: LabTest[] = [];
    let jwt: string = "";

    onMount(() => {
        labCart.subscribe((value) => {
            cart = value;
        });

        jwtStore.subscribe((value) => {
            jwt = value;
        });

        if (browser){
            if (cart.length === 0){
                window.location.href = "/labs";
            }
            
            if (jwt === ""){
                window.location.href = "/login";
            }
        }

    });




    
</script>

<LabCheckout cart={cart}/>