<script lang="ts">
	import type { PageData } from './$types';
	import type { Product } from '../../components/items/types';

	import Card from '../../components/items/Card.svelte';

	export let data: PageData;
	const products: Product[] = data.products;

	function hasImg(images?: string[]) {
		return Array.isArray(images) && images.length > 0;
	}
</script>

<section class="flex flex-wrap gap-5 justify-center">
	{#each products as { title, description, price, images }}
		{@const img = hasImg(images) ? images[0] : '#'}
		<Card {title} {description} {price} {img} />
	{/each}
</section>
