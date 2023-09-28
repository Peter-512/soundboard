<script lang="ts">
  import Category from "$lib/ui/Category.svelte";

  export let data;
  const { categories } = data;
</script>

<h1
  class="mb-5 sm:text-6xl text-5xl text-center font-extrabold bg-gradient-to-br from-red-600 to-yellow-500 bg-clip-text text-transparent box-decoration-clone">
  My mythical soundboard
</h1>

<ul class="flex gap-5 justify-center">
  {#each categories as category}
    <li>
      <Category asLink {...category} size={'sm'} />
    </li>
  {/each}
</ul>
