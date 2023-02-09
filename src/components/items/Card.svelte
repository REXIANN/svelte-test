<script lang="ts">
	export let img: string;
	export let title: string;
	export let price: number;
	export let description: string;

	const show = Math.random() > 0.7;
</script>

<article class="card w-72 bg-base-100 shadow-xl">
	<figure><img src={img} alt="Shoes" /></figure>
	<div class="card-body">
		<h2 class="card-title">
			{title}
			{#if show}
				<div class="badge badge-secondary">NEW</div>
			{/if}
		</h2>
		<p>{description}</p>
		<div class="card-actions justify-between items-center">
			<div class="font-bold">Price: {price}</div>
			<button class="btn btn-success">Buy Now</button>
		</div>
	</div>
</article>
