<script lang="ts">
	export let name: string = 'Button';
    export let color:string = 'teal';

    const colorVariants = {
    'teal': 'flex ml-auto text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-400 rounded',
    'teal_outline': 'flex ml-auto text-teal-500 outline outline-1 py-2 px-6 focus:outline-2 rounded hover:text-teal-400',
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

<button class={currentColor}>
    {name}
</button>

