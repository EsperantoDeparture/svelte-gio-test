<script>
  import Header from "./components/Header.svelte";
  import RegistrationForm from "./components/RegistrationForm.svelte";
  import UserList from "./components/UserList.svelte";
</script>

<div class="lg:overflow-hidden h-screen">
  <Header />
  <div class="grid lg:grid-cols-2 w-full h-full">
    <div class="bg-black lg:min-h-full">
      <RegistrationForm />
    </div>
    <div class="lg:min-h-full">
      <UserList />
    </div>
  </div>
</div>
