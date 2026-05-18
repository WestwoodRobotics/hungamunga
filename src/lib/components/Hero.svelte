<script lang="ts">
	import SpecCard from './SpecCard.svelte';
</script>

<section class="hero">
	<div class="watermark" aria-hidden="true">17113</div>
	<div class="hero-grid">
		<div class="hero-text">
			<div class="eyebrow">FTC Robotics Team</div>
			<h1 class="title">
				Building <span class="serif">robots,</span><br />
				building <span class="serif">engineers.</span>
			</h1>
			<p class="sub">
				FTC Team 17113 - a Westwood Robotics team competing in
				<span class="serif-i">FiT Central GEMS</span>, based in Austin, TX.
			</p>
			<div class="socials">
				<a href="https://www.instagram.com/hungamunga17113/" aria-label="Instagram" class="iconbtn" target="_blank" rel="noopener noreferrer">
					<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
				</a>
				<a href="https://www.youtube.com/@westwoodhunga" aria-label="YouTube" class="iconbtn" target="_blank" rel="noopener noreferrer">
					<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23 7.1s-.2-1.5-.9-2.2c-.8-.9-1.8-.9-2.2-1C16.8 3.5 12 3.5 12 3.5s-4.8 0-7.9.4c-.4.1-1.4.1-2.2 1C1.2 5.6 1 7.1 1 7.1S.8 8.8.8 10.6v1.7c0 1.8.2 3.5.2 3.5s.2 1.5.9 2.2c.8.9 1.9.8 2.4.9 1.7.2 7.7.4 7.7.4s4.8 0 7.9-.4c.4-.1 1.4-.1 2.2-1 .7-.7.9-2.2.9-2.2s.2-1.7.2-3.5v-1.7c0-1.8-.2-3.5-.2-3.5zM9.8 14.4V8.2l6.2 3.1-6.2 3.1z"/></svg>
				</a>
				<a href="https://github.com/WestwoodRobotics" aria-label="GitHub" class="iconbtn" target="_blank" rel="noopener noreferrer">
					<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.16 1.18a10.95 10.95 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
				</a>
			</div>
		</div>
		<SpecCard />
	</div>
</section>

<style>
	.hero {
		position: relative;
		max-width: 1180px;
		margin: 0 auto;
		padding: 88px 28px 56px;
		overflow: hidden;
	}
	.watermark {
		position: absolute;
		top: -40px;
		right: -30px;
		pointer-events: none;
		user-select: none;
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		font-size: clamp(220px, 34vw, 440px);
		line-height: 0.85;
		color: rgba(217, 74, 44, 0.05);
		z-index: 0;
	}
	.hero-grid {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: minmax(0, 1.4fr) minmax(260px, 0.9fr);
		gap: 56px;
		align-items: end;
	}
	.eyebrow { font-size: 11px; letter-spacing: 0.18em; color: var(--accent); margin-bottom: 18px; }
	.title {
		font-family: inherit;
		font-weight: 500;
		font-size: clamp(34px, 5.8vw, 62px);
		line-height: 1.04;
		letter-spacing: -0.015em;
		margin: 0 0 22px;
	}
	.title :global(.serif) { font-size: 0.95em; }
	.sub { max-width: 560px; margin: 0; color: var(--muted); font-size: 14px; line-height: 1.65; }
	.socials { display: inline-flex; gap: 10px; margin-top: 28px; }
	.iconbtn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 10px;
		background: var(--panel);
		color: var(--ink-dim);
		text-decoration: none;
		box-shadow: var(--shadow-raised-sm);
		transition: box-shadow 0.18s ease, color 0.18s ease, transform 0.18s ease;
	}
	.iconbtn:hover { color: #fff; transform: translateY(1px); box-shadow: var(--shadow-inset); }

	@media (max-width: 860px) {
		.hero-grid { grid-template-columns: 1fr; gap: 36px; }
	}
</style>
