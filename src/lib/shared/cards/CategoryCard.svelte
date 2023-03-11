<script lang="ts">
    import { base } from "$app/paths";

    export let img: string = `${base}/site-assets/favicon-color.svg`;
    export let name: string = "ABC";

</script>


  <div class="relative ">
    <div class="flex border border-gray-300 rounded-lg overflow-hidden w-[350px] h-[120px]">
      <img src={img} alt="Category" class="pl-10 py-2" />
      <div class="p-4 flex items-center justify-between">
        <h2 class="text-lg font-bold mb-2 ">{name}</h2>
      </div>
      <div class="absolute inset-0 border-4 border-transparent hover:border-teal-400 transition duration-300 rounded-lg  w-[350px] h-[120px]"></div>
    </div>
  </div>
