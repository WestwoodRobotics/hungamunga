<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		id,
		marker,
		title,
		children
	}: { id?: string; marker: string; title: Snippet; children: Snippet } = $props();
</script>

<section id={id} class="block">
	<header class="blockhead2">
		<span class="sec-marker">§ {marker}</span>
		<h2>{@render title()}</h2>
		<span class="sec-rule"></span>
	</header>
	{@render children()}
</section>

<style>
	.block {
		max-width: 1180px;
		margin: 0 auto;
		padding: 88px 28px;
	}
	.blockhead2 {
		display: grid;
		grid-template-columns: auto auto 1fr;
		align-items: end;
		gap: 18px;
		margin-bottom: 32px;
	}
	.sec-marker {
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		color: var(--accent);
		font-size: 26px;
		line-height: 1;
	}
	.blockhead2 h2 {
		font-family: inherit;
		font-weight: 500;
		font-size: clamp(24px, 3.2vw, 34px);
		letter-spacing: -0.005em;
		margin: 0;
	}
	.sec-rule {
		display: block;
		height: 1px;
		background: var(--line);
		margin: 0 0 10px 0;
	}
</style>
