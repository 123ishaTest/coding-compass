<script lang="ts">
  import type { Challenge } from '$lib/model/Challenge.ts';

  interface Props {
    challenge: Challenge;
  }

  let { challenge }: Props = $props();
</script>

<a href={challenge.route}>
  <div class="card bg-base-200 shadow-md drop-shadow-md hover:shadow-lg hover:drop-shadow-lg">
    <div class="card-body">
      <h2 class="text-3xl font-bold">{challenge.title}</h2>
      <span>{challenge.description}</span>
      <div class="mt-6 px-4">
        <button class="btn btn-primary btn-block text-white">Start!</button>
      </div>
    </div>
  </div>
</a>
