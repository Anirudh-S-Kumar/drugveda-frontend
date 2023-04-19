<script lang="ts">
	import { base } from '$app/paths';
	import CartPage from '$lib/components/CartPage.svelte';
	import CartPage2 from '$lib/components/CartPage2.svelte';
	import ProductPage from '$lib/components/ProductPage.svelte';
	import CartDrawer from '$lib/misc/CartDrawer.svelte';
	import FullWidthButton from '$lib/shared/buttons/FullWidthButton.svelte';
	import { Button } from 'flowbite-svelte';
	
	let sidebar_show: boolean;
	$: sidebar_show = false;
</script>

<!-- <ProductPage /> -->
<!-- <CartPage /> -->
<!-- <FullWidthButton on:click={() => {sidebar_show=!sidebar_show}}>
	Sidebar
</FullWidthButton>

<CartPage2 bind:show={sidebar_show}/> -->

<!-- <CartDrawer /> -->

<!-- <div class="bg-primary-600">  -->

	<FullWidthButton on:click={() => sidebar_show = !sidebar_show}> Toggle Sidebar</FullWidthButton>

	<CartPage2 bind:show={sidebar_show} />