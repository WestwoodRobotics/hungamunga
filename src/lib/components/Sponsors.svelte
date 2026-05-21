<script lang="ts">
	const tiers = [
		{ name: 'Gold', amount: '$500+', perks: ['Logo on robot, team shirt & website', 'Name in notebook'] },
		{ name: 'Silver', amount: '$250–499', perks: ['Logo on team shirt & website', 'Named in notebook'] },
		{ name: 'Bronze', amount: '$100–249', perks: ['Logo on website', 'Name in notebook'] },
		{ name: 'Community', amount: 'Any', perks: ['Name in notebook', 'Our thanks'] }
	];
</script>

<div class="flex flex-col gap-8">
	<div class="w-full border-t-2 border-b-2" style="border-color: rgba(255,255,255,0.2);">
		<div class="grid border-b-2" style="grid-template-columns: 8rem 8rem 1fr; border-color: rgba(255,255,255,0.2);">
			<span class="mono-label px-6 py-3 border-r" style="border-color: var(--color-rule);">Tier</span>
			<span class="mono-label px-6 py-3 border-r" style="border-color: var(--color-rule);">Investment</span>
			<span class="mono-label px-6 py-3">Inclusions</span>
		</div>
		{#each tiers as t (t.name)}
			<div
				class="grid border-b last:border-0 hover:bg-white/6 {t.name === 'Gold' ? 'bg-primary/5' : ''}"
				style="grid-template-columns: 8rem 8rem 1fr; border-color: var(--color-rule); transition: none;"
			>
				<span class="px-6 py-4 border-r font-sans text-sm font-medium text-white" style="border-color: var(--color-rule);">{t.name}</span>
				<span class="px-6 py-4 border-r" style="font-family: var(--font-mono); font-size: 11px; color: var(--color-primary); border-color: var(--color-rule);">{t.amount}</span>
				<span class="px-6 py-4 text-sm" style="color: rgba(229,229,229,0.7);">{t.perks.join(' · ')}</span>
			</div>
		{/each}
	</div>

	<p class="mono-label" style="color: rgba(229,229,229,0.4);">
		Processed through Westwood Robotics, a 501(c)(3).
		<a href="mailto:hungamunga17113@gmail.com" class="text-link ml-4" style="color: rgba(229,229,229,0.6);">Inquire</a>
	</p>
</div>