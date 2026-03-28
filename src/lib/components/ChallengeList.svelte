<script lang="ts">
  import type { Challenge } from '$lib/model/Challenge.ts';
  import ChallengeThumbnail from '$lib/components/ChallengeThumbnail.svelte';

  interface Props {
    challenges: Challenge[];
  }

  let { challenges }: Props = $props();
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
  {#each challenges as challenge (challenge.route)}
    <ChallengeThumbnail {challenge} />
  {/each}
</div>
