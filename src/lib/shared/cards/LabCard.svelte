<script lang="ts">

	export let name: string = 'Product Name Product Name Product Name Product Name';
	export let price: number = 35.13;
	export let link: string = '#';  

</script>

<a href={link}>
    <div class="lg:w-1/6 md:w-1/6 p-4 pb-8 w-full ">
        <div class="relative h-64 ">
            <div class="absolute inset-0 bg-white flex items-center justify-center ">
                <img src="https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg" alt="{name}" class="h-48 w-48 object-contain align-middle " />
            </div>
        </div>
        <div class="mt-4">
            <h2 class=" title-font text-lg font-medium flex">{name}</h2>
            <p class="mt-1">₹{price}</p>
        </div>

    </div>
</a>