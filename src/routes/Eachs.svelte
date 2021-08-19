<script lang="ts">
    interface ISItemData {
        name: string
        age: number
        id: number
    }
    const list: Array<ISItemData> = [
        {
            name: 'name',
            age: 12,
            id: 1
        },
        {
            name: 'name2',
            age: 11,
            id: 2
        }
    ]
    const empty: Array<ISItemData> = []
</script>


<h1>list</h1>
<ul>
	{#each list as item}
		<li>{item.name} x {item.age}</li>
	{/each}
</ul>


<h1>list1</h1>
<ul>
	{#each list as { name, age, id }, i (id)}
		<li>{i + 1} : {name} x {age}</li>
	{/each}
</ul>

<h1>empty</h1>
<ul>
	{#each empty as { name, age, id }, i (id)}
		<li>{i + 1} : {name} x {age}</li>
        {:else}
        <p>is empty</p>
	{/each}
</ul>