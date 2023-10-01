<script lang='ts'>
	import * as Sheet from '$lib/components/ui/sheet';
	import { activeId, isPlaying } from '$lib/stores/isPlaying';
	import { fly } from 'svelte/transition';
	import { settings } from '$lib/stores/settings';
	import SoundBoardItem from '$lib/ui/SoundBoardItem.svelte';
	import Category from '$lib/ui/Category.svelte';
	import SoundBoardForm from './SoundBoardForm.svelte';
	import { PlusCircled } from 'radix-icons-svelte';
	import { soundBoardItems } from '$lib/stores/soundBoardItems';
	import { isSheetOpen } from '$lib/stores/isSheetOpen';

	export let data;
	const { items, category, form } = data;

	$: $soundBoardItems = [...items];
</script>

<Category {...category} size={'lg'}></Category>

<section class='flex gap-5 flex-wrap my-5 justify-center'>
	{#each $soundBoardItems as item}
		<SoundBoardItem {...item} />
	{/each}
</section>

{#if $isPlaying && $settings.altTextDisplayed}
	<section transition:fly={{y: 50}} class='flex justify-center'>
		<blockquote class='mt-6 border-l-2 pl-6 italic'>
			{$soundBoardItems.find((item) => item.id === $activeId)?.alt}
		</blockquote>
	</section>
{/if}

<Sheet.Root bind:open={$isSheetOpen}>
	<Sheet.Trigger class='fixed bottom-5 right-5'>
		<PlusCircled size={45} />
	</Sheet.Trigger>
	<Sheet.Content class='overflow-y-auto'>
		<Sheet.Header class='mb-8'>
			<Sheet.Title>Add new mythical creatures</Sheet.Title>
			<Sheet.Description>Unleash Your Imagination: Enrich Our Mythical Realm with New and Wondrous Creatures
			</Sheet.Description>
		</Sheet.Header>
		<SoundBoardForm {form} />
	</Sheet.Content>
</Sheet.Root>
