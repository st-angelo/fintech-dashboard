<script lang="ts">
  import Header from './lib/Header.svelte';
  import Nav from './lib/Nav.svelte';
</script>

<header />

<main class="flex h-screen">
  <Nav />
  <div class="flex w-full flex-col">
    <Header />
    <section>Tasks In Progress</section>
  </div>
</main>
