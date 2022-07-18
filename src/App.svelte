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
  }

  import Main from './pages/Main.svelte';
</script>

<Main />
