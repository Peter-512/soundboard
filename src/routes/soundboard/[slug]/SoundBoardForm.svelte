<script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import { type SoundBoardItemSchema, soundBoardItemSchema } from "$lib/types";
  import type { SuperValidated } from "sveltekit-superforms";
  // import { superForm } from "sveltekit-superforms/dist/client";
  export let form: SuperValidated<SoundBoardItemSchema>;

  enum Categories {
    dragons = "Dragons",
    werewolves = "Werewolves"
  }

  // const { enhance } = superForm(form);
</script>

<Form.Root options={{ resetForm: true }}
           class="flex flex-col gap-4"
           method="POST" {form}
           schema={soundBoardItemSchema}
           let:config>
  <Form.Field {config} name="category">
    <Form.Item>
      <Form.Label>Category</Form.Label>
      <Form.Select>
        <Form.SelectTrigger placeholder="Category" />
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

  <Form.Field {config} name="name">
    <Form.Item>
      <Form.Label>Name</Form.Label>
      <Form.Input />
      <Form.Description>This is the creature's name</Form.Description>
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Field {config} name="alt">
    <Form.Item>
      <Form.Label>Image description</Form.Label>
      <Form.Input />
      <Form.Description>Please leave an accessible description for screen readers</Form.Description>
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Field {config} name="imgSrc">
    <Form.Item>
      <Form.Label>Image link</Form.Label>
      <Form.Input />
      <Form.Description>This is the creature's image</Form.Description>
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Field {config} name="soundSrc">
    <Form.Item>
      <Form.Label>Audio link</Form.Label>
      <Form.Input />
      <Form.Description>This is what the creature sounds like</Form.Description>
      <Form.Validation />
    </Form.Item>
  </Form.Field>

  <Form.Button class="mt-3">Submit</Form.Button>
</Form.Root>