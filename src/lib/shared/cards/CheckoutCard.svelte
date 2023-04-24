
<script lang="ts">

    export let name: string = "abc";
    export let price: number = 10;
    export let image: string = "https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg";
    export let qty: number = 1;
    export let id: string = "temp";
</script>




<div class="flex flex-col rounded-lg bg-gray-800 sm:flex-row">
    <img
		class="m-2 h-24 w-28 rounded-md border object-cover object-center bg-transparent"
		src={image}
		alt=""
	/>
	<div class="flex w-full flex-col px-4 py-4">
		<a href="/product/{name}?id={id}" class="font-semibold">{name}</a>
        <div class="flex justify-between text-base font-normal text-gray-300 py-1">
            <p>Quantity</p>
            <p>{qty}</p>
        </div>
		<p class="text-lg font-bold">₹{price * qty}</p>
	</div>
</div>
