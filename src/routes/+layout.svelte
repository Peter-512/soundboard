<script>
  import "../app.css";
  import { setupViewTransition } from "sveltekit-view-transition";
  import { Label } from "$lib/components/ui/label";
  import { Switch } from "$lib/components/ui/switch";
  import { settings } from "$lib/stores/settings";
  import { Home, Slash } from "radix-icons-svelte";
  import { page } from "$app/stores";

  const { transition } = setupViewTransition();
</script>

<header use:transition={'header'} class="flex justify-between m-5 mb-10">
  <div class="flex gap-2">
    <a
      class="flex gap-2 text-muted-foreground focus:text-accent-foreground hover:text-accent-foreground transition-all duration-100"
      href="/">
      <Home size={20} class="inline-flex place-self-center" />
      SoundBoard
    </a>
    {#if $page.params.slug}
      <Slash size={20} class="inline-flex place-self-center text-muted-foreground" />
      <span
        class="flex gap-2 text-muted-foreground capitalize"
      >
        {$page.params.slug}
      </span>
    {/if}
  </div>
  <div class="flex gap-5">
    <div class="flex items-center space-x-2">
      <Switch bind:checked={$settings.mute} id="mute" />
      <Label class={`${$settings.mute || 'text-muted-foreground'}`} for="mute">Mute</Label>
    </div>
    <div class="flex items-center space-x-2">
      <Switch bind:checked={$settings.displayName} id="displayNames" />
      <Label class={`${$settings.displayName || 'text-muted-foreground'}`} for="displayNames">Display names</Label>
    </div>
    <div class="flex items-center space-x-2">
      <Switch bind:checked={$settings.altTextDisplayed} id="displayAltText" />
      <Label class={`${$settings.altTextDisplayed || 'text-muted-foreground'}`} for="displayAltText">Display
        text</Label>
    </div>
  </div>
</header>

<main class="m-5">
  <slot />
</main>
