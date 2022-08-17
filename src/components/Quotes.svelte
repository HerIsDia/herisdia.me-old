<script lang="ts">
  import { onMount } from 'svelte';

  import * as quotes from '../quotes.json';
  export let lang: string = 'en';
  let quoteP: HTMLParagraphElement;
  let oldQuote: string = '';

  const generateQuote = () => {
    const quotesInLanguage = quotes[lang];
    let randomQuote = '';
    while (randomQuote === oldQuote) {
      randomQuote =
        quotesInLanguage[Math.floor(Math.random() * quotesInLanguage.length)];
    }
    return randomQuote;
  };

  onMount(() => {
    quotesToRender = generateQuote();
    setTimeout(() => {
      quoteP.style.opacity = '1';
      quoteP.style.transform = 'translateX(0)';
    }, 69);
  });

  export let content: string = '';
  $: quotesToRender = content;

  setInterval(() => {
    quoteP.style.opacity = '0';
    quoteP.style.transform = 'translateX(-30px)';
    setTimeout(() => {
      quoteP.style.transitionDuration = '0s';
      quoteP.style.transform = 'translateX(30px)';
      quotesToRender = generateQuote();
      setTimeout(() => {
        quoteP.style.transitionDuration = '0.69s';
        quoteP.style.opacity = '1';
        quoteP.style.transform = 'translateX(0)';
      }, 69);
    }, 690);
  }, 6900);
</script>

<div
  id="quotes"
  class="lg:bg-[#21052f] bg-[#371647] lg:mt-8 text-white pt-2 pb-2 lg:rounded-xl flex justify-center items-center"
>
  <p
    bind:this={quoteP}
    class="quoteText font-mundial text-[#ece0f3] italic font-thin"
    style="opacity: 0; transform: translateX(30px);"
  >
    {@html quotesToRender}
  </p>
</div>

<style>
  .quoteText {
    transition: all 0.69s ease-out;
  }
</style>
