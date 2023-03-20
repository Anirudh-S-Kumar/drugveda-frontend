<script lang="ts">
    import RadioSelect from "$lib/misc/RadioSelect.svelte";
    import SearchList from "$lib/misc/SearchList.svelte";
</script>


<form class="m-10 pt-10 border-gray-200">
    <h1 class="text-4xl font-bold tracking-tight">Categories</h1>

    <hr class="h-px mt-5 mb-10 bg-gray-500 border-0">

    <RadioSelect/>


    
    <hr class="w-48 h-1 mx-auto my-8 bg-gray-100 border-0 rounded  dark:bg-gray-700">

    <SearchList/>

    <hr class="w-48 h-1 mx-auto my-8 bg-gray-100 border-0 rounded  dark:bg-gray-700">
</form>