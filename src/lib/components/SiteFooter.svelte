<footer class="foot">
	<div>© 2026 · FTC 17113 · Hunga Munga</div>
	<div class="muted">v0.0.1</div>
	<div class="muted">FIRST Tech Challenge</div>
</footer>

<style>
	.foot {
		max-width: 1180px;
		margin: 0 auto;
		padding: 28px;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 16px;
		font-size: 10.5px;
		letter-spacing: 0.14em;
		color: var(--muted);
		text-transform: uppercase;
		position: relative;
	}
	.foot::before {
		content: '';
		position: absolute;
		left: 28px;
		right: 28px;
		top: 0;
		height: 1px;
		background: var(--line);
	}
	.foot > :last-child { text-align: right; }

	@media (max-width: 860px) {
		.foot { grid-template-columns: 1fr; }
		.foot > :last-child { text-align: left; }
	}
</style>
