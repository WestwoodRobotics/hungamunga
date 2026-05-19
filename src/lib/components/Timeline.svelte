<script lang="ts">
	const currentMonth = new Date().getMonth();

	const fall = [
		{ month: 'September', title: 'Kickoff', body: 'FIRST drops the new game; we run strategy and lock down a robot concept.', idx: 8 },
		{ month: 'October', title: 'Build', body: 'CAD, prototype, iterate. Subteams ship designs in parallel and integrate on the chassis.', idx: 9 },
		{ month: 'November', title: 'Practice', body: 'Autonomous gets dialed in. Drive team logs hours until it feels easy.', idx: 10 },
		{ month: 'December', title: 'League Meets', body: 'League play begins. Score data in, robot tuned between events.', idx: 11 }
	];
	const spring = [
		{ month: 'January', title: 'League Champs', body: 'Top league finishers advance. Robot polish from here on out.', idx: 0 },
		{ month: 'February', title: 'Regionals', body: 'FiT Regionals — the most exciting weekend of the year.', idx: 1 },
		{ month: 'March', title: 'Worlds Prep', body: 'Redesign for the meta, software grind, late nights.', idx: 2 },
		{ month: 'April', title: 'Worlds', body: 'FIRST World Championship in Houston. Compete, sleep, repeat.', idx: 3 }
	];
</script>

<div class="tl-wrap">
	{#each [{ label: 'Fall', nodes: fall }, { label: 'Spring', nodes: spring }] as phase (phase.label)}
		<div class="tl-phase">
			<div class="tl-phase-label"><span class="serif-i">{phase.label}</span></div>
			<div class="timeline">
				{#each phase.nodes as n, i}
					<div class="t-node">
						<span class="t-i">{String(i + 1).padStart(2, '0')}</span>
						<div class="t-month">{n.month}</div>
						<h3 class:active={currentMonth === n.idx}>{n.title}</h3>
						<p>{n.body}</p>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.tl-wrap { display: flex; flex-direction: column; gap: 72px; }
	.tl-phase-label {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-size: 11px;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--accent-2-hi);
		margin-bottom: 20px;
		padding: 6px 14px;
		background: var(--accent-2-dim);
		border: 1px solid var(--line-accent-2);
		border-radius: 999px;
	}
	.tl-phase-label :global(.serif-i) {
		font-style: normal;
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 500;
		color: var(--accent-2-hi);
	}
	.timeline {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 14px;
		position: relative;
		padding-top: 28px;
	}
	.timeline::before {
		content: '';
		position: absolute;
		top: 7px;
		left: calc(22px + 7px);
		right: calc(22px + 7px);
		height: 1px;
		background: linear-gradient(90deg, transparent, var(--line-accent-2) 15%, var(--line-accent-2) 85%, transparent);
	}
	.t-node {
		position: relative;
		padding: 26px 22px;
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		backdrop-filter: var(--glass-blur);
		-webkit-backdrop-filter: var(--glass-blur);
		box-shadow: var(--glass-shadow);
		border-radius: 14px;
		min-width: 0;
		transition: background var(--t-base), border-color var(--t-base);
	}
	.t-node:hover { background: var(--glass-bg-2); border-color: var(--line-accent-2); }
	.t-i {
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 500;
		font-size: 11px;
		color: var(--accent-2-hi);
		letter-spacing: 0.04em;
	}
	.t-month {
		margin: 6px 0 18px;
		font-size: 10px;
		letter-spacing: 0.22em;
		color: var(--accent);
		text-transform: uppercase;
	}
	.t-node h3 {
		margin: 0 0 10px;
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 500;
		font-size: 20px;
		color: var(--ink);
		letter-spacing: -0.015em;
	}
	.t-node h3.active::after {
		content: ' ●';
		color: var(--accent);
		font-size: 10px;
		vertical-align: middle;
	}
	.t-node p { margin: 0; color: var(--ink-2); font-size: 15px; line-height: 1.65; }

	@media (max-width: 860px) {
		.timeline { grid-template-columns: 1fr; }
	}
</style>
