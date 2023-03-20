<script lang="ts">


    export let options: string[] = [
        "Lorem ipsum"  ,
        "dolor sit amet" ,
        "consectetur"
    ]

    export let heading: string = "Subcategories"
</script>




<h3 class="m-4 text-xl font-semibold text-white">{heading}</h3>
<ul class="font-medium border rounded-xl rounded-lgbg-gray-700 border-gray-600 text-white">
    {#each options as option}
    <li class="w-full  rounded-xl">
        <div class="flex items-center pl-3">
            <input id="list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-teal-600  focus:ring-teal-500 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500 ring-teal-400">
            <label for="list-radio-license" class="w-full py-3 ml-2 text-m font-medium text-gray-300">{option}</label>
        </div>
    </li>
    {/each}

    
</ul>

