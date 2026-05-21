<script lang="ts">
	import IntroAnimation from '$lib/components/IntroAnimation.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Section from '$lib/components/Section.svelte';
	import Card from '$lib/components/Card.svelte';
import Sponsors from '$lib/components/Sponsors.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';

	import { MEMBERS } from '$lib/config';
	import { reveal } from '$lib/actions';

	let showContent = $state(false);
</script>

<svelte:head>
	<title>FTC Team 17113 — Hunga Munga Robotics</title>
	<meta name="description" content="FTC Team 17113 Hunga Munga — a Westwood Robotics team competing in FiT Central GEMS, building robots and engineers in Austin, TX." />
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
		<Section id="robot" marker="01" kicker="The build">
			{#snippet title()}Structure &<br/> Logic.{/snippet}
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card idx="I" title="Mechanical">
					We design in Onshape and prototype in our makerspace, creating custom mechanisms tailored to each season's game.
				</Card>
				<Card idx="II" title="Software">
					Writing Java for the Control Hub. We focus on reliable autonomous routines using vision processing and custom odometry.
				</Card>
				<div class="md:col-span-2 md:w-2/3 ml-auto mt-6">
					<Card idx="III" title="Strategy">
						From scouting to alliance selection, we use data-driven analysis to make smart decisions during competition.
					</Card>
				</div>
			</div>
		</Section>
	</div>

	<div use:reveal>
		<Section id="season" marker="02" kicker="A calendar">
			{#snippet title()}Season<br/> Timeline.{/snippet}
			<div class="flex flex-col gap-6 max-w-2xl">
				<p class="text-sm text-white/70 leading-relaxed">
					Our season runs from the September kickoff through the spring championships — a continuous cycle of designing, building, and testing.
				</p>
				<div class="flat-panel p-8 flex flex-col gap-0">
					{#each [
						{ month: 'September', event: 'Season Kickoff & Prototyping' },
						{ month: 'October', event: 'Robot Design & Build Phase' },
						{ month: 'November', event: 'First League Meet' },
						{ month: 'December', event: 'Iteration & Driver Practice' },
						{ month: 'January', event: 'Final Refinements' },
						{ month: 'February', event: 'League Championship' },
					] as row (row.month)}
						<div class="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
							<span class="text-[11px] font-sans font-medium uppercase tracking-widest text-white/40 w-28 shrink-0">{row.month}</span>
							<span class="text-sm text-white/90 text-right">{row.event}</span>
						</div>
					{/each}
				</div>
			</div>
		</Section>
	</div>

	<div use:reveal>
		<Section id="outreach" marker="03" kicker="The reach">
			{#snippet title()}Beyond<br/> Competition.{/snippet}
			<div class="flex flex-col gap-6">
				{#each [
					{ n: 'I', title: 'FLL Mentoring', desc: 'Mentoring local FIRST Lego League teams, helping younger students build their first robots and prepare for competition.', tag: 'ongoing' },
					{ n: 'II', title: 'Demonstrations', desc: 'Visiting elementary and middle schools to show off our robot and get kids excited about STEM.', tag: 'quarterly' },
					{ n: 'III', title: 'Open Shop', desc: 'Sharing our resources, code, and designs with rookie teams to help grow the FIRST community.', tag: 'always' }
				] as item, i (item.n)}
					{@const offsets = ['', 'md:ml-6', 'md:ml-12']}
					<div class="liquid-panel p-8 flex flex-col md:flex-row items-start md:items-center gap-8 group {offsets[i]}">
						<div class="flex items-baseline gap-6 w-full md:w-1/3">
							<span class="font-sans text-sm font-medium text-primary w-6">{item.n}</span>
							<h3 class="text-lg font-heading font-light text-white uppercase tracking-wide">{item.title}</h3>
						</div>
						<p class="text-sm text-white/70 max-w-sm flex-1">{item.desc}</p>
						<span class="uppercase tracking-widest text-[10px] font-sans font-medium text-white/50 bg-white/[0.04] px-4 py-2 rounded-full">{item.tag}</span>
					</div>
				{/each}
			</div>
		</Section>
	</div>

	<div use:reveal>
		<Section id="team" marker="04" kicker="The roster">
			{#snippet title()}The<br/> Team.{/snippet}
			<p class="text-sm text-white/70 leading-relaxed max-w-md mb-16">
				<span class="text-white">15 students working together.</span> We spend our after-school hours solving tough engineering problems and learning from our mistakes.
			</p>
			
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{#each MEMBERS as member (member.name)}
					<div class="flat-panel p-6 flex flex-col items-center text-center group">
						<div class="w-20 h-20 mb-6 overflow-hidden bg-white/5 rounded-[16px] flex items-center justify-center grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500">
							{#if member.pfp}
								<img src={member.pfp} alt={member.name} class="w-full h-full object-cover" />
							{:else}
								<span class="font-heading text-2xl font-light text-white/40">{member.name.charAt(0)}</span>
							{/if}
						</div>
						<span class="font-sans text-sm font-medium tracking-wide text-white">{member.name}</span>
						<span class="text-[10px] uppercase tracking-widest font-medium text-primary mt-2">{member.role}</span>
					</div>
				{/each}
			</div>
		</Section>
	</div>

	<div use:reveal>
		<Section id="results" marker="05" kicker="Last season" variant="wide">
			{#snippet title()}Season<br/> Results.{/snippet}
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
				<div class="liquid-panel p-12 lg:col-span-7 flex flex-col justify-between min-h-[360px] group">
					<span class="text-[11px] font-sans font-medium uppercase tracking-widest text-white/50">Control Award</span>
					<div>
						<h3 class="text-4xl font-heading font-light text-white leading-tight mb-6 group-hover:text-primary transition-colors">Second place —<br/>League Championship</h3>
						<p class="text-white/70 text-sm leading-relaxed max-w-sm">Recognized for our engineering notebook and software architecture, specifically our reliable autonomous control.</p>
					</div>
				</div>
				
				<div class="lg:col-span-5 flex flex-col gap-6">
					<div class="flat-panel p-10 flex-1 flex flex-col justify-center">
						<span class="text-[11px] font-sans font-medium uppercase tracking-widest text-white/50 mb-4">Alliance</span>
						<h3 class="text-2xl font-heading font-light text-white mb-3">Finalist alliance captain</h3>
						<p class="text-white/70 text-sm">Finals at the FiT Central GEMS League Championship, winning against top-ranked teams.</p>
					</div>
					<div class="flat-panel p-10 flex-1 flex flex-col justify-center">
						<span class="text-[11px] font-sans font-medium uppercase tracking-widest text-white/50 mb-4">Legacy</span>
						<h3 class="text-2xl font-heading font-light text-white mb-3">Seven seasons</h3>
						<p class="text-white/70 text-sm">Founded in 2019. Qualifying for League Tournament every season; two trips to Regionals.</p>
					</div>
				</div>
			</div>
		</Section>
	</div>

	<div use:reveal>
		<Section id="sponsors" marker="06" kicker="With thanks">
			{#snippet title()}Partners &<br/> Sponsors.{/snippet}
			<p class="text-sm text-white/70 max-w-md mb-16">
				Our sponsors make everything we do possible, from buying parts to traveling to competitions. If you're interested in supporting our team, please reach out.
			</p>
			<Sponsors />
		</Section>
	</div>

	<div use:reveal>
		<Contact />
	</div>
	
	<SiteFooter />
</div>

<IntroAnimation onComplete={() => (showContent = true)} />
