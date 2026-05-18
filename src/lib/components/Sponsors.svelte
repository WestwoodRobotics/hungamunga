<script lang="ts">
	const tiers = [
		{
			name: 'Gold',
			amount: '$500+',
			perks: ['Logo on robot, team shirt & website', 'Name in notebook']
		},
		{
			name: 'Silver',
			amount: '$250-$499',
			perks: ['Logo on team shirt & website', 'Named in notebook']
		},
		{
			name: 'Bronze',
			amount: '$100-$249',
			perks: ['Logo on website', 'Name in notebook']
		},
		{
			name: 'Community',
			amount: 'Any',
			perks: ['Name in notebook', 'Our thanks']
		}
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
					{#each t.perks as p}
						<li>{p}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
	<p class="sponsor-note">
		Processed through Westwood Robotics - a 501(c)(3). Funds go to registration, parts, and travel.
		<a href="mailto:hungamunga17113@gmail.com">Get in touch →</a>
	</p>
	<div class="s-strip">
		<div class="s-cell">Your logo could be here</div>
		<div class="s-cell">Your logo could be here</div>
		<div class="s-cell">Your logo could be here</div>
		<div class="s-cell">Your logo could be here</div>
	</div>
</div>

<style>
	.sponsor-wrap { margin-top: 28px; display: flex; flex-direction: column; gap: 20px; }
	.tiers {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
	}
	.tier {
		background: var(--panel);
		border-radius: 12px;
		padding: 18px;
		box-shadow: var(--shadow-raised-sm);
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.tier.featured {
		background: var(--panel-hi);
		border: 1px solid rgba(217, 74, 44, 0.2);
	}
	.tier-head { display: flex; justify-content: space-between; align-items: baseline; }
	.tier-name { font-size: 11px; letter-spacing: 0.16em; color: #fff; text-transform: uppercase; }
	.tier-amt { font-size: 11px; letter-spacing: 0.08em; color: var(--accent); }
	.tier-perks { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 6px; }
	.tier-perks li {
		font-size: 11.5px;
		color: var(--muted);
		line-height: 1.5;
		padding-left: 12px;
		position: relative;
	}
	.tier-perks li::before {
		content: '—';
		position: absolute;
		left: 0;
		color: var(--line-strong);
		font-size: 10px;
	}
	.sponsor-note {
		margin: 0;
		font-size: 12px;
		color: var(--muted);
		line-height: 1.6;
		max-width: 560px;
	}
	.sponsor-note a { color: var(--accent); text-decoration: none; }
	.sponsor-note a:hover { text-decoration: underline; }
	.s-strip {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
		padding: 8px;
		border-radius: 14px;
		background: var(--bg-2);
		box-shadow: var(--shadow-inset);
		gap: 8px;
	}
	.s-cell {
		min-height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 16px;
		border-radius: 10px;
		background: var(--panel);
		color: var(--muted);
		font-size: 10px;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		box-shadow: var(--shadow-raised-sm);
	}

	@media (max-width: 860px) {
		.tiers { grid-template-columns: repeat(2, 1fr); }
	}
	@media (max-width: 560px) {
		.tiers { grid-template-columns: 1fr; }
	}
</style>
