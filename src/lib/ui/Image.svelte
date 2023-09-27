<script lang="ts">
  import { setupViewTransition } from "sveltekit-view-transition";

  export let src: string;
  export let alt: string;
  export let id: number;
  export let size: "sm" | "lg";


  const { transition } = setupViewTransition();
</script>

<div use:transition={`image-${id}`} class={`${size === 'lg' ? 'h-96 w-96' : 'h-36 w-36'} overflow-hidden rounded-lg
     m-auto`}>
  <img
    class={`${size === 'lg' ? 'h-96 w-96' : 'h-36 w-36'} object-cover transition-all duration-300 rounded-lg hover:scale-110`}
    src={src}
    alt={alt}>
</div>