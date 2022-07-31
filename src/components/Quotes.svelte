<script lang="ts">
  export let content: string = 'Hello World !';
</script>

<div
  id="quotes"
  class="lg:bg-[#21052f] bg-[#371647] lg:mt-8 text-white pt-2 pb-2 lg:rounded-xl flex justify-center items-center"
>
  <p class="font-mundial text-[#ece0f3] italic font-thin">{content}</p>
</div>
