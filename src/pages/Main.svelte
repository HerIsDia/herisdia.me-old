<script lang="ts">
  import Social from '../components/Social.svelte';
  import List from '../components/List.svelte';
  import Box from '../components/Box.svelte';
  import Container from '../components/Container.svelte';
  import Logo from '../components/Logo.svelte';
  import Subtitle from '../components/Subtitle.svelte';
  import Title from '../components/Title.svelte';
  import Quotes from '../components/Quotes.svelte';

  import { languageString } from '../languages/content';
  import { logoRandom } from '../scripts/logoRandom';
  export let language: string = 'en';
</script>

<Container>
  <Box>
    <div class="flex flex-row items-center gap-4 mb-8">
      <Logo src={logoRandom()} />
      <div>
        <Title text={languageString[language].title} />
        <Subtitle text={languageString[language].subtitle} />
      </div>
    </div>
    <div class="font-light">
      <Quotes lang={language} />
      {#each languageString[language].lists as list}
        <List contents={list} />
      {/each}
      <Social contents={languageString[language].social} />
    </div>
  </Box>
</Container>
