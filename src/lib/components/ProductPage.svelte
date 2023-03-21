<script lang="ts">
	import ProductButton from '$lib/shared/buttons/ProductButton.svelte';
    import StarRatting from '@ernane/svelte-star-rating';


	const config = {
		readOnly: true,
		countStars: 5,
		range: {
			min: 0,
			max: 5,
			step: 1
		},
		score: 3.5,
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

<section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
	<div class="container px-5 py-24 mx-auto">
		<div class="lg:w-4/5 mx-auto flex ">
			<img
				alt="ecommerce"
				class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
				src="https://dummyimage.com/400x400"
			/>
			<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
				<h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
				<h1 class="text-white text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
				<div class="flex mb-4">
					<span class="flex items-center">
						<!-- <StarRating rating={3.5} /> -->
						<StarRatting {config} />
						<span class="ml-3">4 Reviews</span>
					</span>
				</div>
				<p class="leading-relaxed">
					Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia
					microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.
					Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over,
					neutra jean shorts keytar banjo tattooed umami cardigan.
				</p>
				<div class="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
					<div class="flex" />
				</div>
				<div class="flex">
					<span class="title-font font-medium text-2xl text-white">$58.00</span>
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
</section>
