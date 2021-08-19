<script>
    import { count } from '../store'
    console.log($count); // logs 0
    $: value = $count

    const handleCLick = () => {
        count.set($count + 1);
        console.log($count); // logs 1
    };
</script>

<button on:click={handleCLick}>Click Me {value}</button>
