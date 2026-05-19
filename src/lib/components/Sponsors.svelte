<script lang="ts">
	const tiers = [
		{ name: 'Gold', amount: '$500+', perks: ['Logo on robot, team shirt & website', 'Name in notebook'] },
		{ name: 'Silver', amount: '$250–499', perks: ['Logo on team shirt & website', 'Named in notebook'] },
		{ name: 'Bronze', amount: '$100–249', perks: ['Logo on website', 'Name in notebook'] },
		{ name: 'Community', amount: 'Any', perks: ['Name in notebook', 'Our thanks'] }
	];
</script>

<div class="sponsor-wrap">
	<div class="tiers">
		{#each tiers as t, i}
			<div class="tier" class:featured={i === 0}>
				<div class="tier-head">
					<span class="tier-name">{t.name}</span>
					<span class="tier-amt">{t.amount}</span>
				</div>
				<ul class="tier-perks">
					{#each t.perks as p}<li>{p}</li>{/each}
				</ul>
			</div>
		{/each}
	</div>
	<p class="sponsor-note">
		Processed through Westwood Robotics — a 501(c)(3). Funds go to registration, parts, and travel.
		<a href="mailto:hungamunga17113@gmail.com">Get in touch →</a>
	</p>
	<div class="s-strip">
		<div class="s-cell">Your name here</div>
		<div class="s-cell">Your name here</div>
		<div class="s-cell">Your name here</div>
		<div class="s-cell">Your name here</div>
	</div>
</div>

<style>
	.sponsor-wrap { display: flex; flex-direction: column; gap: 56px; }
	.tiers {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0;
	}
	.tier {
		padding: 28px 24px 24px;
		border-left: 1px solid var(--line-strong);
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
	.tier:last-child { border-right: 1px solid var(--line-strong); }
	.tier.featured {
		background: var(--glass-bg-2);
		border-top: 2px solid var(--accent);
		backdrop-filter: var(--glass-blur);
		-webkit-backdrop-filter: var(--glass-blur);
		box-shadow: var(--glass-shadow);
	}
	.tier-head { display: flex; flex-direction: column; gap: 6px; }
	.tier-name {
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		font-size: 24px;
		color: var(--ink);
	}
	.tier.featured .tier-name { color: var(--accent); }
	.tier-amt { font-size: 11px; color: var(--ink-2); letter-spacing: 0.06em; }
	.tier-perks { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px; }
	.tier-perks li {
		font-size: 12px;
		color: var(--ink-2);
		line-height: 1.55;
		padding-left: 14px;
		position: relative;
	}
	.tier-perks li::before {
		content: '—';
		position: absolute;
		left: 0;
		color: var(--accent);
	}

	.sponsor-note {
		margin: 0;
		font-size: 13px;
		color: var(--ink-2);
		line-height: 1.65;
		max-width: 600px;
		font-style: italic;
		font-family: 'Instrument Serif', Georgia, serif;
		font-size: 16px;
	}
	.sponsor-note a { color: var(--accent); text-decoration: none; border-bottom: 1px solid var(--accent); }

	.s-strip {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		border-top: 1px solid var(--ink);
	}
	.s-cell {
		min-height: 120px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24px;
		border-right: 1px solid var(--line-strong);
		border-bottom: 1px solid var(--line-strong);
		color: var(--muted);
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		font-size: 16px;
	}

	@media (max-width: 860px) {
		.tiers { grid-template-columns: repeat(2, 1fr); }
		.tier:nth-child(2) { border-right: 1px solid var(--line-strong); }
		.tier:nth-child(3), .tier:nth-child(4) { border-top: 1px solid var(--line-strong); }
	}
	@media (max-width: 560px) {
		.tiers { grid-template-columns: 1fr; }
		.tier { border-right: 1px solid var(--line-strong); border-bottom: 1px solid var(--line-strong); }
	}
</style>
