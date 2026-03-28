<script lang="ts">
  let { children } = $props();
</script>

<article class="prose lg:prose-lg mb-12 px-8">
  {@render children()}
</article>
