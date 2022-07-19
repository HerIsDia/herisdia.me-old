<script lang="ts">
  import type { Social } from '../types';
  export let contents: Social[];
</script>

<div
  id="social"
  class="lg:mt-8 flex flex-col lg:flex-row lg:justify-between lg:flex-wrap"
>
  {#each contents as content}
    <a
      id="button"
      style="--color: {content.color};"
      class="mt-4 lg:ml-2 lg:mr-2 uppercase bg-[#040f13] p-2 lg:p-4 border-solid border-2 text-center"
      href={content.href}
      target="_blank">{content.text}</a
    >
  {/each}
</div>

<style>
  #button {
    color: var(--color);
    border-color: var(--color);
    transition: all 0.2s ease-in-out;
  }

  #button:hover,
  #button:focus {
    background-color: var(--color);
    color: #040f13;
    border-color: #fff;
    transform: scale(1.05);
  }
</style>
