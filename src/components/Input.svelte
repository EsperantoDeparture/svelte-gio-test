<script>
  export let placeholder = "Text...";
  export let value = "";
  export let error = "";
</script>

{#if error}
  <div class="flex flex-row place-content-end place-items-center">
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.58934 12.2449C7.58934 12.5047 7.68528 12.7539 7.85606 12.9376C8.02685 13.1213 8.25848 13.2245 8.5 13.2245C8.74152 13.2245 8.97315 13.1213 9.14393 12.9376C9.31472 12.7539 9.41066 12.5047 9.41066 12.2449C9.41066 11.9851 9.31472 11.7359 9.14393 11.5522C8.97315 11.3685 8.74152 11.2653 8.5 11.2653C8.25848 11.2653 8.02685 11.3685 7.85606 11.5522C7.68528 11.7359 7.58934 11.9851 7.58934 12.2449ZM7.89289 6.04082V9.79592C7.89289 9.88571 7.96119 9.95918 8.04467 9.95918H8.95533C9.03881 9.95918 9.10711 9.88571 9.10711 9.79592V6.04082C9.10711 5.95102 9.03881 5.87755 8.95533 5.87755H8.04467C7.96119 5.87755 7.89289 5.95102 7.89289 6.04082ZM16.9179 15.0204L9.02553 0.326531C8.9079 0.108163 8.7049 0 8.5 0C8.2951 0 8.0902 0.108163 7.97447 0.326531L0.082061 15.0204C-0.151296 15.4571 0.140875 16 0.607589 16H16.3924C16.8591 16 17.1513 15.4571 16.9179 15.0204ZM2.05327 14.451L8.5 2.44694L14.9467 14.451H2.05327Z"
        fill="#FABC05"
      />
    </svg>

    <span class="text-xs ml-2 text-yellow-400">
      {error}
    </span>
  </div>
{/if}
<input
  {placeholder}
  bind:value
  on:change
  class="border-white border w-full bg-transparent border-solid p-2 text-white focus:ring-white focus:ring-1 focus:outline-none"
/>
