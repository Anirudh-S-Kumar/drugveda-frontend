<script lang="ts">
    import QtyInput from "../../misc/QtyInput.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let name: string = 'Lorem';
    export let price: number = 1;
    export let qty: number = 1;
    export let pid: string = '';
</script>

<li class="flex py-6">
    <div
        class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
    >
        <img
            src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            class="h-full w-full object-cover object-center"
        />
    </div>

    <div class="ml-4 flex flex-1 flex-col">
        <div>
            <div class="flex justify-between text-base font-medium text-white">
                <h3>
                    <a href="/product/{name}?id={pid}" class="break-normal">{name}</a>
                </h3>
                <p class="ml-4">₹{price}</p>
            </div>
        </div>
        <div class="flex flex-1 items-end justify-between text-sm">
            <QtyInput qty={qty} />

            <div class="flex">
                <button
                    type="button"
                    class="font-medium text-teal-600 hover:text-teal-500"
                    on:click={() => {dispatch("remove", pid)}}
                    >Remove</button
                >
            </div>
        </div>
    </div>
</li>