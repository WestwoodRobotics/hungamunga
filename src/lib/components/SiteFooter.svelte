<script lang="ts">
	import { SPEC_VERSION } from '../config';
</script>

<footer class="foot">
	<div class="foot-inner">
		<div class="col">
			<span class="serif-i num">17113</span>
			<span class="mark">Hunga Munga · Westwood Robotics</span>
		</div>
		<div class="col mid">
			<span>© 2026</span>
			<span class="dot">·</span>
			<a href="https://www.firstinspires.org/robotics/ftc" target="_blank" rel="noopener noreferrer">FIRST Tech Challenge</a>
		</div>
		<div class="col right">
			<span class="ver">{SPEC_VERSION}</span>
		</div>
	</div>
</footer>

<style>
	.foot {
		border-top: 1px solid var(--ink);
		background: var(--bg);
	}
	.foot-inner {
		max-width: 1280px;
		margin: 0 auto;
		padding: 36px 56px;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: baseline;
		gap: 32px;
	}
	.col { display: inline-flex; align-items: baseline; gap: 14px; font-size: 12px; color: var(--ink-2); }
	.right { justify-content: flex-end; }
	.mid { font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-size: 14px; }
	.num {
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		font-size: 32px;
		color: var(--accent);
		line-height: 1;
	}
	.mark { font-size: 12px; color: var(--ink-2); letter-spacing: 0.02em; }
	.dot { color: var(--muted); }
	.mid a { color: var(--ink); text-decoration: none; border-bottom: 1px solid var(--line-strong); }
	.mid a:hover { color: var(--accent); border-color: var(--accent); }
	.ver { font-size: 11px; color: var(--muted); letter-spacing: 0.06em; }

	@media (max-width: 760px) {
		.foot-inner { grid-template-columns: 1fr; padding: 28px 24px; gap: 20px; }
		.right { justify-content: flex-start; }
	}
</style>
