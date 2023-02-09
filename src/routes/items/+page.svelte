<script lang="ts">
	import type { PageData } from './$types';
	import type { Product } from '../../components/items/types';

	export let data: PageData;
	const products: Product[] = data.products;
</script>

<h1>Items</h1>
{#each products as { title, description, price, images }}
	name: {title}
	description: {description}
	price: {price}

	<div>
		images: {images[0]}
		<!-- {#each images as src}
			<img alt="img of {title}" {src} />
		{/each} -->
	</div>
	<br />
{/each}
