<!-- generated with chatgpt -->
 <!-- https://chatgpt.com/c/697f305f-f02c-8330-93ba-20ba27ac2441 -->
<script lang="ts">
  import avatar from "$lib/assets/avatars/avatar.png";
  import jsonresume from "$lib/assets/jsonresume/resume.json";
  import Icon from "@iconify/svelte";

  const { basics, skills, work, education, publications, languages, projects } = jsonresume;
</script>

<main class="max-w-5xl mx-auto px-6 py-12 space-y-16">

  <!-- HEADER -->
  <header class="text-center space-y-4">
    <h1 class="text-5xl font-extrabold tracking-tight">
      {basics.name}
    </h1>

    <h2 class="text-2xl font-semibold text-gray-600 dark:text-gray-400">
      {basics.label}
    </h2>

    <!-- Social links -->
    <div class="flex justify-center gap-6 pt-2">
      
      {#each basics.profiles as profile}
        <a
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-black dark:hover:text-white transition"
        >
          <Icon icon={`mdi:${profile.network.toLowerCase()}`} class="w-6 h-6" />
        </a>
      {/each}
    </div>
  </header>

  <!-- INTRO / ABOUT -->
  <section class="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
    <img
      src={avatar}
      alt={`Portrait of ${basics.name}`}
      class="rounded-xl shadow-md w-full"
    />

    <div class="space-y-6">
      <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {basics.summary}
      </p>

      <!-- Languages -->
      {#if languages?.length}
        <div>
          <h3 class="font-semibold mb-2">Languages</h3>
          <ul class="flex flex-wrap gap-3 text-sm">
            {#each languages as lang}
              <li class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                {lang.language} — {lang.fluency}
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  </section>

  <!-- SKILLS -->
  <section>
    <h2 class="text-3xl font-bold mb-8">Skills</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {#each skills as skill}
        <div class="space-y-4">
          <h3 class="font-semibold text-lg">{skill.name}</h3>

          <ul class="space-y-2">
            {#each skill.keywords as keyword}
              <li class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span class="w-2 h-2 rounded-full bg-gray-400"></span>
                {keyword}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </section>

  <!-- WORK EXPERIENCE -->
  <section>
    <h2 class="text-3xl font-bold mb-8">Work Experience</h2>

    <div class="space-y-10">
      {#each work as job}
        <article class="space-y-3">
          <div class="flex flex-col md:flex-row md:justify-between">
            <h3 class="text-xl font-semibold">
              {job.position} — {job.name}
            </h3>
            <span class="text-sm text-gray-500">
              {job.startDate} – {job.endDate ?? "Present"}
            </span>
          </div>

          <p class="text-gray-700 dark:text-gray-300">
            {job.summary}
          </p>

          {#if job.highlights?.length}
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
              {#each job.highlights as highlight}
                <li>{highlight}</li>
              {/each}
            </ul>
          {/if}
        </article>
      {/each}
    </div>
  </section>

  <!-- EDUCATION -->
  <section>
    <h2 class="text-3xl font-bold mb-8">Education</h2>

    <div class="space-y-6">
      {#each education as edu}
        <div>
          <h3 class="text-xl font-semibold">
            {edu.studyType} in {edu.area}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            {edu.institution} · {edu.startDate} – {edu.endDate}
          </p>
        </div>
      {/each}
    </div>
  </section>

  <!-- PUBLICATIONS -->
  {#if publications?.length}
    <section>
      <h2 class="text-3xl font-bold mb-8">Publications</h2>

      <div class="space-y-6">
        {#each publications as pub}
          <div>
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-xl font-semibold hover:underline"
            >
              {pub.name}
            </a>
            <p class="text-sm text-gray-500">
              {pub.publisher} · {pub.releaseDate}
            </p>
            <p class="text-gray-700 dark:text-gray-300">
              {pub.summary}
            </p>
          </div>
        {/each}
      </div>
    </section>
  {/if}

  {#if projects?.length}
  <section>
    <h2 class="text-3xl font-bold mb-8">Projects</h2>

    <div class="space-y-10">
      {#each projects as project}
        <article class="space-y-3">
          <div class="flex flex-col md:flex-row md:justify-between md:items-center">
            <h3 class="text-xl font-semibold">
              {#if project.url}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:underline"
                >
                  {project.name}
                </a>
              {:else}
                {project.name}
              {/if}
            </h3>

            {#if project.startDate}
              <span class="text-sm text-gray-500">
                {project.startDate} – {project.endDate ?? "Present"}
              </span>
            {/if}
          </div>

          {#if project.description}
            <p class="text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          {/if}

          {#if project.highlights?.length}
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
              {#each project.highlights as highlight}
                <li>{highlight}</li>
              {/each}
            </ul>
          {/if}

          <!-- {#if project.keywords?.length}
            <div class="flex flex-wrap gap-2 pt-2">
              {#each project.keywords as keyword}
                <span class="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                  {keyword}
                </span>
              {/each}
            </div>
          {/if} -->
        </article>
      {/each}
    </div>
  </section>
{/if}

  <!-- FOOTER -->
  <footer class="pt-12 border-t text-center space-y-4">
    <div class="flex justify-center gap-6">
      {#each basics.profiles as profile}
        <a
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-black dark:hover:text-white transition"
        >
          {profile.network}
        </a>
      {/each}
    </div>
  </footer>

</main>
