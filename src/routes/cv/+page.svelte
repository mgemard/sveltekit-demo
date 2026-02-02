<script lang="ts">
  import type { AlphaTabApi } from '@coderline/alphatab';
  import AlphaTabMusicXML from '$lib/AlphaTabMusicXML.svelte';

  let api: AlphaTabApi | null = null;

  function play() {
    console.log("api")
    console.log(api)

    // Play all tracks from the beginning
    api?.playPause();

  }

  function pause() {
    api?.pause();
  }
</script>

<button on:click={play} disabled={!api}>
  ▶ Play
</button>

<button on:click={pause} disabled={!api}>
  ⏸ Pause
</button>

<AlphaTabMusicXML on:ready={(e) => (api = e.detail)} />
