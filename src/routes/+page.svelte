<script>
  import { dev } from "$app/environment";
  import avatar from '$lib/assets/avatar.png';
</script>

<img alt="Portrait of Mathieu Gemard" src={avatar} />

<h1>Your Name</h1>

<p>Personal site with CV and blog.</p>

<nav>
  <a href="/cv">CV</a>
  {#if dev}
    <a href="/blog">Blog</a>
  {/if}
</nav>

<div class="text-5xl text-green-600 font-bold">Tailwind is working</div>
