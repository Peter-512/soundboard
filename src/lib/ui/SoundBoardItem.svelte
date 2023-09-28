<script lang="ts">
  import { setupViewTransition } from "sveltekit-view-transition";
  import { activeId, isPlaying } from "$lib/stores/isPlaying";
  import { beforeNavigate } from "$app/navigation";
  import { settings } from "$lib/stores/settings";
  import { blur } from "svelte/transition";

  export let imgSrc: string;
  export let alt: string;
  export let soundSrc: string;
  export let id: number;
  export let name: string;

  const { transition } = setupViewTransition();

  let audioElement: HTMLAudioElement;

  $: isDisabled = $isPlaying;
  $: isGrayedOut = $isPlaying && $activeId !== id;

  function play() {
    if ($settings.mute) {
      playing();
      setTimeout(ended, 2000);
      return;
    }
    audioElement.play();
  }

  function playing() {
    $activeId = id;
    $isPlaying = true;
  }

  function ended() {
    $activeId = null;
    $isPlaying = false;
  }

  beforeNavigate(ended);
</script>

<div>
  <button class:isGrayedOut disabled={isDisabled} on:click={play} use:transition={`image-${id}`}
          class={'h-36 w-36 overflow-hidden rounded-lg'}>
    <img
      class={'h-36 w-36 object-cover transition-all duration-300 rounded-lg hover:scale-110'}
      src={imgSrc}
      alt={alt}>
    <audio on:playing={playing} on:ended={ended} bind:this={audioElement} src={soundSrc}></audio>
  </button>
  {#if $settings.displayName}
    <p transition:blur class="text-center text-muted-foreground">
      {name}
    </p>
  {/if}
</div>

<style>
    .isGrayedOut {
        @apply grayscale;
    }
</style>