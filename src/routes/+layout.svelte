<script lang="ts">
  import './layout.css';
  import { asset, resolve } from '$app/paths';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';

  let { children } = $props();
</script>

<div class="flex h-screen flex-col">
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <div class="ml-2">
        <ThemeToggle />
      </div>
    </div>
    <div class="navbar-center flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href={resolve('/')}>Home</a></li>

        <li><a href={resolve('/challenges')}>Challenges</a></li>
      </ul>
    </div>
    <div class="navbar-end px-2">
      <div class="flex flex-row items-center space-x-2">
        <a href="https://github.com/123ishaTest/ludiek" target="_blank">
          <img class="w-6" src={asset('/icons/github.svg')} alt="Github" />
        </a>
        <a href="https://discord.gg/FpPru952j6" target="_blank">
          <img class="w-6" src={asset('/icons/discord.svg')} alt="Discord" />
        </a>
        <a href="https://patreon.com/123ishaTest" target="_blank">
          <img class="w-6" src={asset('/icons/patreon.svg')} alt="Patreon" />
        </a>
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center overflow-y-scroll">
    <div class="grid grid-cols-1">
      {@render children()}
    </div>
  </div>
</div>
