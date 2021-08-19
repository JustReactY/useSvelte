<svelte:options tag="my-component" />

<script>
    import { get_current_component } from "svelte/internal";

    const component = get_current_component();
    // console.log(get_current_component, component, "=====");

    // example function for dispatching events
    const dispatchEvent = (name, detail) => {
        console.log(name, detail);
        // component?.dispatchEvent(new CustomEvent(name, {
        //   detail,
        //   composed: true  // propagate across the shadow DOM
        // }));
    };
</script>

<button on:click={() => dispatchEvent("test", "Hello!")}>
    Click to dispatch event
</button>
