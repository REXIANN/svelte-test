<script lang="ts">
	export let data: { values: string[] };

	$: values = data.values;
</script>

<div class="flex flex-wrap gap-4">
	{#each values as value}
		{@const row = value[0]}
		{@const title = value[1]}
		{@const kind = value[2]}
		{@const menu = value[3]}
		{@const destination = value[5]}
		{@const timeToArrive = value[6]}

		<article class="card w-72 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">
					{title}
				</h2>
				<p>{kind}</p>
				<p>{menu}</p>
				<p>{destination}</p>
				<div class="card-actions justify-between items-center">
					<div class="font-bold">Price: {timeToArrive}</div>
				</div>
			</div>
		</article>
	{/each}
</div>
