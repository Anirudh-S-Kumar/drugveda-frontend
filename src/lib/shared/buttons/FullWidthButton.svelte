<script lang="ts">
	export let name: string = 'Button';
    export let color:string = 'teal';
    export let style: string = '';

    const colorVariants = {
    'teal': ' w-1/2 flex items-center justify-center rounded-md border border-transparent bg-teal-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-600 hover:text-gray-200',
    'teal_outline': 'w-1/2 flex items-center justify-center rounded-md border border-teal-500 border-2 px-6 py-3 text-base font-medium text-teal-500 shadow-sm hover:bg-teal-600 hover:text-gray-200 hover:border-teal-600',
  }

  let currentColor: string = '';

  switch(color){
    case 'teal':
      currentColor = colorVariants.teal;
      break;
    case 'teal_outline':
      currentColor = colorVariants.teal_outline;
      break;
    default:
      currentColor = colorVariants.teal;
      break;
  }

</script>



<button class={currentColor} style={style} on:click>
    {name}
</button>

