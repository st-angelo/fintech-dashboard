<script context="module" lang="ts">
  import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

  export type MenuItem = {
    name: string;
    icon: IconDefinition;
    children: MenuItem[] | null;
  };
</script>

<script lang="ts">
  import Fa from 'svelte-fa';
  import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

  export let name: string;
  export let items: MenuItem[];
</script>

<div class="flex flex-col gap-8">
  <h2 class="font-semibold">{name}</h2>
  {#each items as item}
    <div class="flex items-center gap-3">
      <Fa icon={item.icon} size="lg" class="w-8 text-lilac-800" />
      <span class="font-semibold text-silver-400">{item.name}</span>
      {#if item.children !== null}
        <div class="flex grow justify-end">
          <Fa
            icon={faChevronRight}
            size="xs"
            class="cursor-pointer text-lilac-800"
          />
        </div>
      {/if}
    </div>
  {/each}
</div>
