<script lang="ts">
  import { storage } from "../firebase";

  export let fileUrl;

  const storageRef = storage.ref();

  let modalOpened = false;

  /**
   * Uploads a file to Cloud Storage
   * @param file File to be uploaded
   */
  async function uploadFile(file: File) {
    const fileRef = storageRef.child(`profile-pictures/${file.name}`);
    try {
      const snapshot = await fileRef.put(file);
      fileUrl = await snapshot.ref.getDownloadURL();
      console.log(fileUrl);
      modalOpened = false;
    } catch (_error) {}
  }
</script>

<button
  on:click={() => {
    modalOpened = !modalOpened;
  }}
  class="relative grid justify-center place-content-center place-items-center border border-white w-full h-48 cursor-pointer focus:ring-white focus:ring-1 focus:outline-none"
>
  {#if fileUrl}
    <img alt="" class="absolute top-0 left-0 w-full h-full" src={fileUrl} />
  {/if}
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M42 18H24V0H18V18H0V24H18V42H24V24H42V18Z" fill="white" />
  </svg>
  <p class="text-white mt-2">Upload image</p>
</button>

{#if modalOpened}
  <div
    class="absolute w-full h-screen bg-gray-800 bg-opacity-40 grid place-content-center justify-center top-0 left-0"
  >
    <article class="rounded-lg bg-white max-w-lg">
      <div class="flex p-2 border-b-2 border-gray-200 items-center">
        <div style="width: 16px;" class="flex-grow-0 flex-shrink" />
        <div class="flex-grow font-semibold text-center uppercase">
          Upload your image
        </div>
        <div
          on:click={() => (modalOpened = false)}
          class="flex-grow-0 flex-shrink cursor-pointer"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4907 1.4L14.1782 0L7.99072 6.6L1.80322 0L0.490723 1.4L6.67822 8L0.490723 14.6L1.80322 16L7.99072 9.4L14.1782 16L15.4907 14.6L9.30322 8L15.4907 1.4Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div
        class="py-8 px-16 grid justify-center place-items-center items-center border-2 border-black m-2 rounded-lg border-dashed"
      >
        <svg
          width="56"
          height="45"
          viewBox="0 0 56 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.1635 30.8483H30.6466V14.3991H38.8711L27.9051 0.691528L16.939 14.3991H25.1635V30.8483Z"
            fill="black"
          />
          <path
            d="M49.8381 39.0733H5.97377V19.8827H0.490723V39.0733C0.490723 42.0972 2.94987 44.5564 5.97377 44.5564H49.8381C52.862 44.5564 55.3212 42.0972 55.3212 39.0733V19.8827H49.8381V39.0733Z"
            fill="black"
          />
        </svg>
        <label
          class="text-white font-bold bg-black p-2 mt-2 rounded cursor-pointer"
          for="file-input">Choose an image file from your computer</label
        >
        <p class="text-sm mt-2">Or drag and drop an image file here</p>
        <input
          id="file-input"
          type="file"
          class="invisible"
          style="display: none;"
          accept=".jpg, .jpeg, .png"
          on:change={(ev) => uploadFile(ev.target.files[0])}
        />
      </div>
    </article>
  </div>
{/if}
