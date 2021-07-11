<script lang="ts">
  import { db } from "../firebase";
  import { collectionData } from "rxfire/firestore";
  import User from "./User.svelte";
  import { startWith } from "rxjs/operators";

  const query = db.collection("users").limit(10).orderBy("createdAt");

  const users = collectionData(query, "id").pipe(startWith([]));
  console.log(users);
</script>

<section class="px-2 lg:px-4 m-auto max-w-2xl py-8">
  <h3
    class="mx-auto max-w-md font-bold text-4xl tracking-widest text-center spaced-text text-black uppercase"
  >
    Update recorded data
  </h3>
  <div class="grid grid-cols-1 lg:grid-cols-2 w-full mt-14 gap-4">
    {#each $users as user}
      <User {...user} />
    {/each}
  </div>
</section>
