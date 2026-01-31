<script>
  import { dev } from "$app/environment";
  import avatar from "$lib/assets/avatar.png";
  import linkedin from "$lib/assets/app-icons/LI-In-Bug.png";
  import githubBlack from "$lib/assets/app-icons/GitHub_Invertocat_Black_Clearspace.svg";
  import githubWhite from "$lib/assets/app-icons/GitHub_Invertocat_White_Clearspace.svg";
  import duolingo from "$lib/assets/app-icons/duolingo_appicon_rounded.svg";
  import jsonresume from "$lib/assets/jsonresume/resume.json"
  import Icon from '@iconify/svelte'

  
</script>

<h1 class="text-center text-4xl font-bold">{jsonresume.basics.name}</h1>
<h2 class="text-center text-2xl font-medium">Senior Software Engineer</h2>

<img src={linkedin} alt="LinkedIn" class="h-8 w-8" />
<img
  src={githubBlack}
  alt="GitHub"
  class="h-8 w-8 block dark:hidden"
/>

<img
  src={githubWhite}
  alt="GitHub"
  class="h-8 w-8 hidden dark:block"
/>
<img src={duolingo} alt="Duolingo" class="h-8 w-8" />


<div class="[&>svg]:h-5 [&>svg]:w-5 text-gray-700">
  <Icon icon="logos:typescript-icon" />
  <Icon icon="logos:html-5" />
  <Icon icon="logos:css-3" />
  <Icon icon="logos:java" />
  <Icon icon="logos:spring-icon" />
</div>

<img alt="Portrait of Mathieu Gemard" src={avatar} />

<p>Personal site with CV and blog.</p>

<nav>
  <a href="/cv">CV</a>
  {#if dev}
    <a href="/blog">Blog</a>
  {/if}
</nav>

<div class="text-5xl text-green-600 font-bold">Tailwind is working</div>
