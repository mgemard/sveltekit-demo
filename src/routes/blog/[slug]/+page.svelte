<script lang="ts">
  export let data;
</script>

<article class="prose prose-gray max-w-none">
  <h1>{data.meta.title}</h1>
  <p class="text-sm text-gray-500">{data.meta.date}</p>

  <svelte:component this={data.content} />
</article>