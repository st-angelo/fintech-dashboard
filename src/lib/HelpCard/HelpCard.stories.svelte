<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import HelpCard from "./HelpCard.svelte";
</script>

<Meta
  title="HelpCard"
  component={HelpCard}
/>

<Template let:args>
  <HelpCard {...args} />
</Template>

<Story
  name="Default"
/>