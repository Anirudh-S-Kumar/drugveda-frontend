<script lang="ts">
    import ProductCard from '$lib/shared/cards/ProductCard.svelte';
	import { text } from 'svelte/internal';
    import { onMount } from 'svelte';
	import type { LabTest } from '$lib/interfaces.js';
    import labCartStore from '$lib/labCart.js';
	import LabCard from '$lib/shared/cards/LabCard.svelte';
	import DefaultButton from '$lib/shared/buttons/DefaultButton.svelte';
    
    export let data;
    let tests = (data.tests.data);
    let cartTests: LabTest[] = [];

    onMount(() => {
        labCartStore.subscribe((tests) => {
            cartTests = tests;
        });
    });

    
</script>

<div class="flex justify-center">
    <div class="w-full mt-10 ml-20">
        <div class="grid grid-cols-4 gap-6 mr-20">
            {#each tests as test}
                <a href="#top">
                    <LabCard name={test.name} price={test.price} link="/labtests/{test.name}?id={test.id}"/>
                </a>
            {/each}
        </div>
    </div>

    <div style="display: flex; flex-direction: column; width: 30rem" class="mt-12 mr-5">
        
        <h1 class="text-2xl font-medium text-gray-400 tracking-tight">Order Summary</h1>

        <hr class="h-px mt-5 mb-10 bg-gray-500 border-0 mr-5">
        {#if cartTests.length == 0}
            <p class="text-gray-400">No tests added to cart</p>
        {/if}

        {#each cartTests as test}
            <div class="flex justify-between">
                <p class="text-gray-400">{test.name}(x{test.quantity})</p>
                <p class="text-gray-400">₹{test.price * test.quantity}</p>
            </div>
        {/each}

        {#if cartTests.length > 0}
            <hr class="h-px mt-5 mb-3 bg-gray-500 border-0 mr-5">
            <div class="flex justify-between mb-7">
                <p class="text-gray-400">Total</p>
                <p class="text-gray-400">₹{cartTests.reduce((acc, test) => acc + test.price * test.quantity, 0)}
                </p>
            </div>
            <DefaultButton >
                <a href="/checkout">Proceed to Checkout</a>
            </DefaultButton>
        {/if}
    </div>
</div>