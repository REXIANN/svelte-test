<script>
	import Child from './Child.svelte';

	let obj = {
		name: 'kim',
		age: 32
	};
</script>

<h1>Parent Component</h1>

<div>Name: {obj.name}<br /> Age: {obj.age}</div>

<Child bind:obj={obj} />
