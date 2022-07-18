<script lang="ts">
  import { useRegisterSW } from 'virtual:pwa-register/svelte';
  const { needRefresh, updateServiceWorker } = useRegisterSW({
    onRegistered(swr) {
      console.log(`SW registered: ${swr}`);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });
  if (needRefresh) {
    updateServiceWorker(true);
    console.log('refresh needed');
  }

  const language = window.navigator.language;
  const lang = language.substring(0, 2);
  console.log(lang);

  import Main from './pages/Main.svelte';
</script>

<Main language={lang} />
