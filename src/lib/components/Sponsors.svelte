<script lang="ts">
	const tiers = [
		{
			name: 'Gold',
			amount: '$1,000+',
			perks: ['Large logo on robot & website', 'Named in all competition materials', 'Shoutout at every event', 'End-of-season impact report']
		},
		{
			name: 'Silver',
			amount: '$500',
			perks: ['Logo on website & notebook', 'Named in competition materials', 'End-of-season impact report']
		},
		{
			name: 'Bronze',
			amount: '$250',
			perks: ['Name on website & notebook', 'End-of-season thank-you']
		},
		{
			name: 'Community',
			amount: 'Any',
			perks: ['Name in our engineering notebook', 'Our sincere thanks']
		}
	];
</script>

<div class="sponsor-wrap">
	<div class="tiers">
		{#each tiers as t}
			<div class="tier">
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
		Sponsorships are processed through Westwood High School / FIRST, a 501(c)(3) organization —
		donations may be tax-deductible. Funds go directly to registration fees, field elements, parts, and travel.
		<a href="mailto:team17113@gmail.com">Reach out to discuss →</a>
	</p>
	<div class="s-strip">
		<div class="s-cell">Your logo here</div>
		<div class="s-cell">Your logo here</div>
		<div class="s-cell">Your logo here</div>
		<div class="s-cell">Your logo here</div>
	</div>
</div>

<style>
	.sponsor-wrap { margin-top: 28px; display: flex; flex-direction: column; gap: 24px; }
	.tiers {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 12px;
	}
	.tier {
		background: var(--panel);
		border-radius: 12px;
		padding: 20px;
		box-shadow: var(--shadow-raised-sm);
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	.tier-head { display: flex; justify-content: space-between; align-items: baseline; }
	.tier-name { font-size: 12px; letter-spacing: 0.14em; color: #fff; text-transform: uppercase; }
	.tier-amt { font-size: 10.5px; letter-spacing: 0.1em; color: var(--accent); }
	.tier-perks { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 7px; }
	.tier-perks li {
		font-size: 12px;
		color: var(--muted);
		line-height: 1.5;
		padding-left: 12px;
		position: relative;
	}
	.tier-perks li::before {
		content: '—';
		position: absolute;
		left: 0;
		color: var(--line);
		font-size: 10px;
	}
	.sponsor-note {
		margin: 0;
		font-size: 12.5px;
		color: var(--muted);
		line-height: 1.65;
		max-width: 640px;
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
		min-height: 90px;
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

	@media (max-width: 860px) {
		.tiers { grid-template-columns: repeat(2, 1fr); }
	}
	@media (max-width: 560px) {
		.tiers { grid-template-columns: 1fr; }
	}
</style>
