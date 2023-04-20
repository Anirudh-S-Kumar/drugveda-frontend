<script lang="ts">
    import QtyInput from "../../misc/QtyInput.svelte";
    import { createEventDispatcher } from "svelte";
    import type { CartItem } from "../../interfaces.js";

    const dispatch = createEventDispatcher();

    export let name: string = 'Lorem';
    export let price: number = 1;
    export let qty: number = 1;
    export let pid: string = '';
    export let image: string = '';
</script>

<li class="flex py-6">
    <div class="lg:w-1/12 md:w-1/6 w-32">
        <div class="relative h-24">
            <div class="absolute inset-0 bg-white flex items-center justify-center ">
                <img src={image} alt="{name}" class="h-full w-full object-contain align-middle " />
            </div>
        </div>
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
            <QtyInput qty={qty} pid={pid} />

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