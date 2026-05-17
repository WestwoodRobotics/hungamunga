<div class="sponsor-strip">
	<div class="s-cell">Your logo here</div>
	<div class="s-cell">Your logo here</div>
	<div class="s-cell">Your logo here</div>
	<div class="s-cell">Your logo here</div>
</div>

<style>
	.sponsor-strip {
		margin-top: 28px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
		padding: 8px;
		border-radius: 14px;
		background: var(--bg-2);
		box-shadow: var(--shadow-inset);
		gap: 8px;
	}
	.s-cell {
		min-height: 110px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 18px;
		border-radius: 10px;
		background: var(--panel);
		color: var(--muted);
		font-size: 10.5px;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		box-shadow: var(--shadow-raised-sm);
	}
</style>
