<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<span class="badge badge-info -mt-1 text-white">{@render children()}</span>
