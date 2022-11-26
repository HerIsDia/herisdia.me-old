<script lang="ts">
  import type { Social } from '../types';
  export let contents: Social[][];
</script>

<div class="lg:mt-8">
  {#each contents as content}
    <div
      id="social"
      class="mt-4 flex flex-row items-center justify-start lg:justify-start flex-wrap gap-4"
    >
      {#each content as item}
        <a
          id="button"
          style="--color: {item.color};"
          href={item.href}
          target="_blank">{item.text}</a
        >
      {/each}
    </div>
  {/each}
</div>

<style>
  #button {
    color: var(--color);
    transition: all 0.2s ease-in-out;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1f1f1f;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
  }

  #button:hover {
    color: white;
    border-color: var(--color);
  }
  #button:focus,
  #button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>
