<script lang="ts">
  import type { CartItem } from "$lib/interfaces";
	import CheckoutCard from "$lib/shared/cards/CheckoutCard.svelte";
  export let cart: CartItem[] = [];

  let subtotal: number = 0;
  let shipping: number = 0;
  let order_type: string = "Delivery";

  $: {
    subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    shipping = subtotal > 0 ? 5 : 0;
  }

</script>


  <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 mb-20">
    <div class="px-4 pt-8">
      <p class="text-xl font-medium">Order Summary</p>
      <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
      <div class="mt-8 space-y-3 rounded-lg border bg-gray-800 px-2 py-4 sm:px-6">


        {#each cart as item}
          <CheckoutCard name={item.name} price={item.price} image={item.image} qty={item.quantity} id={item.pid} />
        {/each}

      </div>

        
  
      <p class="mt-8 text-lg font-medium">Shipping Methods</p>
      <!-- <form class="mt-5 grid gap-6">
        <div class="relative">
          <input class="peer hidden" id="radio_1" type="radio" name="Delivery" value="Delivery" checked={order_type === "Delivery"} />
          <span class="peer-checked:border-gray-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-100"></span>
          <label class="peer-checked:border-2 peer-checked:border-gray-600 peer-checked:bg-gray-700 flex cursor-pointer select-none rounded-lg border border-gray-600 p-4 bg-gray-800" for="radio_1">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="white">
              <path
                  d="M220.091 860.385q-42.783 0-73.053-30.378-30.269-30.379-30.269-73.776H67.692V351.384q0-23.057 16.164-39.221Q100.019 296 123.077 296h538.231v147.769h85l146 195.615v116.847h-60.231q0 43.397-30.397 73.776-30.396 30.378-73.82 30.378-43.104 0-73.213-30.378-30.109-30.379-30.109-73.776h-300.23q0 43.615-30.717 73.885-30.718 30.269-73.5 30.269Zm.447-30.77q30.539 0 51.77-21.23 21.23-21.231 21.23-51.77 0-30.538-21.23-51.769-21.231-21.23-51.77-21.23-30.538 0-51.769 21.23-21.23 21.231-21.23 51.769 0 30.539 21.23 51.77 21.231 21.23 51.769 21.23ZM98.461 725.461h21.231q8.539-30.076 36.887-51.461 28.349-21.385 63.495-21.385 33.607 0 62.69 21.116 29.082 21.115 37.621 51.73h310.153V326.769H123.077q-9.231 0-16.923 7.692-7.692 7.693-7.692 16.923v374.077Zm629.847 104.154q30.538 0 51.769-21.23 21.231-21.231 21.231-51.77 0-30.538-21.231-51.769-21.231-21.23-51.769-21.23-30.539 0-51.769 21.23-21.231 21.231-21.231 51.769 0 30.539 21.231 51.77 21.23 21.23 51.769 21.23Zm-67-187.077h196L729.385 474.539h-68.077v167.999ZM364.615 530.846Z" />
          </svg>
            <div class="ml-5">
              <span class="mt-2 font-semibold">Fedex Delivery</span>
              <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
            </div>
          </label>
        </div>
        <div class="relative">
          <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
          <span class="peer-checked:border-gray-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-100  "></span>
          <label class="peer-checked:border-2 peer-checked:border-gray-600 peer-checked:bg-gray-700 flex cursor-pointer select-none rounded-lg border border-gray-600 p-4" for="radio_2">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="white">
              <path
                  d="M390.769 519.538 480 474.923l89.231 44.615V286.769H390.769v232.769ZM280 756v-40h200v40H280Zm-64.616 140q-23.057 0-39.221-16.163Q160 863.673 160 840.616V311.384q0-23.057 16.163-39.221Q192.327 256 215.384 256h529.232q23.057 0 39.221 16.163Q800 288.327 800 311.384v529.232q0 23.057-16.163 39.221Q767.673 896 744.616 896H215.384Zm-24.615-609.231v578.462-578.462Zm24.615 578.462h529.232q9.23 0 16.923-7.692 7.692-7.693 7.692-16.923V311.384q0-9.23-7.692-16.923-7.693-7.692-16.923-7.692H600v282.847l-120-60.001-120 60.001V286.769H215.384q-9.23 0-16.923 7.692-7.692 7.693-7.692 16.923v529.232q0 9.23 7.692 16.923 7.693 7.692 16.923 7.692Z" />
          </svg>
            <div class="ml-5 ">
              <span class="mt-2 font-semibold">Pickup</span>
              <p class="text-slate-500 text-sm leading-6">Delivery: 1-2 Days</p>
            </div>
          </label>
        </div>
      </form> -->
      <form class="mt-5 grid gap-6">
        <div class="relative">
          <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
          <span class="peer-checked:border-gray-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-gray-800"></span>
          <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-700 flex cursor-pointer select-none rounded-lg border border-gray-600 p-4" for="radio_1">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="white">
              <path
                  d="M220.091 860.385q-42.783 0-73.053-30.378-30.269-30.379-30.269-73.776H67.692V351.384q0-23.057 16.164-39.221Q100.019 296 123.077 296h538.231v147.769h85l146 195.615v116.847h-60.231q0 43.397-30.397 73.776-30.396 30.378-73.82 30.378-43.104 0-73.213-30.378-30.109-30.379-30.109-73.776h-300.23q0 43.615-30.717 73.885-30.718 30.269-73.5 30.269Zm.447-30.77q30.539 0 51.77-21.23 21.23-21.231 21.23-51.77 0-30.538-21.23-51.769-21.231-21.23-51.77-21.23-30.538 0-51.769 21.23-21.23 21.231-21.23 51.769 0 30.539 21.23 51.77 21.231 21.23 51.769 21.23ZM98.461 725.461h21.231q8.539-30.076 36.887-51.461 28.349-21.385 63.495-21.385 33.607 0 62.69 21.116 29.082 21.115 37.621 51.73h310.153V326.769H123.077q-9.231 0-16.923 7.692-7.692 7.693-7.692 16.923v374.077Zm629.847 104.154q30.538 0 51.769-21.23 21.231-21.231 21.231-51.77 0-30.538-21.231-51.769-21.231-21.23-51.769-21.23-30.539 0-51.769 21.23-21.231 21.231-21.231 51.769 0 30.539 21.231 51.77 21.23 21.23 51.769 21.23Zm-67-187.077h196L729.385 474.539h-68.077v167.999ZM364.615 530.846Z" />
          </svg>
            <div class="ml-5">
              <span class="mt-2 font-semibold">Fedex Delivery</span>
              <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
            </div>
          </label>
        </div>
        <div class="relative">
          <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
          <span class="peer-checked:border-gray-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-gray-800"></span>
          <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-700 flex cursor-pointer select-none rounded-lg border border-gray-600 p-4" for="radio_2">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="white">
              <path
                  d="M390.769 519.538 480 474.923l89.231 44.615V286.769H390.769v232.769ZM280 756v-40h200v40H280Zm-64.616 140q-23.057 0-39.221-16.163Q160 863.673 160 840.616V311.384q0-23.057 16.163-39.221Q192.327 256 215.384 256h529.232q23.057 0 39.221 16.163Q800 288.327 800 311.384v529.232q0 23.057-16.163 39.221Q767.673 896 744.616 896H215.384Zm-24.615-609.231v578.462-578.462Zm24.615 578.462h529.232q9.23 0 16.923-7.692 7.692-7.693 7.692-16.923V311.384q0-9.23-7.692-16.923-7.693-7.692-16.923-7.692H600v282.847l-120-60.001-120 60.001V286.769H215.384q-9.23 0-16.923 7.692-7.692 7.693-7.692 16.923v529.232q0 9.23 7.692 16.923 7.693 7.692 16.923 7.692Z" />
          </svg>
            <div class="ml-5">
              <span class="mt-2 font-semibold">Fedex Delivery</span>
              <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
            </div>
          </label>
        </div>
      </form>
    </div>

    <div class="mt-10 bg-gray-800 px-4 pt-8 lg:mt-0">
      <p class="text-xl font-medium">Payment Details</p>
      <p class="text-gray-400">Complete your order by providing your payment details.</p>
      <div class="">
        <label for="payment_method" class="mt-4 mb-2 block text-sm font-medium">payment Method</label>
        
        
        
      
  
        <!-- Total -->
        <div class="mt-6 border-t border-b py-2">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-white">Subtotal</p>
            <p class="font-semibold text-white">₹399.00</p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-white">Shipping</p>
            <p class="font-semibold text-white">₹8.00</p>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <p class="text-sm font-medium text-white">Total</p>
          <p class="text-2xl font-semibold text-white">₹408.00</p>
        </div>
      </div>
      <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
    </div>
  </div>
  