<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let name: string = "world!";
    export let age: number = 18;
    export let email: string = 'just.xx@xx.com';
    export const handleMessage: Function = () => {}

    const handleClick = () => {
        // dispatch('message', name)
        handleMessage()
    }
</script>

<button on:click={handleClick}>hello {name}</button>

<p>
    age: {age}
</p>
<p>
    email: {email}
</p>


<button on:click>Click Me</button>