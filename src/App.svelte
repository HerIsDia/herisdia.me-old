<script lang="ts">
  import { useRegisterSW } from 'virtual:pwa-register/svelte';
  useRegisterSW({
    onRegistered(swr) {
      console.log(`SW registered: ${swr}`);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
    onNeedRefresh() {
      window.location.reload();
    },
  });

  const language = window.navigator.language;
  const lang = language.substring(0, 2);

  import Main from './pages/Main.svelte';
  import Redirection from './pages/Redirection.svelte';
  import EastersEggs from './pages/EastersEggs.svelte';
  import TextboxEa from './components/TextboxEA.svelte';

  $: quickAccess = window.location.hash.slice(1);
  console.log(quickAccess);
</script>

<TextboxEa bind:quickAccessString={quickAccess} />

{#if quickAccess.startsWith('r:')}
  <Redirection {quickAccess} language={lang} />
{:else if quickAccess.startsWith('e:')}
  <EastersEggs {quickAccess} language={lang} />
{:else}
  <Main language={lang} />
{/if}
