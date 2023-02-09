<script lang="ts">
	export let obj: { name: string; age: number };
</script>

<h2>Child component</h2>

<div>
	<div>obj from parent</div>
	<div>
		{obj.name}
		{obj.age}
	</div>
	<button
		on:click={() => {
			obj.age = obj.age + 1;
		}}>update age</button
	>
</div>
