<script lang="ts">
    import CategoryCard from "$lib/shared/cards/CategoryCard.svelte";
    export let data;
    // let categories;
    let categories =  (data.categories.data);

    console.log(categories);
    
</script>


<div class="w-full max-w-[1200px] mx-auto mt-10">
  <div class="grid grid-cols-3 gap-6">
        {#each categories as category}
            <CategoryCard name={category.name} img={category.image} link="/{category.name}?id={category.id}"/>
        {/each}
        
  </div>
</div>
  