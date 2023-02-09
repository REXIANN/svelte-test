<script>
	let number = 0;

	function increase() {
		number = number + 1;
	}

	function decrease() {
		number = number - 1;
	}

	function double() {
		number = number * 2;
	}
</script>

<main class="flex justify-center items-center">
	<div class="artboard phone-1 flex flex-col justify-center items-center gap-4">
		<div class="mockup-code mb-10">
			<pre data-prefix="$"><code>virtual DOM is slow.</code></pre>
			<pre data-prefix="$"><code>use svelte instead.</code></pre>
		</div>

		<input
			bind:value={number}
			disabled
			type="text"
			placeholder="Type here"
			class="input w-full max-w-xs border-gray-400"
		/>

		<div class="btn-group">
			<button on:click={increase} class="btn btn-active">+ 1</button>
			<button on:click={double} class="btn">X 2</button>
			<button on:click={decrease} class="btn">- 1</button>
		</div>
	</div>
</main>
