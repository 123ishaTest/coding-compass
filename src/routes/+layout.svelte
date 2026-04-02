<script lang="ts">
  import './layout.css';
  import { resolve } from '$app/paths';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';

  let { children } = $props();
</script>

<div class="flex h-screen flex-col">
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start"></div>
    <div class="navbar-center flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href={resolve('/')}>Home</a></li>

        <li><a href={resolve('/challenges')}>Challenges</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <ThemeToggle></ThemeToggle>
    </div>
  </div>

  <div class="flex flex-col items-center overflow-y-scroll">
    <div class="grid grid-cols-1">
      {@render children()}
    </div>
  </div>
</div>
