<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import TextField from "./TextField.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="TextField"
  component={TextField}
  argTypes={{ 
    value: { 
      name: 'value', 
      type: { 
        name: 'string', 
        required: false 
      }, 
      control: { 
        type: 'text' 
      } 
    } 
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <TextField {...args} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Empty"
/>

<Story
  name="WithValue"
  args={{ value: 'invoice' }}
/>