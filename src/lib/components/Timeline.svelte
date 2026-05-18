<script lang="ts">
	const currentMonth = new Date().getMonth();

	const fall = [
		{ month: 'SEP', title: 'Kickoff', body: 'FIRST drops the new game; we run strategy and lock down a robot concept.', idx: 8 },
		{ month: 'OCT', title: 'Build', body: 'CAD, prototype, iterate. Subteams ship designs in parallel and integrate on the chassis.', idx: 9 },
		{ month: 'NOV', title: 'Practice', body: 'Autonomous gets dialed in. Drive team logs hours until it feels easy.', idx: 10 },
		{ month: 'DEC', title: 'League Meets', body: 'League play begins. Score data in, robot tuned between events.', idx: 11 }
	];
	const spring = [
		{ month: 'JAN', title: 'League Champs', body: 'Top league finishers advance. Robot polish from here on out.', idx: 0 },
		{ month: 'FEB', title: 'Regionals', body: 'FiT Regionals. Most exciting?', idx: 1 },
		{ month: 'MAR', title: 'Worlds Prep', body: 'Redesign for the meta, software grind.', idx: 2 },
		{ month: 'APR', title: 'Worlds', body: 'FIRST World Championship in Houston. Compete, sleep, repeat.', idx: 3 }
	];
</script>

<div class="tl-wrap">
	{#each [{ label: 'Fall', nodes: fall }, { label: 'Spring', nodes: spring }] as phase (phase.label)}
		<div class="tl-phase">
			<div class="tl-phase-label">{phase.label}</div>
			<div class="timeline">
				<div class="t-track" aria-hidden="true"></div>
				{#each phase.nodes as n}
					<div class="t-node">
						<div class="t-month">{n.month}</div>
						<span class="t-dot" class:active={currentMonth >= n.idx && currentMonth <= (phase.label === 'Fall' ? 11 : 3)}></span>
						<h3>{n.title}</h3>
						<p>{n.body}</p>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.tl-wrap { display: flex; flex-direction: column; gap: 32px; }
	.tl-phase-label {
		font-size: 10px;
		letter-spacing: 0.22em;
		color: var(--muted);
		text-transform: uppercase;
		margin-bottom: 12px;
	}
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
	.t-node { position: relative; padding: 32px 16px 0 22px; min-width: 0; }
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
	.t-node h3 {
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
