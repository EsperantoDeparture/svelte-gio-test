<script lang="ts">
  export let username = "";
  export let email = "";
  export let photo = "";
</script>

<div class="rounded-lg shadow-lg max-w-60">
  <img class="w-full h-36 object-cover rounded-t-lg" alt="" src={photo} />
  <div class="p-4">
    <h4 class="text-2xl font-medium text-center">{username}</h4>
    <p class="text-lg text-center">{email}</p>
  </div>
</div>
