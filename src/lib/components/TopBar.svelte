<script lang="ts">
    import DropDownMenu from "$lib/shared/menus/DropDownMenu.svelte";
    export let category = "All Products";
</script>


<div class="flex items-baseline justify-between border-b border-gray-500 pt-6 pb-6 mr-20">
    <h1 class="text-4xl font-bold tracking-tight">{category}</h1>

    <div class="flex items-center">
       <DropDownMenu /> 
      

      
    </div>
  </div>