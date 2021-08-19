<script lang="ts">
    let count: number = 1

    const handleClick = () => {
        count += 2
    }
</script>

<button on:click={handleClick} on:click={() => console.log('click')}>Click</button>

<input type="number" bind:value={count} />

{#if count > 10}
	<p>count 大于 10</p>
{:else if count < 3}
	<p>count 小于 3</p>
{:else}
	<p>just right!</p>
{/if}