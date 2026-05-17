<script lang="ts">
	const nodes = [
		{ month: 'SEP', title: 'Kickoff', body: 'FIRST drops the new game; we run strategy and lock down a robot concept.' },
		{ month: 'OCT', title: 'Build Season', body: 'CAD, prototype, iterate. Subteams ship mechanisms in parallel and integrate on the chassis.' },
		{ month: 'NOV', title: 'Code + Drive', body: 'Autonomous gets dialed in. Drive team logs hours on the field until muscle memory takes over.' },
		{ month: 'DEC', title: 'Compete', body: 'Qualifiers → regionals → states. Iterate between every event. Goal: Worlds in Houston.', active: true }
	];
</script>

<div class="timeline">
	<div class="t-track" aria-hidden="true"></div>
	{#each nodes as n}
		<div class="t-node">
			<div class="t-month">{n.month}</div>
			<span class="t-dot" class:active={n.active}></span>
			<h4>{n.title}</h4>
			<p>{n.body}</p>
		</div>
	{/each}
</div>

<style>
	.timeline {
		position: relative;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 28px;
		padding: 8px 0;
	}
	.t-track {
		position: absolute;
		top: 44px;
		left: 0;
		right: 0;
		height: 2px;
		border-radius: 2px;
		background: var(--bg-2);
		box-shadow: var(--shadow-inset);
	}
	.t-node { position: relative; padding: 32px 16px 0 0; }
	.t-month {
		font-size: 10.5px;
		letter-spacing: 0.2em;
		color: var(--accent);
		margin-bottom: 18px;
	}
	.t-dot {
		position: absolute;
		top: 36px;
		left: 0;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: var(--panel);
		box-shadow: var(--shadow-raised-sm);
	}
	.t-dot.active {
		background: var(--accent);
		box-shadow: 0 0 0 4px rgba(217, 74, 44, 0.18), var(--shadow-raised-sm);
	}
	.t-node h4 {
		font-family: inherit;
		font-weight: 500;
		font-size: 16px;
		margin: 0 0 6px;
		color: #fff;
	}
	.t-node p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.6; }

	@media (max-width: 860px) {
		.timeline { grid-template-columns: 1fr; gap: 14px; }
		.t-track, .t-dot { display: none; }
		.t-node {
			padding: 18px;
			background: var(--panel);
			border-radius: 12px;
			box-shadow: var(--shadow-raised-sm);
		}
	}
</style>
