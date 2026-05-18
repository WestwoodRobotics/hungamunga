<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		id,
		marker,
		title,
		children,
		variant = 'default'
	}: { id?: string; marker: string; title: Snippet; children: Snippet; variant?: 'default' | 'stacked' | 'minimal' } = $props();
</script>

<section id={id} class="block">
	<header class="blockhead2" class:stacked={variant === 'stacked'} class:minimal={variant === 'minimal'}>
		<span class="sec-marker">{marker}</span>
		<h2>{@render title()}</h2>
		{#if variant !== 'minimal'}<span class="sec-rule"></span>{/if}
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
	.blockhead2.stacked {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto;
		gap: 10px;
	}
	.blockhead2.minimal {
		grid-template-columns: auto 1fr;
		gap: 18px;
	}
	.sec-marker {
		font-size: 11px;
		letter-spacing: 0.18em;
		color: var(--accent);
		line-height: 1;
		align-self: center;
	}
	.stacked .sec-marker { font-size: 10.5px; align-self: auto; }
	.blockhead2 h2 {
		font-family: inherit;
		font-weight: 500;
		font-size: clamp(24px, 3.2vw, 34px);
		letter-spacing: -0.005em;
		word-spacing: -0.22em;
		margin: 0;
	}
	.stacked h2 { font-size: clamp(28px, 4vw, 42px); }
	.sec-rule {
		display: block;
		height: 1px;
		background: var(--line);
		margin: 0 0 10px 0;
	}
	.stacked .sec-rule { margin: 4px 0 0; }
</style>
