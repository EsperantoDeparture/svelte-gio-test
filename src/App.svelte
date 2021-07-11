<script lang="ts">
  import Header from "./components/Header.svelte";
  import RegistrationForm from "./components/RegistrationForm.svelte";
  import UserList from "./components/UserList.svelte";
</script>

<div class="lg:overflow-hidden h-screen relative">
  <Header />
  <div class="grid lg:grid-cols-2 w-full h-full split-view">
    <div class="bg-black lg:min-h-full relative pt-16">
      <RegistrationForm />
      <svg
        width="41"
        height="48"
        viewBox="0 0 41 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute lg:top-64 lg:-right-1 lg:left-auto m-auto lg:bottom-auto -bottom-2 left-0 right-0 transform rotate-90 lg:rotate-0"
      >
        <path
          d="M0.199952 23.8002L40.4002 47.0098L40.4002 0.590542L0.199952 23.8002Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="lg:min-h-full pt-16 overflow-y-auto">
      <UserList />
    </div>
  </div>
</div>
