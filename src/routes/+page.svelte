<script>
  let number = 0;


</script>

<h1>Welcome to SvelteKit</h1>
<div>
  {number}
</div>

<input bind:value={number} disabled />

<button on:click={() => {
  number = number + 1
}} >
  click 
</button>