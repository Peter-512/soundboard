<script lang='ts'>
	import * as Form from '$lib/components/ui/form';
	import { type SoundBoardItemSchema, soundBoardItemSchema } from '$lib/types';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { soundBoardItems } from '$lib/stores/soundBoardItems';
	import { isSheetOpen } from '$lib/stores/isSheetOpen';
	import { page } from '$app/stores';

	export let form: SuperValidated<SoundBoardItemSchema>;

	enum Categories {
		dragons = 'Dragons',
		werewolves = 'Werewolves'
	}

	const formValues = [
		{
			name: 'name',
			label: 'Name',
			description: 'This is the creature\'s name'
		},
		{
			name: 'alt',
			label: 'Image description',
			description: 'Please leave an accessible description for screen readers'
		},
		{
			name: 'imgSrc',
			label: 'Image link',
			description: 'This is the creature\'s image'
		},
		{
			name: 'soundSrc',
			label: 'Audio link',
			description: 'This is what the creature sounds like'
		}
	] as const;
</script>

<Form.Root options={{ resetForm: true, async onResult(input) {
	const form = input.result.data.form;
	if (!form.valid) return;
	$isSheetOpen = false;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {category, ...soundBoardItem} = form.data;
  const newId =$soundBoardItems[$soundBoardItems.length - 1].id + 1;
	if ($page.params.slug === category) {
  	$soundBoardItems = [...$soundBoardItems, {...soundBoardItem, id: newId}]
	}
  }
}}
					 class='flex flex-col gap-4'
					 method='POST' {form}
					 schema={soundBoardItemSchema}
					 let:config>
	<Form.Field {config} name='category'>
		<Form.Item>
			<Form.Label>Category</Form.Label>
			<Form.Select>
				<Form.SelectTrigger placeholder='Category' />
				<Form.SelectContent>
					{#each Object.entries(Categories) as category}
						<Form.SelectItem value={category[0]}>{category[1]}</Form.SelectItem>
					{/each}
				</Form.SelectContent>
			</Form.Select>
			<Form.Description>Which category does this creature belong to</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>

	{#each formValues as { name, label, description }}
		<Form.Field {config} name={name}>
			<Form.Item>
				<Form.Label>{label}</Form.Label>
				<Form.Input />
				<Form.Description>{description}</Form.Description>
				<Form.Validation />
			</Form.Item>
		</Form.Field>
	{/each}

	<Form.Button class='mt-3'>Submit</Form.Button>
</Form.Root>