<script lang="ts">
  import TextField from '../components/TextField/TextField.svelte';
  import Fa from 'svelte-fa';
  import {
    faNoteSticky,
    faInbox,
    faEllipsisVertical,
  } from '@fortawesome/free-solid-svg-icons';
</script>

<header class="h-80 border-b-2 border-lilac-200 bg-lilac-100 text-silver-700 font-semibold">
  <div class="flex items-center justify-between py-5 px-10">
    <TextField />
    <div class="flex gap-8 text-tar">
      <Fa icon={faNoteSticky} size="lg" class="cursor-pointer" />
      <Fa icon={faInbox} size="lg" class="cursor-pointer" />
      <Fa icon={faEllipsisVertical} size="lg" class="cursor-pointer" />
    </div>
    <div class="flex gap-8">
      <span>Wallet</span>
      <span>Invoice</span>
    </div>
    <div class="flex items-center gap-4 text-tar">
      <span>Hi, Angelo</span>
      <span class="h-10 w-10 rounded-md bg-silver-200" />
    </div>
  </div>
</header>
