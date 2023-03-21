<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';

	export let min: number = 0;
	export let max: number = 100;
	export let name: string = 'Price';

	export let values: number[] = [min, max];

	function formatLabel(value: number) {
		return `${min + (value * (max - min)) / 100}`;
	}
</script>

<h3 class="m-4 mb-6 text-xl font-semibold text-white">{name}</h3>
<div class="mb-5">
	<RangeSlider
		range
		pips
		float
		{min}
		{max}
		first="label"
		last="label"
		--range-handle-focus="#2dd4bf"
		--range-handle="#2dd4bf"
		bind:values
	/>
</div>
