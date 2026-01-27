<script lang="ts">
  import { allPosts } from '$lib/posts';
</script>

<h1 class="text-3xl font-bold mb-8">Blog</h1>

<ul class="space-y-4">
  {#each allPosts as post}
    <li>
      <a
        href={`/blog/${post.slug}`}
        class="text-lg font-medium text-blue-700 hover:underline"
      >
        {post.title}
      </a>
      <div class="text-sm text-gray-500">{post.date}</div>
    </li>
  {/each}
</ul>