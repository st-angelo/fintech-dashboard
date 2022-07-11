<script lang="ts">
  import Fa from 'svelte-fa';
  import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

  export let value: string = '';
</script>

<div class="relative">
  <input
    placeholder="Search..."
    class="rounded-md bg-white py-4 px-10 placeholder:text-sm focus:outline-none"
    bind:value
  />
  <Fa icon={faMagnifyingGlass} class="absolute top-5 left-3" />
</div>
