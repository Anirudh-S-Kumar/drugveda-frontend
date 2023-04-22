<script lang="ts">
	import CartCard from '$lib/shared/cards/CartCard.svelte';
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import cartStore from '$lib/cart';
	import type { CartItem } from '$lib/interfaces';

	let cart: CartItem[] = [];
	let subtotal: number = 0;

	onMount(() => {
		cartStore.subscribe((value) => {
			cart = value;
		});
	});

	$: {
		subtotal = 0;
		cart.forEach((item) => {
			subtotal += item.price * item.quantity;
		});
	}

	export let show: boolean = false;
</script>

{#if show}
	<div
		class="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50"
		transition:fade={{ duration: 200 }}
	/>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<nav transition:fly={{ x: 480, opacity: 1, duration: 200 }} class="">
		{#if cart.length > 0}
			<div class="flex items-start justify-between">
				<h2 class="text-lg font-medium text-white" id="slide-over-title">Shopping cart</h2>
				<div class="ml-3 flex h-7 items-center">
					<button
						type="button"
						class="-m-2 p-2 text-white hover:text-gray-400"
						on:click={() => {
							show = false;
						}}
					>
						<span class="sr-only">Close panel</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
			<div>
				<div class="">
					{#each cart as item}
						<CartCard
							name={item.name}
							price={item.price}
							image={item.image}
							pid={item.pid}
							bind:qty={item.quantity}
						/>
					{/each}
				</div>
				<div class="flex flex-col"></div>
				<div class="border-t border-gray-200 px-4 py-6 sm:px-6 sticky bottom-0">
					<div class="flex justify-between text-base font-medium text-white">
						<p>Subtotal</p>
						<p>₹{Math.round((subtotal + Number.EPSILON) * 100) / 100}</p>
					</div>
					<p class="mt-0.5 text-sm text-gray-400">Shipping and taxes calculated at checkout.</p>
					<div class="mt-6">
						<a
							href="/checkout/product?from=product"
							class="flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-700"
							on:click={() => {
								show = false;
							}}
							>Checkout</a
						>
					</div>
					<div class="mt-6 flex justify-center text-center text-sm text-gray-500">
						<p>
							or
							<button type="button" class="font-medium text-teal-600 hover:text-teal-500">
								Continue Shopping
								<span aria-hidden="true"> &rarr;</span>
							</button>
						</p>
					</div>
				</div>
			</div>
		{:else}
			<div class="flex items-start justify-between">
				<p />
				<div class="ml-3 flex h-7 items-center">
					<button
						type="button"
						class="-m-2 p-2 text-white hover:text-gray-400"
						on:click={() => {
							show = false;
						}}
					>
						<span class="sr-only">Close panel</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>

			<div class = "flex justify-center content-center">
				<p>Empty cart</p>
			</div>
		{/if}
	</nav>
{/if}

<!-- {#if show && cart.length == 0}
<p>Empty cart</p>
{/if} -->
<style>
	nav {
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		padding: 2rem 1rem 0.6rem;
		border-left: 1px solid #111;
		filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
		background: #000;
		overflow-y: auto;
		border-radius: 0.75rem;
		width: 30rem;
	}
</style>
