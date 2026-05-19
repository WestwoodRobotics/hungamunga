<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		idx,
		title,
		children,
		variant = 'paper'
	}: { idx: string; title: string; children: Snippet; variant?: 'paper' | 'rule' | 'plate' } = $props();
</script>

<article class="card card--{variant}">
	<div class="head">
		<span class="idx">{idx}</span>
		<h3>{title}</h3>
	</div>
	<p>{@render children()}</p>
</article>

<style>
	.card {
		position: relative;
		padding: 36px 32px 32px;
		min-width: 0;
		transition: transform var(--t-spring), background var(--t-base);
	}

	.card--paper {
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		backdrop-filter: var(--glass-blur);
		-webkit-backdrop-filter: var(--glass-blur);
		box-shadow: var(--glass-shadow);
		border-radius: 14px;
	}
	.card--paper:hover { background: var(--glass-bg-2); border-color: var(--line-accent-2); }

	.card--rule {
		background: transparent;
		border-top: 1px solid var(--line-strong);
		padding-top: 28px;
		padding-left: 0;
		padding-right: 0;
	}

	.card--plate {
		background: transparent;
		border-left: 1px solid var(--line-strong);
		padding-left: 28px;
	}
	.card--plate:hover { border-left-color: var(--accent); }

	.head {
		display: flex;
		align-items: baseline;
		gap: 14px;
		margin-bottom: 18px;
	}
	.idx {
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		font-size: 22px;
		color: var(--accent);
		line-height: 1;
		letter-spacing: -0.01em;
	}
	.head h3 {
		margin: 0;
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 500;
		font-size: 20px;
		letter-spacing: -0.015em;
		color: var(--ink);
	}
	.card p {
		margin: 0;
		color: var(--ink-2);
		font-size: 14px;
		line-height: 1.7;
	}
</style>
