<script lang="ts">
  import Social from '../components/Social.svelte';
  import List from '../components/List.svelte';
  import Box from '../components/Box.svelte';
  import Container from '../components/Container.svelte';
  import Logo from '../components/Logo.svelte';
  import Subtitle from '../components/Subtitle.svelte';
  import Title from '../components/Title.svelte';
</script>

<Container>
  <Logo />
  <Box>
    <Title text="Hello, I'm diamant. 👋" />
    <Subtitle text="She/Her" />
    <div class="font-light">
      <List
        contents={[
          '📂 Typescript developper.',
          '🪶 Emotional writer.',
          '💾 Do french videos.',
        ]}
      />
      <List
        contents={[
          '💚 Pokemon & Sims lover.',
          '👑 Furry princess.',
          '🌈 Love rainbows.',
        ]}
      />
      <Social
        contents={[
          {
            text: 'Youtube',
            href: 'https://www.youtube.com/channel/UCcF4Rn8Gbzc_Z_8hIeeV7dg',
            color: '#f87171',
          },

          {
            text: 'Github',
            href: 'https://github.com/herisdia',
            color: '#facc15',
          },

          {
            text: 'DeviantArt',
            href: 'https://deviantart.com/hereisdia',
            color: '#4ade80',
          },

          {
            text: 'Source Code',
            href: 'https://github.com/herisdia/herisdia.me',
            color: '#60a5fA',
          },

          {
            text: 'Art By Puurply',
            href: 'https://www.deviantart.com/puurply',
            color: '#c084fc',
          },
        ]}
      />
    </div>
  </Box>
</Container>
