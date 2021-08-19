<script lang="ts">
    const name: string = 'world!'
</script>

<p class="myp center">
    hello {name}
</p>

<style>
    p {
        text-align: center;
        color: red;
    }

    .myp {
        font-size: 72px;
    }

    p:global(.center) {
        text-align: center;
    }

    :global(p) {
        margin: 0;
    }
</style>