<script lang="ts">
    export let tableData: any[] = [];
</script>

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-400">
        <thead class="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
                {#each Object.keys(tableData[0]) as col}
                    <th class="px-6 py-3">{col}</th>
                {/each}
                
            </tr>
        </thead>
        <tbody>
            {#each tableData as row}
                <tr class="border-b border-gray-700 bg-gray-800">
                    {#each Object.values(row) as val}
                        <td class="px-6 py-4">{val}</td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>
