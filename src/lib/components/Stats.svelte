<script lang="ts">
	const stats = [
		{ n: '7', l: 'Seasons run' },
		{ n: '15+', l: 'Students' },
		{ n: '2', l: 'FLL teams mentored' },
		{ n: '80+ hrs', l: 'Outreach / year' }
	];
</script>

<div class="stats">
	{#each stats as s}
		<div>
			<span class="stat-n">{s.n}</span>
			<span class="stat-l">{s.l}</span>
		</div>
	{/each}
</div>

<style>
	.stats {
		max-width: 1180px;
		margin: 8px auto 0;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		padding: 6px;
		background: var(--bg-2);
		border-radius: 14px;
		box-shadow: var(--shadow-inset);
	}
	.stats > div {
		padding: 22px 22px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		position: relative;
	}
	.stats > div + div::before {
		content: '';
		position: absolute;
		left: 0;
		top: 24%;
		bottom: 24%;
		width: 1px;
		background: var(--line);
	}
	.stat-n {
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		font-size: 42px;
		line-height: 1;
		color: var(--accent);
	}
	.stat-l {
		font-size: 10.5px;
		letter-spacing: 0.14em;
		color: var(--muted);
		text-transform: uppercase;
	}

	@media (max-width: 860px) {
		.stats { grid-template-columns: repeat(2, 1fr); }
		.stats > div:nth-child(odd)::before { display: none; }
	}
</style>
