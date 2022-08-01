<script lang="ts">
  import * as quotes from '../quotes.json';
  export let lang: string = 'en';

  const generateQuote = () => {
    const quotesInLanguage = quotes[lang];
    const randomQuote =
      quotesInLanguage[Math.floor(Math.random() * quotesInLanguage.length)];
    return randomQuote;
  };

  export let content: string = generateQuote();
  $: quotesToRender = content;

  setInterval(() => {
    quotesToRender = generateQuote();
  }, 15000);
</script>

<div
  id="quotes"
  class="lg:bg-[#21052f] bg-[#371647] lg:mt-8 text-white pt-2 pb-2 lg:rounded-xl flex justify-center items-center"
>
  <p class="quoteText font-mundial text-[#ece0f3] italic font-thin">
    {@html quotesToRender}
  </p>
</div>

<style>
  .quoteText {
    animation: quotes 15s infinite 0s;
  }

  @keyframes quotes {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
