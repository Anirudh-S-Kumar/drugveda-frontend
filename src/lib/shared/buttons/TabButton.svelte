<script lang="ts">
    export let href:string ="#";
</script>

<a
    class="relative mr-7 font-medium font-alegreya text-white text-lg before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-teal-400 before:transition hover:before:scale-x-100 hover:text-teal-300"
    href="{href}"
    on:click
>
<slot></slot>
</a >