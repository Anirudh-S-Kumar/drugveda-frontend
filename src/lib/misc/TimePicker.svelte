<script lang="ts">
  import { DateInput, localeFromDateFnsLocale } from "date-picker-svelte";

  let hours: number[] = [];
  let minutes: number[] = [];
  let ampm: string[] = ["AM", "PM"];

  export let selectedHour: number = 1;
  export let selectedMinute: number = 45;
  export let selectedAMPM: string = "PM";
  export let date = new Date();

  $: {
    for (let i = 1; i <= 12; i++) {
      hours.push(i);
    }
    for (let i = 0; i <= 59; i+=15) {
      minutes.push(i);
    }
  }

  function display() {
    console.log(date);
    console.log(selectedHour);
    console.log(selectedMinute);
    console.log(selectedAMPM);
  }


</script>

<div class="container pt-10 bg-gray-800">
<!-- <div> -->
  <h1 class="text-lg font-medium pb-5">Select date and time of appointment</h1>

  <div class="inline-flex text-lg border rounded-md shadow-lg p-2">
      <div class="px-2 vbg-gray-800 text-white">
        <DateInput
        format="yyyy/MM/dd"
        placeholder="2000/31/12"
        bind:value={date}
        on:change={() => {display()}}
        /> 
        
      </div>
      <select bind:value={selectedHour} class="px-2 outline-none appearance-none bg-transparent" on:change={(e) => {display()}}>
        {#each hours as hour}
          <option value={hour} class="bg-gray-700">{hour}</option>
        {/each}

      </select>
      <span class="px-2">:</span>
      <select bind:value={selectedMinute} class="px-2 outline-none appearance-none bg-transparent" on:change={(e) => {display()}}>
        {#each minutes as minute}
          <option value={minute} class="bg-gray-700">{minute}</option>
        {/each}
      </select>
      <select bind:value={selectedAMPM} class="px-2 outline-none appearance-none bg-transparent" on:change={(e) => {display()}}>  
        <option value="AM" class="bg-gray-700">AM</option>
        <option value="PM" class="bg-gray-700">PM</option>
      </select>
    </div>
</div>

<style>
  	:global(body) {
		--date-picker-foreground: #f7f7f7;
		--date-picker-background: #1f2937;
    --date-picker-selected-background: #1f2937;
    --date-picker-selected-color: #ffffff;
    --date-picker-highlight-border : #ffffff;
	}
</style>