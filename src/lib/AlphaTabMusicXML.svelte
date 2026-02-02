<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import * as alphaTab from '@coderline/alphatab';
  import type { AlphaTabApi } from '@coderline/alphatab';
  
  const dispatch = createEventDispatcher<{ ready: AlphaTabApi }>();
  let container: HTMLDivElement;
  
  onMount(async () => {
    const api = new alphaTab.AlphaTabApi(container, {
      core: {
        useWorkers: false,
        fontDirectory: '/alphatab/font/'
      },
      player: {
        enablePlayer: true
      }
    });
    
    api.scoreLoaded.on(() => {
      dispatch('ready', api);
    });
    
    // Load the file programmatically
    try {
      const response = await fetch('/scores/example.musicxml');
      const arrayBuffer = await response.arrayBuffer();
      api.load(arrayBuffer);
    } catch (error) {
      console.error('Error loading score:', error);
    }
  });
</script>

<div
  bind:this={container}
  class="alphatab"
></div>

<style>
  .alphatab {
    width: 100%;
    min-height: 500px;
  }
</style>