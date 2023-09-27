<script lang="ts">
  import type { PageData } from "./$types";
  import Image from "$lib/ui/Image.svelte";

  export let data: PageData;
  const { soundBoardItem: { alt, src, id } } = data;

</script>

<Image alt={alt} src={src} id={id} size={'lg'} />

