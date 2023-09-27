<script lang="ts">
  import Image from "$lib/ui/Image.svelte";

  export let data;
  const { soundBoardItems } = data;
</script>

<h1
  class="mb-5 sm:text-6xl text-5xl text-center font-extrabold bg-gradient-to-br from-red-600 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
>
  My crazy soundboard
</h1>

<ul class="flex flex-wrap gap-4 justify-center">
  {#each soundBoardItems as { src, alt, id }}
    <li>
      <a href="soundboard/{id}">
        <Image src={src} alt={alt} id={id} size={'sm'} />
      </a>
    </li>
  {/each}
</ul>
