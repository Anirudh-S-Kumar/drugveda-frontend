<script>
    import CartCard from '$lib/shared/cards/CartCard.svelte';
    import { fly, fade} from 'svelte/transition';
    export let show = false;
</script>

{#if show}
<div class="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-25" transition:fade={{duration: 200}}>
</div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <nav transition:fly={{x: 480, opacity: 1, duration: 200}}>

    <div class="flex items-start justify-between">
        <h2 class="text-lg font-medium text-white" id="slide-over-title">Shopping cart</h2>
        <div class="ml-3 flex h-7 items-center">
            <button type="button" class="-m-2 p-2 text-white hover:text-gray-400" on:click={() => {show = false}}>
                <span class="sr-only">Close panel</span>
                <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
    <CartCard name="qweertqweqweqweqw "/>
  </nav>
{/if}



		
<style>
nav {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  padding: 2rem 1rem 0.6rem;
  border-left: 1px solid #111;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  background: #000;
  overflow-y: auto;
  border-radius: 0.75rem;
  width: 30rem;
}
</style>