<script>
  import FileUpload from "./FileUpload.svelte";
  import Input from "./Input.svelte";

  import { Observable } from "rxjs";
  import { debounceTime, distinctUntilChanged } from "rxjs/operators";
  import { onDestroy } from "svelte";
  import { db } from "../firebase";

  let username = "";
  let email = "";
  let fileUrl = "";

  let usernameError = "";
  let emailError = "";

  let changesSubs;
  const formChanges = new Observable((subscriber) => {
    changesSubs = subscriber;
  });

  const users = db.collection("users");

  /**
   * Form validation, delayed 300 miliseconds
   * between changes to avoid unnecessary changes to
   * the api. The validation won't run twice if the
   * previous username and email combination is the
   * same.
   */
  const formChangesSub = formChanges
    .pipe(debounceTime(300), distinctUntilChanged())
    .subscribe(async () => {
      console.log(username, email);
      emailError = "";
      usernameError = "";
      if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
        emailError = "Include an @ sign to complete your email";
      }
      const {
        docs: [user],
      } = await users
        .where("username", "==", username)
        .where("email", "==", email)
        .get();

      if (user) {
        usernameError = "Bummer, this user name is already taken";
      }
    });

  $: if (username || email) {
    changesSubs.next({ username, email });
  }

  async function createUser() {
    if (usernameError || emailError || !fileUrl) {
      return;
    }
    try {
      await users.add({
        username,
        email,
        createdAt: new Date(),
        photo: fileUrl,
      });
      username = "";
      email = "";
      fileUrl = "";
    } catch (_error) {}
  }

  onDestroy(() => {
    formChangesSub.unsubscribe();
  });
</script>

<section class="px-2 lg:px-4 m-auto max-w-md py-8">
  <h3
    class="font-bold text-4xl tracking-widest text-center spaced-text text-white"
  >
    ENTER THE DATA TO THE REGISTER
  </h3>
  <div class="mx-12 mt-14 grid-cols-1 grid gap-6">
    <Input
      bind:value={username}
      bind:error={usernameError}
      placeholder="User Name"
    />
    <Input bind:value={email} bind:error={emailError} placeholder="Email" />
    <FileUpload bind:fileUrl />
    <button
      on:click={() => createUser()}
      class="p-2 font-bold text-black text-lg bg-white uppercase w-40 mx-auto"
    >
      Send
    </button>
  </div>
</section>

<style>
</style>
