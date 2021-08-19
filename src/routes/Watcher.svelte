<script lang="ts">
    let count: number = 0
    let Arr: Array<number> = []

    const handleClick = () => {
        count += 1
        Arr.push(count)
        Arr = [...Arr]
    }
    $: total = Arr.length
    $: document.title = count * 2 + ''
</script>


<button on:click={handleClick}>Click {count}</button>
<p>{Arr.join(',')}</p>

total: {total}