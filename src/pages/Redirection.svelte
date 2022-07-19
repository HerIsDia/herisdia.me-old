<script lang="ts">
  import Box from '../components/Box.svelte';
  import Container from '../components/Container.svelte';
  import Logo from '../components/Logo.svelte';
  import Subtitle from '../components/Subtitle.svelte';
  import Title from '../components/Title.svelte';
  import Main from './Main.svelte';

  import { onMount } from 'svelte';

  export let quickAccess: string;
  export let language: string = 'en';

  const disp = [
    {
      id: 'deviantart-fr',
      display: 'DeviantArt',
      url: 'https://www.deviantart.com/herisdia',
    },
    {
      id: 'deviantart-en',
      display: 'DeviantArt',
      url: 'https://www.deviantart.com/hereisdia',
    },
    {
      id: 'youtube',
      display: 'Youtube',
      url: 'https://www.youtube.com/channel/UCcF4Rn8Gbzc_Z_8hIeeV7dg',
    },
    {
      id: 'source-code',
      display: "herisdia.me's source code",
      url: 'https://github.com/herisdia/herisdia.me',
    },
    { id: 'github', display: 'Github', url: 'https://github.com/herisdia' },
    {
      id: 'logo-artist',
      display: 'artist',
      url: 'https://www.deviantart.com/puurply',
    },
  ];

  const args = quickAccess.split(':')[1];
  const found = disp.find((item) => item.id === args);

  let delay = 69;
  $: display = delay / 10 + `${delay % 10 == 0 ? '.0' : ''} s.`;

  onMount(() => {
    if (found) {
      const interval = setInterval(() => {
        delay -= 1;
        if (delay <= 0) {
          clearInterval(interval);
          window.location.href = found.url;
        }
      }, 100);
    }
  });
</script>

{#if disp.find((item) => item === found)}
  <Container>
    <Logo />
    <Box>
      <Title text="Redirecting into {found.display}. 🧳" />
      <Subtitle text={display} />
    </Box>
  </Container>
{:else}
  <Main {language} />
{/if}
