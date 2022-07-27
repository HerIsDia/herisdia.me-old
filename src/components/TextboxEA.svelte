<script lang="typescript">
  let form: HTMLFormElement;

  const triggered = (e: KeyboardEvent) => {
    if (e.key === 'C' && e.ctrlKey) {
      e.preventDefault();
      form.classList.toggle('hidden');
      form.focus();
    }
  };

  const submit = (e: SubmitEvent) => {
    form.classList.toggle('hidden');
  };
</script>

<svelte:window on:keydown={triggered} />

<form
  bind:this={form}
  on:submit|preventDefault
  class="absolute top-3 left-3 w-2/5 hidden"
>
  <input type="text" class="w-full rounded-md border-2 border-blue-200" />
</form>
