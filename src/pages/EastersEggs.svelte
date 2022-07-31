<script lang="ts">
  import Main from './Main.svelte';

  export let quickAccess: string;
  export let language: string = 'en';

  $: args = quickAccess.split(':')[1];
</script>

<!-- Languages -->
{#if args == 'espo'}
  <!-- Espagnolo (private joke) -->
  <Main language="espo" />
{:else if args == 'en'}
  <!-- English -->
  <Main language="en" />
{:else if args == 'fr'}
  <!-- French -->
  <Main language="fr" />
{:else}
  <!-- Return if none of the above -->
  <Main {language} />
{/if}
