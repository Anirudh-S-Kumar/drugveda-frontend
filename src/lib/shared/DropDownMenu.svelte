<script lang="ts">

    

    interface ListItem {
        name: string;
        href: string;
    }

    let title: string = "Sort by";
    let listItems: ListItem[] = [
        {
            name: "A - Z",
            href: "#",
        },
        {
            name: "Z - A",
            href: "#",
        },
        {
            name: "Price : Low to High",
            href: "#",
        },
        {
            name: "Price : HIgh to Low",
            href: "#",
        },
        {
            name: "Rating: Low to High",
            href: "#",
        },
        {
            name: "Rating: High to Low",
            href: "#",
        },
    ];
</script>

<button
	id="dropdownDefaultButton"
	data-dropdown-toggle="dropdown"
	class="text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
	type="button"
>
	{title} <svg
		class="w-4 h-4 ml-2"
		aria-hidden="true"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M19 9l-7 7-7-7"
		/></svg
	></button
>
<!-- Dropdown menu -->
<div
	id="dropdown"
	class="z-10 hidden divide-y bg-gray-800 divide-gray-100 rounded-lg shadow w-44  text-white hover:text-white"
>
	<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
		{#each listItems as item}
        <li>
            <a
                href="{item.href}"
                class="block px-4 py-2 hover:bg-gray-500 hover:text-white text-gray-200"
                >{item.name}
            </a>
        </li>
        {/each}
	</ul>
</div>
