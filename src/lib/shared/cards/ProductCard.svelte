<script lang="ts">
    export let name: string = "Product Name";
    export let price: number = 35.13;
    export let image: string = "https://dummyimage.com/420x260";

</script>




<div class="lg:w-1/4 md:w-1/2 p-4 w-full">
	<a class="block relative h-48 rounded overflow-hidden" href="#top">
		<img
			alt="ecommerce"
			class="object-cover object-center w-full h-full block"
			src={image}
		/>
	</a>
	<div class="mt-4">
		<h2 class="text-white title-font text-lg font-medium">{name}</h2>
		<p class="mt-1">₹{price}</p>
	</div>
</div>
