<script lang="ts">
    import FilterPanel from '$lib/components/FilterPanel.svelte';
    import TopBar from '$lib/components/TopBar.svelte';
    import ProductCard from '$lib/shared/cards/ProductCard.svelte';
    import ProductButton from '$lib/shared/buttons/ProductButton.svelte';
    import StarRating from '@ernane/svelte-star-rating';

    export let data;

    let product = data.product.data;

	const config = {
		readOnly: true,
		countStars: 5,
		range: {
			min: 0,
			max: 5,
			step: 1
		},
        score: product.rating,
		showScore: false,
		starConfig: {
			size: 25,
			fillColor: '#5eead4',
			strokeColor: '#5eead4',
			unfilledColor: '#FFFFFF',
			strokeUnfilledColor: '#000000'
		}
	};

</script>

<div class="text-gray-400 bg-gray-900 body-font overflow-hidden flex flex-col h-screen">
	<div class="container px-5 py-24 mx-auto">
		<div class="lg:w-4/5 mx-auto flex ">
            <div class="lg:w-1/6 md:w-1/6 p-4 w-full ">
                <div class="relative h-96 ">
                    <div class="absolute inset-0 bg-white flex items-center justify-center ">
                        <img src={product.image} alt="{product.name}" class="h-full w-48 object-contain align-middle " />
                    </div>
                </div>
            </div>
			<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
				<h2 class="text-sm title-font text-gray-500 tracking-widest">{product.brand}</h2>
				<h1 class="text-white text-3xl title-font font-medium mb-1">{product.name}</h1>
				<div class="flex mb-4">
					<span class="flex items-center">
						<!-- <StarRating rating={product.rating} /> -->
						<StarRating {config} />
						<span class="ml-3">{product.rating_cnt} Reviews</span>
					</span>
				</div>
				<p class="leading-relaxed">
					{product.description}
				</p>
				<div class="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
					<div class="flex" />
				</div>
				<div class="flex">
					<span class="title-font font-medium text-2xl text-white">₹{product.price}</span>
					<ProductButton name="Buy Now" color="teal"/>
					<button
						class="inline-flex items-center justify-center ml-4"
					>
                    <ProductButton name="Add to Cart" color="teal_outline"/>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>