<script lang="ts">
	import IntroAnimation from '$lib/components/IntroAnimation.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Section from '$lib/components/Section.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { MEMBERS, TIMELINE, OUTREACH } from '$lib/config';
	import { reveal } from '$lib/actions';

	let showContent = $state(false);
</script>

<svelte:head>
	<title>FTC Team 17113 - Hunga Munga Robotics</title>
	<meta name="description" content="FTC Team 17113 Hunga Munga - seven seasons, one makerspace, Austin TX." />
	<meta property="og:title" content="FTC Team 17113 - Hunga Munga Robotics" />
	<meta property="og:description" content="FTC Team 17113 Hunga Munga - seven seasons, one makerspace, Austin TX." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/favicon.png" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="FTC Team 17113 - Hunga Munga Robotics" />
	<meta name="twitter:description" content="FTC Team 17113 Hunga Munga - seven seasons, one makerspace, Austin TX." />
</svelte:head>

<noscript>
	<style>
		.js-hide { opacity: 1 !important; pointer-events: auto !important; height: auto !important; overflow: visible !important; }
	</style>
</noscript>

<div class="js-hide transition-opacity duration-[2000ms]" style={!showContent ? 'opacity: 0; pointer-events: none; height: 100vh; overflow: hidden;' : 'opacity: 1;'}>
	<Nav />
	<main id="main-content">
		<Hero />


		<div use:reveal>
			<Section id="robot" kicker="Java · Onshape · PedroPathing">
				{#snippet title()}Structure &<br/> Logic.{/snippet}
				<div class="flex flex-col border-t" style="border-color: var(--color-rule);">
					<div class="grid grid-cols-1 md:grid-cols-2 border-b" style="border-color: var(--color-rule);">
						<div class="px-8 py-12 flex flex-col gap-5 border-r" style="border-color: var(--color-rule);">
							<span class="mono-label">Software</span>
							<p class="text-base leading-relaxed text-white/85" style="max-width: 38ch;">FTC SDK Java, PedroPathing + MCL odometry, PID rigorously tuned. The autonomous is the thing we're most proud of.</p>
							<span class="mono-text text-primary/55">Java / PedroPathing - MCL Extension</span>
						</div>
						<div class="px-8 py-12 flex flex-col gap-3">
							<span class="mono-label opacity-40">Specs</span>
							<div class="flex flex-col gap-2 mt-2">
								{#each [['Auto score (avg)', '# pts'], ['Cycle time', '# sec'], ['Autonomous runs', '#+'], ['Season W/L/T', 'a-b-c']] as [k, v] (k)}
									<div class="flex justify-between border-b py-2" style="border-color: var(--color-rule);">
										<span class="mono-text text-white/40">{k}</span>
										<span class="mono-text text-white/90">{v}</span>
									</div>
								{/each}
							</div>
						</div>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-3 border-b" style="border-color: var(--color-rule);">
						<div class="px-8 py-10 md:col-span-2 flex flex-col gap-4 border-r" style="border-color: var(--color-rule);">
							<span class="mono-label">Hardware</span>
							<p class="text-sm leading-relaxed text-white/70" style="max-width: 44ch;">Onshape for CAD, CNC router + FDM printers in the makerspace. We've gone through # iterations this season.</p>
						</div>
						<div class="px-8 py-10 flex flex-col gap-2 justify-center">
							<span class="mono-text text-primary/55">CAD / Onshape</span>
						</div>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-3 border-b" style="border-color: var(--color-rule);">
						<div class="px-8 py-10 md:col-span-2 flex flex-col gap-4 border-r" style="border-color: var(--color-rule);">
							<span class="mono-label">Strategy</span>
							<p class="text-sm leading-relaxed text-white/70" style="max-width: 44ch;">Scouting app + match analysis. We've improved #x points because of it.</p>
						</div>
						<div class="px-8 py-10 flex flex-col gap-2 justify-center">
							<span class="mono-text text-primary/55">Strategy / Scouting</span>
						</div>
					</div>
				</div>
			</Section>
		</div>


		<div use:reveal>
			<Section id="season" kicker="2025–26">
				{#snippet title()}Season<br/> Timeline.{/snippet}
				<div class="w-full border-t-2 border-b-2" style="border-color: rgba(255,255,255,0.2);">
					<div class="grid border-b-2" style="grid-template-columns: 5rem 1fr 5rem; border-color: rgba(255,255,255,0.2);">
						<span class="mono-label px-6 py-3 border-r" style="border-color: var(--color-rule);">Mo.</span>
						<span class="mono-label px-6 py-3 border-r" style="border-color: var(--color-rule);">Notes</span>
						<span class="mono-label px-6 py-3">Stat</span>
					</div>
					{#each TIMELINE as row (row.month)}
						<div
							class="grid border-b last:border-0 hover:bg-white/4 transition-none"
							style="grid-template-columns: 5rem 1fr 5rem; border-color: var(--color-rule);"
						>
							<span
								class="mono-text text-white/35 px-6 py-4 border-r"
								style="border-color: var(--color-rule);"
							>{row.month}</span>
							<span class="px-6 py-4 text-sm border-r {row.status === 'active' ? 'text-white/95' : 'text-white/65'}" style="border-color: var(--color-rule);">{row.event}</span>
							<span class="px-6 py-4 flex items-center gap-1.5">
								{#if row.status === 'active'}
									<span class="relative flex h-1.5 w-1.5">
										<span class="animate-ping absolute inline-flex h-full w-full opacity-75" style="background: var(--color-primary);"></span>
										<span class="relative inline-flex h-1.5 w-1.5" style="background: var(--color-primary);"></span>
									</span>
									<span class="mono-text text-[10px] text-primary">LIVE</span>
								{:else if row.status === 'future'}
									<span class="mono-text text-[10px] text-white/20">FUTURE</span>
								{:else}
									<span class="mono-text text-[10px] text-white/20">DONE</span>
								{/if}
							</span>
						</div>
					{/each}
				</div>
			</Section>
		</div>


		<div use:reveal>
			<Section id="outreach">
				{#snippet title()}Beyond<br/> Competition.{/snippet}
				<div class="flex flex-col">
					{#each OUTREACH as item, i (item.n)}
						{@const offsets = ['', 'md:ml-6', 'md:ml-12']}
						<div class="border-b flex flex-col md:flex-row items-start gap-8 py-8 {offsets[i]}" style="border-color: var(--color-rule);">
							<div class="flex items-baseline gap-6 w-full md:w-1/3">
								<span class="font-sans text-sm font-medium text-primary w-6">{item.n}</span>
								<h3 class="text-lg font-heading font-light text-white uppercase tracking-wide">{item.title}</h3>
							</div>
							<p class="text-sm max-w-sm flex-1 text-white/70">{item.desc}</p>
							<span class="mono-label">{item.tag}</span>
						</div>
					{/each}
				</div>
			</Section>
		</div>


		<div use:reveal>
			<Section id="team" kicker="15 members">
				{#snippet title()}The<br/> Team.{/snippet}
				<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t" style="border-color: var(--color-rule);">
					{#each MEMBERS as member (member.name)}
						<div
							class="py-6 px-6 border-b border-r hover:bg-white/4 flex flex-col gap-4 transition-none"
							style="border-color: var(--color-rule);"
						>
							<div class="w-12 h-12 overflow-hidden" style="border-radius: 2px; background: rgba(255,255,255,0.05); border: 1px solid var(--color-rule);">
								{#if member.pfp}
									<img src={member.pfp} alt={member.name} class="w-full h-full object-cover" />
								{/if}
							</div>
							<div>
								<span class="block font-sans font-medium text-base text-white">{member.name}</span>
								<span class="mono-label mt-1 block">{member.role}</span>
							</div>
						</div>
					{/each}
				</div>
			</Section>
		</div>


		<div use:reveal>
			<Section id="results" kicker="2024–25">
				{#snippet title()}Season<br/> Results.{/snippet}
				<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
					<div class="liquid-panel p-12 lg:col-span-7 flex flex-col justify-between min-h-[360px] group">
						<span class="mono-label">Control Award</span>
						<div>
							<h3 class="text-4xl font-heading font-light text-white leading-tight mb-6 group-hover:text-primary transition-none">Second place —<br/>League Championship</h3>
							<p class="text-sm leading-relaxed max-w-sm text-white/70">Recognized for our engineering notebook and software architecture, specifically our reliable autonomous control.</p>
						</div>
					</div>
					<div class="lg:col-span-5 flex flex-col gap-6">
						<div class="flat-panel p-10 flex-1 flex flex-col justify-center">
							<span class="mono-label mb-4">Alliance</span>
							<h3 class="text-2xl font-heading font-light text-white mb-3">Finalist alliance captain</h3>
							<p class="text-sm text-white/70">Finals at the FiT Central GEMS League Championship, winning against top-ranked teams.</p>
						</div>
						<div class="flat-panel p-10 flex-1 flex flex-col justify-center">
							<span class="mono-label mb-4">Legacy</span>
							<h3 class="text-2xl font-heading font-light text-white mb-3">Seven seasons</h3>
							<p class="text-sm text-white/70">Founded in 2019. Qualifying for League Tournament every season; two trips to Regionals.</p>
						</div>
					</div>
				</div>
			</Section>
		</div>


		<div use:reveal>
			<Section id="sponsors">
				{#snippet title()}Partners &<br/> Sponsors.{/snippet}
				<Sponsors />
			</Section>
		</div>

		<div use:reveal>
			<Contact />
		</div>

		<Footer />
	</main>
</div>

<IntroAnimation onComplete={() => (showContent = true)} />
