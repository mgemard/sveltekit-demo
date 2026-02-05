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
        fontDirectory: '/alphatab/font/',
        engine: 'svg'
      },
    display: {
      layoutMode: alphaTab.LayoutMode.Page, 
      // layoutMode: alphaTab.LayoutMode.Horizontal, 
      staveProfile: alphaTab.StaveProfile.Default,
      // resources: {
      //   barNumberFont: '11px Arial'
      // }
    },
    //     notation: {
    //   notationMode: alphaTab.NotationMode.GuitarPro,
    // },
      player: {
        enablePlayer: true,
        // soundFont: '/alphatab/soundfont/GarageBand_Acoustic_Guitar.sf2',
        soundFont: '/alphatab/soundfont/sonivox.sf2',
        enableCursor: true,
        scrollMode: alphaTab.ScrollMode.Continuous,
        // scrollMode: alphaTab.ScrollMode.OffScreen,
				enableUserInteraction: true,
        // metronomeVolume: 0,
        // countInVolume: 0
      }
    });
    
  // Add these debug listeners
  api.renderStarted.on(() => {
    console.log('Render started');
  });
  api.renderFinished.on(() => {
    console.log('Render finished');
    // Check for cursor after render
    setTimeout(() => {
      const cursor = document.querySelector('.at-cursor-bar');
      console.log('Cursor element:', cursor);
    }, 1000);
  });
  
  api.playerStateChanged.on((e) => {
    console.log('Player state:', e.state);
  });
  

    api.scoreLoaded.on(() => {
      dispatch('ready', api);
    });
    
  //     // Add resize handler
  // const handleResize = () => {
  //   api.updateSettings();
  //   api.render();
  // };
  
  // window.addEventListener('resize', handleResize);
  
    
  api.scoreLoaded.on(() => {
    dispatch('ready', api);
  });
  
  // Load the file in a separate async function
  (async () => {
    try {
      const response = await fetch('/scores/example.musicxml');
      const arrayBuffer = await response.arrayBuffer();
      api.load(arrayBuffer);
    } catch (error) {
      console.error('Error loading score:', error);
    }
  })();

      // Cleanup
  // return () => {
  //   window.removeEventListener('resize', handleResize);
  //   api.destroy();
  // };

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