<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  let isCompleted = $state(false);
  let textColor = $derived(isCompleted ? 'text-primary' : 'text-error');
</script>

<div class="flex flex-row items-center space-x-2">
  <div class="mt-3">
    <input type="checkbox" class="checkbox text-primary" bind:checked={isCompleted} />
  </div>

  <h4 class={textColor}>{@render children()}</h4>
</div>
