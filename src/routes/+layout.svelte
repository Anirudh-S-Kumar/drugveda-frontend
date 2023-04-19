<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import "../app.postcss";
    import "flowbite/dist/flowbite.css";
	import Navbar2 from "$lib/components/Navbar2.svelte";
    import CartPage2 from "$lib/components/CartPage2.svelte";
    import ExpandShadowButton from "$lib/shared/buttons/ExpandShadowButton.svelte";
    import TabButton from "$lib/shared/buttons/TabButton.svelte";
    import { base } from "$app/paths";
	import CartButton from "$lib/shared/buttons/CartButton.svelte";


    let sidebar_show: boolean;
    $: sidebar_show = false;

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
        </a>
        <nav
            class="m-auto flex flex-wrap items-center text-base justify-between"
        >
            <TabButton href="{base}/categories">All Categories</TabButton>
            <TabButton href="{base}/products">All products</TabButton>  
            <TabButton href="{base}/subpage">Third Link</TabButton>
        </nav>
            <div class="flex space-x-4 items-center">
                <ExpandShadowButton style="border-radius: 0.5rem" invert={true} href="{base}/login">
                    Login</ExpandShadowButton
                >
                <ExpandShadowButton style="border-radius: 0.5rem" href="{base}/login">
                    Signup</ExpandShadowButton
                >
                <CartButton on:click={() => {sidebar_show = !sidebar_show}} qty={1}/>
            </div>
    </div>
    <hr class="h-px bg-gray-700 border-gray-700 shadow-xl">
</header>


<CartPage2 bind:show={sidebar_show}/>

<!-- <Navbar2/> -->
<slot></slot>