<script lang="ts">
	export let name: string = 'Product Name Product Name Product Name Product Name';
	export let price: number = 35.13;
	export let image: string = 'https://dummyimage.com/310x192';
</script>

<div class="lg:w-1/6 md:w-1/6 p-4 w-full ">
	<div class="relative h-64 ">
		<div class="absolute inset-0 bg-white flex items-center justify-center ">
			<img src={image} alt="{name}" class="h-48 w-48 object-contain align-middle " />
		</div>
	</div>
	<div class="mt-4">
		<h2 class=" title-font text-lg font-medium flex">{name}</h2>
		<p class="mt-1">₹{price}</p>
	</div>
</div>
