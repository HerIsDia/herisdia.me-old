<script lang="ts">
  import { useRegisterSW } from 'virtual:pwa-register/svelte';
  const updateSW = useRegisterSW({
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
</script>

<Main language={lang} />
