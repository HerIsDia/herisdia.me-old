<script lang="ts">
  import Social from '../components/Social.svelte';
  import List from '../components/List.svelte';
  import Box from '../components/Box.svelte';
  import Container from '../components/Container.svelte';
  import Logo from '../components/Logo.svelte';
  import Subtitle from '../components/Subtitle.svelte';
  import Title from '../components/Title.svelte';

  import { languageString } from '../languages/content';
  export let language: string = 'en';
</script>

<Container>
  <Logo />
  <Box>
    <Title text={languageString[language].title} />
    <Subtitle text={languageString[language].subtitle} />
    <div class="font-light">
      {#each languageString[language].lists as list}
        <List contents={list} />
      {/each}
      <Social contents={languageString[language].social} />
    </div>
  </Box>
</Container>
