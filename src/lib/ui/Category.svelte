<script lang="ts">
  import { setupViewTransition } from "sveltekit-view-transition";

  export let asLink = false;
  export let src: string;
  export let size: "sm" | "lg";
  export let name: string;

  const { transition } = setupViewTransition();
</script>

<svelte:element href={asLink ? `soundboard/${name}` : undefined} this={asLink ? 'a' : 'div'}
                use:transition={`image-${name}`}
                class={`${size === 'lg' ? 'h-96 w-96' : 'h-36 w-36'} m-auto`}>
  <div class="overflow-hidden rounded-lg">
    <img
      class={`${size === 'lg' ? 'h-96 w-96' : 'h-36 w-36'} ${asLink && 'transition-all duration-300 rounded-lg hover:scale-110'} object-cover rounded-lg`}
      src={src}
      alt={name}>
  </div>
</svelte:element>