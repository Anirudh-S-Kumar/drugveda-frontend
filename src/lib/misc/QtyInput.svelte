<script lang="ts">
    export let qty: number = 1;
    let counter: any;


    function startChange(inc: boolean = true){
        if (qty < 99 && inc){
                ++qty;
            }
            else if (qty > 1 && !inc){
                --qty;
            }
          
        setInterval(() => {}, 100);

        counter = setInterval(() => {
            if (qty < 99 && inc){
                ++qty;
            }
            else if (qty > 1 && !inc){
                --qty;
            }
        }, 100);
    }

    function stopChange(){
        clearInterval(counter);
    }
</script>


<div class="flex items-center">
    <span>Qty: </span>
<div>
    <label for="Quantity" class="sr-only"> Quantity </label>
  
    <div class="flex items-center gap-1">
      <button
        type="button"
        class="w-10 h-10 leading-10  transition hover:opacity-75 text-gray-300"
        on:mousedown={() => startChange(false)}
        on:mouseup={() => stopChange()}
      >
        &minus;
      </button>
  
      <input
        type="number"
        id="Quantity"
        placeholder="1"
        class="h-10 w-12 rounded  text-center [-moz-appearance:_textfield] border-gray-700 bg-gray-800 text-white sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
        bind:value={qty}
        on:change={() => {
            if (qty < 1){
                qty = 1;
            }
            if (qty > 99){
                qty = 99;
            }}}
        />
  
      <button
        type="button"
        class="w-10 h-10 leading-10  transition hover:opacity-75 text-gray-300"
        on:mousedown={() => startChange(true)}
        on:mouseup={() => stopChange()}
        >
        &plus;
      </button>
    </div>
  </div>
</div>