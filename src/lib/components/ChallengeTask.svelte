<script lang="ts">
  import { getContext, type Snippet } from 'svelte';
  import type { LocalStore } from '$lib/util/localStorage.svelte.ts';

  interface Props {
    key: string;
    children: Snippet;
  }

  let { key, children }: Props = $props();

  const progress = getContext<LocalStore<Record<string, boolean>>>('progress');

  let isCompleted = $derived(progress.value[key] ?? false);
  let challenge = $derived(key.split('/')[0]);

  function onChange() {
    if (isCompleted) {
      sa_event('task_completed', {
        challenge: challenge,
        key: key,
      });
    }
  }

  let textColor = $derived(isCompleted ? 'text-primary' : 'text-error');
</script>

<div class="flex flex-row items-center space-x-2">
  <div class="mt-3">
    <input type="checkbox" class="checkbox text-primary" bind:checked={progress.value[key]} onchange={onChange} />
  </div>

  <h4 class={textColor}>{@render children()}</h4>
</div>
