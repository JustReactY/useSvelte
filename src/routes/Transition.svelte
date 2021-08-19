<script lang="ts">
    import { fade } from 'svelte/transition';
    let value = 12
</script>


<button on:click={() => value = Math.random()}>Click</button>
{#key value}
	<div transition:fade>{value}</div>
{/key}