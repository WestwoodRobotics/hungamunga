<script lang="ts">
</script>

<section class="hero">
	<div class="cover">
		<div class="cover-grid">
			<div class="col-side">
				<p class="standfirst">
					A Westwood Robotics team competing in <span class="serif-i">FiT&nbsp;Central&nbsp;GEMS</span> — building the machines, and the people who build them.
				</p>
				<div class="byline">
					<span>Austin, TX</span>
					<span>·</span>
					<span>FTC 17113</span>
					<span>·</span>
					<span>est. 2019</span>
				</div>
			</div>

			<div class="col-title">
				<h1 class="title">
					<span class="ln">Building</span>
					<span class="ln serif">robots,</span>
					<span class="ln">building</span>
					<span class="ln serif">engineers.</span>
				</h1>
			</div>
		</div>

		<span class="ghost-imprint" aria-hidden="true">17113</span>

	<aside class="margin-note" aria-hidden="true">
			<span class="mn-num">07</span>
			<span class="mn-label">seasons</span>
		</aside>
	</div>

	<footer class="colophon">
		<div class="cph-item">
			<span class="cph-k">Roster</span>
			<span class="cph-v">~15 students</span>
		</div>
		<div class="cph-item">
			<span class="cph-k">Field</span>
			<span class="cph-v">FiT Central GEMS</span>
		</div>
		<div class="cph-item">
			<span class="cph-k">Outreach</span>
			<span class="cph-v">2 FLL teams · 80 hr/yr</span>
		</div>
		<div class="cph-item cph-soc">
			<a href="https://www.instagram.com/hungamunga17113/" target="_blank" rel="noopener noreferrer">Instagram</a>
			<a href="https://www.youtube.com/@westwoodhunga" target="_blank" rel="noopener noreferrer">YouTube</a>
			<a href="https://github.com/WestwoodRobotics" target="_blank" rel="noopener noreferrer">GitHub</a>
		</div>
	</footer>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100svh;
		display: grid;
		grid-template-rows: 1fr auto;
		padding: 0;
	}

	.ghost-imprint {
		position: absolute;
		right: -2%;
		top: 50%;
		transform: translateY(-50%) rotate(-6deg);
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		font-size: clamp(180px, 24vw, 360px);
		line-height: 0.85;
		color: transparent;
		-webkit-text-stroke: 1px rgba(255, 252, 245, 0.055);
		background: linear-gradient(160deg, rgba(255,252,245,0.07) 0%, rgba(255,252,245,0.02) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		pointer-events: none;
		user-select: none;
		white-space: nowrap;
		z-index: 0;
		letter-spacing: -0.04em;
	}

	.cover {
		position: relative;
		display: flex;
		align-items: stretch;
		padding: 0 56px;
	}
	.cover-grid {
		flex: 1;
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: 80px;
		padding: 56px 0 60px;
	}

	.col-side {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 32px;
		padding-top: 12px;
	}
	.standfirst {
		margin: 0;
		font-size: 14px;
		line-height: 1.65;
		color: var(--ink-2);
		max-width: 280px;
	}
	.byline {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		font-size: 10px;
		letter-spacing: 0.24em;
		text-transform: uppercase;
		color: var(--muted);
	}

	.col-title {
		display: flex;
		align-items: flex-end;
	}
	.title {
		margin: 0;
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 500;
		font-size: clamp(72px, 11.5vw, 168px);
		line-height: 0.92;
		letter-spacing: -0.05em;
		color: var(--ink);
	}
	.title .ln { display: block; }
	.title .ln.serif {
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		font-weight: 400;
		font-size: 1.04em;
		letter-spacing: -0.035em;
		color: var(--accent);
		padding-left: 0.6em;
	}

	.margin-note {
		position: absolute;
		top: 56px;
		right: 56px;
		display: inline-flex;
		align-items: center;
		gap: 14px;
		padding: 14px 20px;
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		backdrop-filter: var(--glass-blur);
		-webkit-backdrop-filter: var(--glass-blur);
		box-shadow: var(--glass-shadow);
		border-radius: 14px;
	}
	.mn-num {
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		font-size: 48px;
		color: var(--accent);
		line-height: 0.9;
	}
	.mn-label {
		font-size: 10px;
		letter-spacing: 0.24em;
		text-transform: uppercase;
		color: var(--ink-dim);
		text-align: left;
		line-height: 1.4;
	}

	.colophon {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 18px;
		margin: 0 56px 32px;
		padding: 20px 28px;
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		backdrop-filter: var(--glass-blur);
		-webkit-backdrop-filter: var(--glass-blur);
		box-shadow: var(--glass-shadow);
		border-radius: var(--r-lg);
		font-size: 11px;
	}
	.cph-item { display: flex; flex-direction: column; gap: 6px; }
	.cph-k {
		font-size: 10px;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--accent-2-hi);
	}
	.cph-v { color: var(--ink-2); letter-spacing: 0.02em; }
	.cph-soc { flex-direction: row; gap: 18px; align-items: center; justify-content: flex-end; }
	.cph-soc a {
		color: var(--ink-2);
		text-decoration: none;
		font-size: 11px;
		letter-spacing: 0.04em;
		border-bottom: 1px solid var(--line-strong);
		padding-bottom: 2px;
		transition: color var(--t-fast), border-color var(--t-fast);
	}
	.cph-soc a:hover { color: var(--accent); border-color: var(--accent); }

	@media (max-width: 1200px) {
		.margin-note { display: none; }
	}
	@media (max-width: 1080px) {
		.cover { padding-left: 32px; padding-right: 32px; }
		.colophon { margin-left: 32px; margin-right: 32px; }
		.cover-grid { grid-template-columns: 220px 1fr; gap: 48px; padding-top: 40px; }
	}
	@media (max-width: 760px) {
		.cover { padding-left: 24px; padding-right: 24px; }
		.colophon { margin-left: 24px; margin-right: 24px; }
		.cover-grid { grid-template-columns: 1fr; gap: 32px; padding: 32px 0 48px; }
		.margin-note { display: none; }
		.title { font-size: clamp(52px, 14vw, 96px); }
		.colophon { grid-template-columns: 1fr 1fr; gap: 18px; }
		.cph-soc { grid-column: 1 / -1; justify-content: flex-start; }
	}
</style>
