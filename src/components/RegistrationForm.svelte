<script>
  import FileUpload from "./FileUpload.svelte";
  import Input from "./Input.svelte";
</script>

<section class="px-2 lg:px-4 m-auto max-w-md py-8">
  <h3
    class="font-bold text-4xl tracking-widest text-center spaced-text text-white"
  >
    ENTER THE DATA TO THE REGISTER
  </h3>
  <div class="mx-12 mt-14 grid-cols-1 grid gap-6">
    <Input placeholder="User Name" />
    <Input placeholder="Email" />
    <FileUpload />
  </div>
</section>

<style>
</style>
