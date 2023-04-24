<script lang="ts">
	import type { LabTest } from '$lib/interfaces';
	import { DateInput } from 'date-picker-svelte';
	import CheckoutCard from '$lib/shared/cards/CheckoutCard.svelte';
	import { PUBLIC_API_URL } from '$env/static/public';
	import jwtStore from '$lib/jwt';
	import { onMount } from 'svelte';

	export let cart: LabTest[] = [];

	let subtotal: number = 0;
	let jwt: string = '';
	let hours: number[] = [];
	let minutes: number[] = [];
	let selectedHour : number = 1;
	let selectedMinute:number = 0;
	let selectedAMPM: string;
	let date: Date;

	onMount(() => {
		jwtStore.subscribe((value) => {
			jwt = value;
		});
	});

	$: {
		subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
		for (let i = 1; i <= 12; i++) {
			hours.push(i);
		}
		for (let i = 0; i <= 59; i += 15) {
			minutes.push(i);
		}
	}

	async function placeAppointment() {
		// making datetime string
		if (selectedAMPM == 'PM') {
			selectedHour += 12;
			selectedHour = selectedHour % 24;
		}
		let datetime = `${date.getFullYear()}-${date.getMonth().toString().padStart(2, '0')}-${date
			.getDate()
			.toString()
			.padStart(2, '0')} ${selectedHour.toString().padStart(2, '0')}:${selectedMinute
			.toString()
			.padStart(2, '0')}:00`;

		let data = {	
			"date": datetime,
			"test_id" : cart[0].id
		}

		let request = await fetch(`${PUBLIC_API_URL}/appointments/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt}`
			},
			body: JSON.stringify(data)
		});

		let response = await request.json();
		
		if (response.status === 'success') {
			window.location.href = '/';
		}

		
	}
</script>

<div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
	<div class="px-4 pt-8">
		<p class="text-xl font-medium">Order Summary</p>
		<p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
		<div class="mt-8 space-y-3 rounded-lg border bg-gray-800 px-2 py-4 sm:px-6">
			{#each cart as item}
				<CheckoutCard name={item.name} price={item.price} qty={item.quantity} id={item.id} />
			{/each}
		</div>

		<div class="container pt-10 bg-gray-800">
			<!-- <div> -->
			<h1 class="text-lg font-medium pb-5">Select date and time of appointment</h1>
	
			<div class="inline-flex text-lg border rounded-md shadow-lg p-2">
				<div class="px-2 vbg-gray-800 text-white">
					<DateInput
						format="yyyy/MM/dd"
						placeholder="2000/31/12"
						bind:value={date}
						on:change={() => {
							// display();
						}}
					/>
				</div>
				<select
					bind:value={selectedHour}
					class="px-2 outline-none appearance-none bg-transparent"
					on:change={(e) => {
						// display();
					}}
				>
					{#each hours as hour}
						<option value={hour} class="bg-gray-700">{hour}</option>
					{/each}
				</select>
				<span class="px-2">:</span>
				<select
					bind:value={selectedMinute}
					class="px-2 outline-none appearance-none bg-transparent"
					on:change={(e) => {
						// display();
					}}
				>
					{#each minutes as minute}
						<option value={minute} class="bg-gray-700">{minute}</option>
					{/each}
				</select>
				<select
					bind:value={selectedAMPM}
					class="px-2 outline-none appearance-none bg-transparent"
					on:change={(e) => {
						// display();
					}}
				>
					<option value="AM" class="bg-gray-700">AM</option>
					<option value="PM" class="bg-gray-700">PM</option>
				</select>
			</div>
		</div>
		<div class="mt-10 mb-5">
			Select an option

			<!-- Total -->
			<div class="mt-6 border-t border-b py-2">
				<div class="flex items-center justify-between">
					<p class="text-sm font-medium text-white">Subtotal</p>
					<p class="font-semibold text-white">₹{subtotal}</p>
				</div>
				<div class="flex items-center justify-between">
					<p class="text-sm font-medium text-white">Shipping</p>
					<p class="font-semibold text-white">₹{0}</p>
				</div>
			</div>
			<div class="mt-6 flex items-center justify-between">
				<p class="text-sm font-medium text-white">Total</p>
				<p class="text-2xl font-semibold text-white">₹{subtotal}</p>
			</div>
		</div>
		<button
			class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
			on:click={() => placeAppointment()}>Place Order</button
		>
	</div>

</div>


<style>
	:global(body) {
		--date-picker-foreground: #f7f7f7;
		--date-picker-background: #1f2937;
		--date-picker-selected-background: #1f2937;
		--date-picker-selected-color: #ffffff;
		--date-picker-highlight-border: #ffffff;
	}
</style>