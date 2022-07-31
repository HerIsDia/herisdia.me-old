<script lang="ts">
  import * as quotes from '../quotes.json';
  export let lang: string = 'en';

  const quotesInLanguage = quotes[lang];
  const randomQuote =
    quotesInLanguage[Math.floor(Math.random() * quotesInLanguage.length)];

  export let content: string = randomQuote;
</script>

<div
  id="quotes"
  class="lg:bg-[#21052f] bg-[#371647] lg:mt-8 text-white pt-2 pb-2 lg:rounded-xl flex justify-center items-center"
>
  <p class="font-mundial text-[#ece0f3] italic font-thin">{@html content}</p>
</div>
