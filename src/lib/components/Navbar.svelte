<script lang="ts">
    import ExpandShadowButton from "$lib/shared/buttons/ExpandShadowButton.svelte";
    import TabButton from "$lib/shared/buttons/TabButton.svelte";
    import { base } from "$app/paths";
    import { createEventDispatcher } from "svelte";

    // export let showLoginModal: boolean = false;

    const dispatch = createEventDispatcher();
</script>

<header class=" text-gray-300 body-font bg-gray-800 shadow-xl">
    <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
        <a 
            class="flex title-font font-medium items-center text-gray-300 mb-4 md:mb-0"
            href="{base}/"
        >
            <img
                src="{base}/site-assets/logo-no-background.svg"
                alt="logo"
                width=200
                class=" text-white p-2"
            />
            <!-- <span class="ml-3 text-xl">DrugVeda</span> -->
        </a>
        <nav
            class="m-auto flex flex-wrap items-center text-base justify-between"
        >
            <TabButton href="{base}/categories">All Categories</TabButton>
            <TabButton href="{base}/products">All products</TabButton>  
            <TabButton>Third Link</TabButton>
        </nav>
            <div class="flex space-x-4 items-center">
                <ExpandShadowButton style="border-radius: 0.5rem" invert={true} href="{base}/login">
                    Login</ExpandShadowButton
                >
                <ExpandShadowButton style="border-radius: 0.5rem" href="{base}/login">
                    Signup</ExpandShadowButton
                >
                <button on:click={() => {dispatch("cart-clicked")}}
                    class="py-4 px-1 relative border-2 border-transparent text-white rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                    aria-label="Cart"
                >
                    <svg
                        class="h-10 w-10"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    <span class="absolute inset-0 object-right -mr-auto">
                        <div
                            class="inline-flex items-right px-1.5 py-0.5 rounded-lg text-xs font-semibold leading-4 bg-teal-400 text-white"
                        >
                            1
                        </div>
                    </span>
                </button>
            </div>
    </div>
    <!-- <hr class="h-px border-0 bg-gray-700 shadow-xl"> -->
</header>
