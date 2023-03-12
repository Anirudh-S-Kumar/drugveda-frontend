<script lang="ts">
	import { writable, derived } from 'svelte/store';

	export let options = writable([
		'Leexo',
		'Avamm',
		'Mynte',
		'Buzzdog',
		'Avamm',
		'Rhycero',
		'Photolist',
		'Yakijo',
		'Buzzbean',
		'Feedfire'
	]);

	export let term = writable('');

	let searchVal: string = '';

	$: term.set(searchVal);

	export let filteredOptions = derived([options, term], ([$options, $term]) => {
		return $options.filter((option) => {
			return option.toLowerCase().includes($term.toLowerCase());
		});
	});
</script>

<div class="relative w-full mb-5 ">
	<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
		<svg
			aria-hidden="true"
			class="w-5 h-5 text-gray-500 dark:text-gray-400"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
				clip-rule="evenodd"
			/></svg
		>
	</div>
	<input
		type="text"
		id="simple-search"
		class=" border text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
		placeholder="Brand"
		bind:value={searchVal}

	/>
</div>





<ul class="font-medium border rounded-xl rounded-lgbg-gray-700 border-gray-600 text-white">
	{#each $filteredOptions as option}
		<li class="w-full  rounded-xl">
			<div class="flex items-center pl-3 text-teal-400">
				<input
					id="checkbox"
					type="checkbox"
					value=""
					class="w-4 h-4  text-teal-600 rounded focus:ring-teal-500 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500 ring-teal-400"
				/>
				<label for="checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-300"
					>{option}</label
				>
			</div>
		</li>
	{/each}
</ul>

