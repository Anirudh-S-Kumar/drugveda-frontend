<script lang="ts">
    import RadioSelect from "$lib/misc/RadioSelect.svelte";
    import SearchList from "$lib/misc/SearchList.svelte";
    import MinMaxRange from "$lib/misc/MinMaxRange.svelte";
	import FullWidthButton from "$lib/shared/buttons/FullWidthButton.svelte";

    let min:number = 50;
    let max:number = 2000;
    let values:number[] = [min, max];
</script>


<form class="m-10 pt-10 border-gray-200">
    <h1 class="text-4xl font-bold tracking-tight">Categories</h1>

    <hr class="h-px mt-5 mb-10 bg-gray-500 border-0">

    <RadioSelect/>


    
    <hr class="w-2/5 h-1 mx-auto my-8 bg-gray-100 border-0 rounded  dark:bg-gray-700">

    <SearchList/>

    <hr class="w-2/5 h-1 mx-auto my-8 bg-gray-100 border-0 rounded  dark:bg-gray-700">

    <MinMaxRange name="Price" min={min} max={max} bind:values={values}/>

    <hr class="w-2/5 h-1 mx-auto my-8 bg-gray-100 border-0 rounded  dark:bg-gray-700">

    <div class="flex justify-center">
    <FullWidthButton name="Apply" color="teal"/>
    
    </div>
</form>