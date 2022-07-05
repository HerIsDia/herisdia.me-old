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
</script>

<div id="container" class="h-screen w-full flex items-center justify-center">
  <div id="content" class="w-full lg:w-3/5">
    <div id="logo" class="flex justify-center items-center ">
      <img
        src="./logo.png"
        alt="HerIsDia logo"
        class="w-[200px] rounded-full border-solid border-8 border-[#ca9eec]"
      />
    </div>
    <div
      id="box"
      class="bg-[#21052f] -mt-24 text-white pt-36 pb-16 pl-16 pr-16 lg:rounded-[4rem] flex justify-center items-center"
    >
      <div id="content" class="font-mundial text-[#ece0f3]">
        <h1 class="font-bold text-4xl lg:text-5xl xl:text-6xl">
          Hello, I'm diamant. 👋
        </h1>
        <h2 class="text-2xl lg:text-3xl xl:text-4xl pb-8">
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300"
            >She/Her.</span
          >
        </h2>
        <div class="font-light">
          <ul id="description" class="mb-4">
            <li>📂 Typescript developper.</li>
            <li>🪶 Emotional writer.</li>
            <li>💾 Do french videos.</li>
          </ul>
          <ul id="hobby">
            <li>💚 Pokemon & Sims lover.</li>
            <li>👑 Furry princess.</li>
            <li>🌈 Love rainbows.</li>
          </ul>
          <ul
            id="social"
            class="mt-4 lg:mt-16 lg:flex lg:flex-row lg:justify-between lg:flex-wrap"
          >
            <li class="underline text-red-400">
              <a
                href="https://www.youtube.com/channel/UCcF4Rn8Gbzc_Z_8hIeeV7dg"
                target="_blank">Youtube</a
              >
            </li>
            <li class="underline text-yellow-400">
              <a href="https://github.com/herisdia" target="_blank">Github</a>
            </li>
            <li class="underline text-green-400">
              <a href="https://deviantart.com/hereisdia" target="_blank"
                >English DeviantArt</a
              >
            </li>
            <li class="underline text-blue-400">
              <a href="https://deviantart.com/herisdia" target="_blank"
                >French DeviantArt</a
              >
            </li>
            <li class="underline text-purple-400">
              <a href="https://www.deviantart.com/puurply" target="_blank"
                >Art by Puurply</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
