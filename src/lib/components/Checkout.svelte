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


  <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
    <div class="px-4 pt-8">
      <p class="text-xl font-medium">Order Summary</p>
      <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
      <div class="mt-8 space-y-3 rounded-lg border bg-gray-800 px-2 py-4 sm:px-6">


        {#each cart as item}
          <CheckoutCard name={item.name} price={item.price} image={item.image} qty={item.quantity} id={item.pid} />
        {/each}

      </div>

        
  
      <p class="mt-8 text-lg font-medium">Shipping Methods</p>
      <form class="mt-5 grid gap-6">
        <div class="relative">
          <input class="peer hidden" id="radio_1" type="radio" name="Delivery" value="Delivery" checked={order_type === "Delivery"} />
          <span class="peer-checked:border-gray-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-100"></span>
          <label class="peer-checked:border-2 peer-checked:border-gray-600 peer-checked:bg-gray-700 flex cursor-pointer select-none rounded-lg border border-gray-600 p-4" for="radio_1">
            <!-- <img class="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" /> -->
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
            <div class="ml-5">
              <span class="mt-2 font-semibold">Pickup</span>
              <p class="text-slate-500 text-sm leading-6">Delivery: 1-2 Days</p>
            </div>
          </label>
        </div>
      </form>
    </div>

    <div class="mt-10 bg-gray-800 px-4 pt-8 lg:mt-0">
      <p class="text-xl font-medium">Payment Details</p>
      <p class="text-gray-400">Complete your order by providing your payment details.</p>
      <div class="">
        <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
        <div class="relative">
          <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
        </div>
        <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
        <div class="relative">
          <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
            </svg>
          </div>
        </div>
        <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Card Details</label>
        <div class="flex">
          <div class="relative w-7/12 flex-shrink-0">
            <input type="text" id="card-no" name="card-no" class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
              </svg>
            </div>
          </div>
          <input type="text" name="credit-expiry" class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
          <input type="text" name="credit-cvc" class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
        </div>
        <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
        <div class="flex flex-col sm:flex-row">
          <div class="relative flex-shrink-0 sm:w-7/12">
            <input type="text" id="billing-address" name="billing-address" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <img class="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
            </div>
          </div>
          <select type="text" name="billing-state" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
            <option value="State">State</option>
          </select>
          <input type="text" name="billing-zip" class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
        </div>
  
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
  