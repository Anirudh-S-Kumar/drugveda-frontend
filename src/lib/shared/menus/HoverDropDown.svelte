<script lang="ts">
	import type { NameLink } from '$lib/interfaces';

	export let name: string = 'Dropdown';
	export let link: string = '#top';

	export let items: NameLink[] = [
		{ name: 'Dashboard', link: '#' },
		{ name: 'Settings', link: '#' },
		{ name: 'Earnings', link: '#' },
		{ name: 'Sign out', link: '#' }
	];
</script>

<div>
<button
	id="mega-menu-dropdown-button"
	data-dropdown-toggle="mega-menu-dropdown"
	class="text-white flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 "
>
	<a href={link} class="hover:text-white">
		{name}
	</a>
	<svg
		aria-hidden="true"
		class="w-5 h-5 ml-1 md:w-4 md:h-4"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		><path
			fill-rule="evenodd"
			d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
			clip-rule="evenodd"
		/></svg
	>
</button>
<div
	id="mega-menu-dropdown"
	class="absolute z-10 grid hidden w-auto grid-cols-1 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-1 dark:bg-gray-700"
>
	<div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
		<ul class="space-y-4" aria-labelledby="mega-menu-dropdown-button">
			{#each items as item}
				<li>
					<a
						href={item.link}
						class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
					>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
</div>