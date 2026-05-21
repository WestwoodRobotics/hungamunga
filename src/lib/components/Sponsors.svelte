<script lang="ts">
	const tiers = [
		{ name: 'Gold', amount: '$500+', perks: ['Logo on robot, team shirt & website', 'Name in notebook'] },
		{ name: 'Silver', amount: '$250–499', perks: ['Logo on team shirt & website', 'Named in notebook'] },
		{ name: 'Bronze', amount: '$100–249', perks: ['Logo on website', 'Name in notebook'] },
		{ name: 'Community', amount: 'Any', perks: ['Name in notebook', 'Our thanks'] }
	];
</script>

<div class="flex flex-col gap-6">
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each tiers as t, i}
			<div class="liquid-panel p-8 flex flex-col gap-8 {i === 0 ? 'bg-primary/10 border-primary/30' : ''}">
				<div class="flex items-baseline justify-between border-b border-white/5 pb-4">
					<span class="font-sans text-sm tracking-widest uppercase text-white font-medium">{t.name}</span>
					<span class="text-xs font-sans font-medium text-primary">{t.amount}</span>
				</div>
				<ul class="flex flex-col gap-4">
					{#each t.perks as p}
						<li class="text-xs text-white/50 leading-relaxed font-sans">
							{p}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
	
	<div class="liquid-panel p-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mt-8">
		<div class="text-white/20 text-[11px] font-sans font-medium tracking-widest uppercase hover:text-white/40 transition-colors cursor-pointer text-center w-full">
			Future Partner
		</div>
		<div class="text-white/20 text-[11px] font-sans font-medium tracking-widest uppercase hover:text-white/40 transition-colors cursor-pointer text-center w-full">
			Your Logo
		</div>
		<div class="text-white/20 text-[11px] font-sans font-medium tracking-widest uppercase hover:text-white/40 transition-colors cursor-pointer text-center w-full">
			Sponsor Level
		</div>
		<div class="text-white/20 text-[11px] font-sans font-medium tracking-widest uppercase hover:text-white/40 transition-colors cursor-pointer text-center w-full">
			Join Us
		</div>
	</div>
	
	<p class="text-white/40 text-[11px] font-sans font-medium uppercase tracking-widest mt-8">
		Processed through Westwood Robotics — a 501(c)(3). 
		<a href="mailto:hungamunga17113@gmail.com" class="text-white/60 hover:text-white transition-colors ml-4 border-b border-white/20 hover:border-white pb-1">Inquire</a>
	</p>
</div>
