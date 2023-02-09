<script>
	import Nav from '../components/Nav';
	import Footer from '../components/Footer';

	import '../app.css';
</script>

<section class="h-full flex flex-col layout">
	<Nav />
	<main>
		<slot />
	</main>
	<Footer />
</section>
