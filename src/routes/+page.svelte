<script lang="ts">
	import IntroAnimation from '$lib/components/IntroAnimation.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Section from '$lib/components/Section.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';

	import { MEMBERS } from '$lib/config';
	import { reveal } from '$lib/actions';

	const timeline = [
		{ month: 'Sep', event: 'Kickoff — game reveal, field teardown, first cardboard prototypes', status: 'done' },
		{ month: 'Oct', event: 'Build phase — drivetrain locked in week 3, two arm iterations scrapped', status: 'done' },
		{ month: 'Nov', event: 'League Meet 1 — autonomous failed in match 2. Fixed overnight.', status: 'done' },
		{ month: 'Dec', event: 'Iteration. Vision tuning. 600+ driver practice cycles.', status: 'done' },
		{ month: 'Jan', event: 'Final refinements — weight cut, cable management, endgame hang added', status: 'done' },
		{ month: 'Feb', event: 'League Championship', status: 'active' },
	];

	const outreach = [
		{ n: 'I', title: 'FLL Mentoring', desc: 'Mentoring local FIRST Lego League teams, helping younger students build their first robots and prepare for competition.', tag: 'ongoing' },
		{ n: 'II', title: 'Demonstrations', desc: 'Visiting elementary and middle schools to show off our robot and get kids excited about STEM.', tag: 'quarterly' },
		{ n: 'III', title: 'Open Shop', desc: 'Sharing our resources, code, and designs with rookie teams to help grow the FIRST community.', tag: 'always' },
	];

	let showContent = $state(false);
</script>

<svelte:head>
	<title>FTC Team 17113 - Hunga Munga Robotics</title>
	<meta name="description" content="FTC Team 17113 Hunga Munga — seven seasons, one makerspace, Austin TX." />
</svelte:head>

<noscript>
	<style>
		.js-hide { opacity: 1 !important; pointer-events: auto !important; height: auto !important; overflow: visible !important; }
	</style>
</noscript>

