<script lang="ts">
    import CategoryCard from "$lib/shared/cards/CategoryCard.svelte";
    import FilterPanel from "$lib/components/FilterPanel.svelte";
    import TopBar from "$lib/components/TopBar.svelte";

</script>

<div class="flex">

<div style="display: flex; flex-direction: column; width: 30vw">
        <FilterPanel />
    </div>


    <div style="overflow-y: scroll; height:80vh; padding: 30px">
        <TopBar />
        
        <div class="w-full max-w-[1200px] mx-auto mt-10">
            <div class="grid grid-cols-3 gap-6">
          
                <CategoryCard name="ABC"/>
                  <CategoryCard />
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/> 
                  <CategoryCard />
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/> 
            </div>
          </div>
    </div>
</div>