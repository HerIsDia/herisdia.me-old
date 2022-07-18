<script lang="ts">
  import type { Social } from 'src/types';
  export let contents: Social[];
</script>

<ul
  id="social"
  class="lg:mt-16 lg:flex lg:flex-row lg:justify-between lg:flex-wrap"
>
  {#each contents as content}
    <li class="underline" style="color: {content.color};">
      <a href={content.href} target="_blank">{content.text}</a>
    </li>
  {/each}
</ul>
