<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		id,
		marker,
		kicker,
		title,
		variant = 'default',
		children
	}: { id?: string; marker: string; kicker?: string; title: Snippet; variant?: 'default' | 'margin'; children: Snippet } = $props();
</script>

<section id={id} class="block block--{variant}">
	<header class="head">
		<div class="eyebrow">
			<span class="marker">{marker}</span>
			{#if kicker}<span class="kicker">{kicker}</span>{/if}
		</div>
		<h2>{@render title()}</h2>
	</header>

	<div class="body">{@render children()}</div>
</section>

<style>
	.block {
		position: relative;
		max-width: 1280px;
		margin: 0 auto;
		padding: 120px 56px 140px;
	}

	.head {
		display: flex;
		flex-direction: column;
		gap: 24px;
		align-items: flex-start;
		margin-bottom: 72px;
		padding-bottom: 28px;
		border-bottom: 1px solid var(--line-strong);
	}

	.eyebrow {
		display: inline-flex;
		align-items: baseline;
		gap: 14px;
	}
	.marker {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.04em;
		color: var(--accent);
	}
	.kicker {
		font-size: 11px;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--accent-2-hi);
	}

	.head h2 {
		margin: 0;
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 500;
		font-size: clamp(36px, 5.4vw, 72px);
		line-height: 1;
		letter-spacing: -0.035em;
		color: var(--ink);
		max-width: 18ch;
	}

		.block--margin {
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: 80px;
		align-items: start;
	}
	.block--margin .head {
		margin-bottom: 0;
		padding-bottom: 0;
		border-bottom: none;
		position: sticky;
		top: 96px;
	}
	.block--margin .head h2 {
		font-size: clamp(28px, 3.2vw, 40px);
	}

	@media (max-width: 1080px) {
		.block { padding: 96px 32px 112px; }
		.block--margin { grid-template-columns: 220px 1fr; gap: 48px; }
	}
	@media (max-width: 760px) {
		.block { padding: 72px 24px 88px; }
		.head { margin-bottom: 48px; }
		.block--margin { grid-template-columns: 1fr; gap: 32px; }
		.block--margin .head { position: static; margin-bottom: 32px; }
	}
</style>
