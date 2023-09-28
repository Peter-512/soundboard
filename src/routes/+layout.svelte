<script>
  import "../app.css";
  import { setupViewTransition } from "sveltekit-view-transition";
  import { Label } from "$lib/components/ui/label";
  import { Switch } from "$lib/components/ui/switch";
  import { settings } from "$lib/stores/settings";

  setupViewTransition();
</script>

<section class="flex justify-end m-5 gap-5">
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
    <Label class={`${$settings.altTextDisplayed || 'text-muted-foreground'}`} for="displayAltText">Display text</Label>
  </div>
</section>

<main class="m-5">
  <slot />
</main>
