<script lang="ts">
	import type { PageData } from './$types';
	import type { Product } from '../../components/items/types';

	import Card from '../../components/items/Card.svelte';

	export let data: PageData;
	const products: Product[] = data.products;
</script>

<section class="flex flex-wrap gap-5 justify-center">
	{#each products as { title, description, price, images }}
		<Card {title} {description} {price} img={images[0]} />
	{/each}
</section>
