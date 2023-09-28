<script lang="ts">
  import { activeId, isPlaying } from "$lib/stores/isPlaying";
  import { fly } from "svelte/transition";
  import { settings } from "$lib/stores/settings";
  import SoundBoardItem from "$lib/ui/SoundBoardItem.svelte";
  import Category from "$lib/ui/Category.svelte";

  export let data;
  const { items, category } = data;

</script>

<Category {...category} size={'lg'}></Category>

<section class="flex gap-5 flex-wrap my-5 justify-center">
  {#each items as item}
    <SoundBoardItem {...item} />
  {/each}
</section>

{#if $isPlaying && $settings.altTextDisplayed}
  <section transition:fly={{y: 50}} class="flex justify-center">
    <blockquote class="mt-6 border-l-2 pl-6 italic">
      {items.find((item) => item.id === $activeId)?.alt}
    </blockquote>
  </section>
{/if}


