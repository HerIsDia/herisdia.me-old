<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<div
  in:fly={{ x: 369, duration: 1569, delay: 1569 }}
  out:fly={{ x: -369, duration: 1569 }}
  id="container"
  class="h-screen w-full flex items-center justify-center"
>
  <div id="content" class="w-full lg:w-4/5">
    <slot />
  </div>
</div>
