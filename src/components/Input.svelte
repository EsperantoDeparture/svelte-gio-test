<script>
  export let placeholder = "Text...";
  export let value = "";
</script>

<input
  {placeholder}
  bind:value
  class="border-white border w-full bg-transparent border-solid p-2 text-white focus:ring-white focus:ring-1 focus:outline-none"
/>
