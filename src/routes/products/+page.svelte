<script lang="ts">
    import CategoryCard from "$lib/shared/cards/CategoryCard.svelte";
    import FilterPanel from "$lib/components/FilterPanel.svelte";
    import TopBar from "$lib/components/TopBar.svelte";

</script>

<div class="flex">

<div style="display: flex; flex-direction: column; width: 30vw">
        <FilterPanel />
    </div>


    <div >
        <TopBar />
        
        <div class="w-full mt-10">
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