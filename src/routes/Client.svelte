<script lang="ts">
    import { onMount } from 'svelte';
    let clientWidth,
        clientHeight,
        offsetWidth,
        offsetHeight;

        

	let canvasElement;
    let ctx

	onMount(() => {
		ctx = canvasElement.getContext('2d');
	});
    
</script>

<!-- {@debug ctx} -->

<div
	bind:offsetWidth={offsetWidth}
	bind:offsetHeight={offsetHeight}
	bind:clientWidth={clientWidth}
	bind:clientHeight={clientHeight}
>
    <p>clientWidth: {clientWidth}</p>
    <p>clientHeight: {clientHeight}</p>
    <p>offsetWidth: {offsetWidth}</p>
    <p>offsetHeight: {offsetHeight}</p>
</div>


<canvas bind:this={canvasElement}></canvas>