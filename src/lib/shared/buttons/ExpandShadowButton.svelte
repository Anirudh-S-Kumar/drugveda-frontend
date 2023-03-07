<script lang='ts'>
    export let invert:boolean = false;
    export let style:string = "";
    export let href:string = "#";

    let defaultClass:string = "inline-block rounded bg-teal-500 px-8 py-3 text-sm font-medium text-white transition hover:shadow-xl hover:scale-105 focus:outline-none focus:ring active:text-teal-400 hover:text-gray-200 focus:ring-teal-400 focus:text-white";
    let invertClass:string  = "inline-block rounded border border-current focus:ring-teal-400 px-8 py-3 text-sm font-medium text-teal-400 transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:text-teal-400 hover:text-teal-400";
    if (invert) {
        defaultClass = invertClass;
    }

</script>


<!-- svelte-ignore a11y-invalid-attribute -->
<a
  class="{defaultClass}"
  href="{href}"
  style="{style}"
>
  <slot></slot>
</a>


<style>

</style>

