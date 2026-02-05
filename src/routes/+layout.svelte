<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen flex flex-col bg-gray-50 text-gray-900">
  <Header />

  <!-- <main class="flex-1 mx-auto w-full max-w-3xl px-4 py-12"> -->
   <main class="flex-1 w-full px-4 py-12">
    <slot />
  </main>

  <Footer />
</div>