<div class="js-hide transition-opacity duration-[2000ms]" style={!showContent ? 'opacity: 0; pointer-events: none; height: 100vh; overflow: hidden;' : 'opacity: 1;'}>
	<Nav />
	<Hero />


	<div use:reveal>
		<Section id="robot" kicker="Java · Onshape · RoadRunner">
			{#snippet title()}Structure &<br/> Logic.{/snippet}
			<div class="flex flex-col border-t" style="border-color: var(--color-rule);">
				<div class="grid grid-cols-1 md:grid-cols-2 border-b" style="border-color: var(--color-rule);">
					<div class="px-8 py-12 flex flex-col gap-5 border-r" style="border-color: var(--color-rule);">
						<span class="mono-label" style="color: var(--color-primary);">Software</span>
						<p class="text-base leading-relaxed" style="color: rgba(229,229,229,0.85); max-width: 38ch;">Java on the Control Hub. RoadRunner odometry, custom vision pipeline for sample detection, PID tuned to tenths-of-a-degree. The autonomous is the thing we're most proud of.</p>
						<span style="font-family: var(--font-mono); font-size: 11px; color: rgba(122,158,126,0.55);">Java / RoadRunner 1.0 — OpenCV + TFOD</span>
					</div>
					<div class="px-8 py-12 flex flex-col gap-3">
						<span class="mono-label opacity-40">System metrics</span>
						<div class="flex flex-col gap-2 mt-2">
							{#each [['Auto score (avg)', '72 pts'], ['Cycle time', '4.2 sec'], ['Autonomous runs', '600+'], ['Vision conf. threshold', '0.78']] as [k, v] (k)}
								<div class="flex justify-between border-b py-2" style="border-color: var(--color-rule);">
									<span style="font-family: var(--font-mono); font-size: 11px; color: rgba(229,229,229,0.4);">{k}</span>
									<span style="font-family: var(--font-mono); font-size: 11px; color: rgba(229,229,229,0.9);">{v}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-3 border-b" style="border-color: var(--color-rule);">
					<div class="px-8 py-10 md:col-span-2 flex flex-col gap-4 border-r" style="border-color: var(--color-rule);">
						<span class="mono-label">Mechanical</span>
						<p class="text-sm leading-relaxed" style="color: rgba(229,229,229,0.7); max-width: 44ch;">Onshape for CAD, CNC router + FDM printers in the makerspace. We've gone through four arm iterations this season. The current one actually works.</p>
					</div>
					<div class="px-8 py-10 flex flex-col gap-2 justify-center">
						<span style="font-family: var(--font-mono); font-size: 11px; color: rgba(122,158,126,0.55);">CAD / Onshape — CNC + FDM</span>
						<span style="font-family: var(--font-mono); font-size: 10px; color: rgba(229,229,229,0.25);">v4 arm — 127mm reach</span>
					</div>
				</div>
				<div class="px-8 py-7 flex items-baseline gap-10">
					<span class="mono-label shrink-0">Strategy</span>
					<p class="text-sm" style="color: rgba(229,229,229,0.5); max-width: 52ch;">Scouting app + OPR analysis. This is newer for us — we started taking it seriously last season. Alliance selection went better for it.</p>
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
				{#each timeline as row (row.month)}
					<div
						class="grid border-b last:border-0 hover:bg-white/4"
						style="grid-template-columns: 5rem 1fr 5rem; border-color: var(--color-rule); transition: none;"
					>
						<span
							class="px-6 py-4 border-r"
							style="font-family: var(--font-mono); font-size: 11px; color: rgba(229,229,229,0.35); border-color: var(--color-rule);"
						>{row.month}</span>
						<span class="px-6 py-4 text-sm border-r" style="color: rgba(229,229,229,{row.status === 'active' ? '0.95' : '0.65'}); border-color: var(--color-rule);">{row.event}</span>
						<span class="px-6 py-4 flex items-center gap-1.5">
							{#if row.status === 'active'}
								<span class="relative flex h-1.5 w-1.5">
									<span class="animate-ping absolute inline-flex h-full w-full opacity-75" style="background: var(--color-primary);"></span>
									<span class="relative inline-flex h-1.5 w-1.5" style="background: var(--color-primary);"></span>
								</span>
								<span style="font-family: var(--font-mono); font-size: 10px; color: var(--color-primary);">LIVE</span>
							{:else}
								<span style="font-family: var(--font-mono); font-size: 10px; color: rgba(229,229,229,0.2);">DONE</span>
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
				{#each outreach as item, i (item.n)}
					{@const offsets = ['', 'md:ml-6', 'md:ml-12']}
					<div class="border-b flex flex-col md:flex-row items-start gap-8 py-8 {offsets[i]}" style="border-color: var(--color-rule);">
						<div class="flex items-baseline gap-6 w-full md:w-1/3">
							<span class="font-sans text-sm font-medium text-primary w-6">{item.n}</span>
							<h3 class="text-lg font-heading font-light text-white uppercase tracking-wide">{item.title}</h3>
						</div>
						<p class="text-sm max-w-sm flex-1" style="color: rgba(229,229,229,0.7);">{item.desc}</p>
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
						class="py-5 px-6 border-b border-r hover:bg-white/[0.03]"
						style="border-color: var(--color-rule); transition: none;"
					>
						<span class="block font-sans font-medium text-base text-white">{member.name}</span>
						<span class="mono-label mt-1 block">{member.role}</span>
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
						<h3 class="text-4xl font-heading font-light text-white leading-tight mb-6 group-hover:text-primary" style="transition: none;">Second place —<br/>League Championship</h3>
						<p class="text-sm leading-relaxed max-w-sm" style="color: rgba(229,229,229,0.7);">Recognized for our engineering notebook and software architecture, specifically our reliable autonomous control.</p>
					</div>
				</div>
				<div class="lg:col-span-5 flex flex-col gap-6">
					<div class="flat-panel p-10 flex-1 flex flex-col justify-center">
						<span class="mono-label mb-4">Alliance</span>
						<h3 class="text-2xl font-heading font-light text-white mb-3">Finalist alliance captain</h3>
						<p class="text-sm" style="color: rgba(229,229,229,0.7);">Finals at the FiT Central GEMS League Championship, winning against top-ranked teams.</p>
					</div>
					<div class="flat-panel p-10 flex-1 flex flex-col justify-center">
						<span class="mono-label mb-4">Legacy</span>
						<h3 class="text-2xl font-heading font-light text-white mb-3">Seven seasons</h3>
						<p class="text-sm" style="color: rgba(229,229,229,0.7);">Founded in 2019. Qualifying for League Tournament every season; two trips to Regionals.</p>
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

	<SiteFooter />
</div>

<IntroAnimation onComplete={() => (showContent = true)} />