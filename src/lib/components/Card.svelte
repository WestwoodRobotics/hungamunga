<script lang="ts">
	import type { Snippet } from 'svelte';
	let { idx, title, children }: { idx: string; title: string; children: Snippet } = $props();
</script>

<article class="card">
	<div class="card-head"><span class="card-idx">{idx}</span> {title}</div>
	<p>{@render children()}</p>
</article>

<style>
	.card {
		position: relative;
		padding: 26px;
		background: var(--panel);
		border-radius: 14px;
		box-shadow: var(--shadow-raised-sm);
		transition: box-shadow 0.22s ease, transform 0.22s ease;
	}
	.card:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-raised);
	}
	.card-head {
		display: flex;
		align-items: baseline;
		gap: 12px;
		font-size: 16px;
		color: #fff;
		margin-bottom: 10px;
		font-weight: 500;
	}
	.card-idx { font-size: 10.5px; letter-spacing: 0.18em; color: var(--accent); }
	.card p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.65; }
</style>
