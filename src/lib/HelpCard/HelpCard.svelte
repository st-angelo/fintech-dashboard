<script lang="ts">
  import Fa from 'svelte-fa';
  import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
</script>

<div
  class="relative z-10 flex h-80 w-full max-w-screen-sm flex-col items-center justify-end rounded-2xl bg-gradient-to-br from-peach-100 via-lilac-200 to-lilac-300 p-7 text-gold-1k shadow-[0_2px_5px_0px] shadow-lilac-300"
>
  <div class="z-10 flex flex-col items-center gap-5">
    <h3 class="text-lg font-bold">Help Center</h3>
    <p class="text-center text-sm font-semibold text-gold-400">
      Having trouble in Finti? Please contact us for more questions.
    </p>
    <button class="mt-4 w-full rounded-lg bg-white py-3 text-sm font-bold"
      >Go To Help Center</button
    >
  </div>

  <div
    class="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/3 items-center justify-center rounded-full bg-ghost-white shadow-[0_10px_10px_0px_rgba(0,0,0,0.12),0_30px_20px_5px_rgba(0,0,0,0.10),0_80px_30px_10px_rgba(0,0,0,0.08),0_-5px_20px_0px_rgba(0,0,0,0.05)]"
  >
    <Fa icon={faCircleQuestion} class="text-peach-800 cursor-pointer" size="2x" />
  </div>
  <div class="shape-wrapper rounded-2xl">
    <div
      class="absolute -top-44 -left-44 h-60 w-64 rounded-full bg-ghost-white opacity-60"
    />
    <div
      class="absolute -bottom-28 -right-28 h-56 w-52 rounded-full bg-ghost-white opacity-50"
    />
  </div>
</div>
