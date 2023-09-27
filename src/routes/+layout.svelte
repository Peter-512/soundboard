<script>
  import "../app.css";
  import { setupViewTransition } from "sveltekit-view-transition";

  setupViewTransition();
</script>

<main class="m-5">
  <slot />
</main>
