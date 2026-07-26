<script lang="ts">
	import IntroAnimation from '$lib/components/IntroAnimation.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Section from '$lib/components/Section.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { MEMBERS, TIMELINE, OUTREACH, CLUB_EMAIL } from '$lib/config';
	import { reveal } from '$lib/actions';
	import { ArrowRight } from 'lucide-svelte';

	const memberCount = MEMBERS.length;

	const sponsorTiers = [
		{ name: 'Gold', amount: '$500+', perks: ['Logo on robot, team shirt & website', 'Name in notebook'] },
		{ name: 'Silver', amount: '$250–499', perks: ['Logo on team shirt & website', 'Named in notebook'] },
		{ name: 'Bronze', amount: '$100–249', perks: ['Logo on website', 'Name in notebook'] },
		{ name: 'Community', amount: 'Any', perks: ['Name in notebook', 'Our thanks'] }
	];

	let showContent = $state(false);

	const subsystems = [
		{ id: 'launch', label: 'Launcher', x: 40, y: 22, desc: 'Dual-stage flywheel on a printed truss frame. Fixed hood angle, velocity held under PIDF so shot distance stays repeatable across a match.' },
		{ id: 'intake', label: 'Intake', x: 78, y: 48, desc: 'Compliant star-wheel rollers on a sprung axle. Sweeps game elements off the floor at full drive speed and centers them for transfer.' },
		{ id: 'transfer', label: 'Transfer Linkage', x: 56, y: 66, desc: 'Four-bar linkage that hands off from the intake to the launcher. Single motion, no stall points, keeps the path short and jam-free.' },
		{ id: 'chassis', label: 'Chassis', x: 40, y: 74, desc: 'Welded-profile frame with a low, centered mass. Bolt-on plate panels let a damaged section swap out between matches in under two minutes.' },
		{ id: 'drive', label: 'Mecanum Drive', x: 13, y: 73, desc: 'Four mecanum wheels for holonomic motion, paired with dead-wheel odometry pods feeding the localizer.' }
	];

	let activeSub = $state('launch');
	const activeIdx = $derived(Math.max(0, subsystems.findIndex((s) => s.id === activeSub)));
	const active = $derived(subsystems[activeIdx]);
	const activeIndex = $derived(String(activeIdx + 1).padStart(2, '0'));

	const specs = [
		['Auto score (avg)', '# pts'],
		['Cycle time', '# sec'],
		['Autonomous runs', '#+'],
		['Season W/L/T', 'a-b-c'],
		['Drivetrain', 'Mecanum'],
		['Weight', '# lbs']
	];

	const software = [
		['Control', 'FTC SDK · Java'],
		['Autonomy', 'PedroPathing'],
		['Localization', 'MCL + odometry'],
		['Tuning', 'PIDF / feedforward'],
		['Vision', 'AprilTag pose solve'],
		['Tooling', 'FTC Dashboard']
	];
</script>

<svelte:head>
	<title>FTC Team 17113 - Hunga Munga Robotics</title>
	<meta name="description" content="FTC Team 17113 Hunga Munga - seven seasons, one makerspace, Austin TX." />
	<meta property="og:title" content="FTC Team 17113 - Hunga Munga Robotics" />
	<meta property="og:description" content="FTC Team 17113 Hunga Munga - seven seasons, one makerspace, Austin TX." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/favicon.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="FTC Team 17113 - Hunga Munga Robotics" />
	<meta name="twitter:description" content="FTC Team 17113 Hunga Munga - seven seasons, one makerspace, Austin TX." />
</svelte:head>

<noscript>
	<style>
		.js-hide { opacity: 1 !important; pointer-events: auto !important; height: auto !important; overflow: visible !important; }
	</style>
</noscript>

<div class="js-hide transition-opacity duration-500" style={!showContent ? 'opacity: 0; pointer-events: none; height: 100vh; overflow: hidden;' : 'opacity: 1;'}>
	<Nav />
	<main id="main-content">
		<Hero />

		<div use:reveal>
			<Section id="about" kicker="FTC Team 17113">
				{#snippet title()}About Us{/snippet}
				<div class="flex flex-col gap-4 max-w-2xl">
					<p class="text-base leading-relaxed text-white/85">We are Hunga Munga 17113, an FTC Robotics team from Westwood High School in Austin, Texas. Our {memberCount} members are passionate about engineering, designing, and innovating.</p>
					<p class="text-base leading-relaxed text-white/85">Our mission is to <b>build a strong engineering community</b> and inspire the next generation of creators, thinkers, and innovators.</p>
				</div>
				<div class="grid grid-cols-2 md:grid-cols-4 border-t mt-10" style="border-color: var(--color-rule);">
					{#each [['15', 'Members'], ['7', 'Seasons'], ['2', 'Regionals'], ['2019', 'Founded']] as [val, label] (label)}
						<div class="py-8 px-6 border-r last:border-r-0 flex flex-col gap-2" style="border-color: var(--color-rule);">
							<span class="font-heading font-light text-white" style="font-size: clamp(2rem, 4vw, 3rem); line-height: 1;">{val}</span>
							<span class="mono-label">{label}</span>
						</div>
					{/each}
				</div>
			</Section>
		</div>

		<div use:reveal>
			<Section id="robot" kicker="Java · Onshape · PedroPathing">
				{#snippet title()}The Robot{/snippet}
				<div class="flex flex-col border-t" style="border-color: var(--color-rule);">
					<div class="grid grid-cols-1 lg:grid-cols-12 border-b" style="border-color: var(--color-rule);">
						<div
							class="lg:col-span-7 border-b lg:border-b-0 lg:border-r"
							style="border-color: var(--color-rule);"
						>
							<div class="relative w-full" style="aspect-ratio: 23 / 20;">
								<img
									src="/robot.png"
									alt="Team 17113 competition robot"
									loading="lazy"
									class="absolute inset-0 w-full h-full object-contain p-8"
									style="filter: grayscale(1) brightness(1.3) contrast(1.15) drop-shadow(0 0 60px rgba(255, 255, 255, 0.07));"
								/>
								{#each subsystems as s, i (s.id)}
									{@const on = activeSub === s.id}
									<button
										type="button"
										class="marker absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
										class:is-active={on}
										style="left: {s.x}%; top: {s.y}%;"
										aria-label={s.label}
										aria-pressed={on}
										onmouseenter={() => (activeSub = s.id)}
										onfocus={() => (activeSub = s.id)}
										onclick={() => (activeSub = s.id)}
									>
										<span class="marker-ring"></span>
										<span class="mono-text" style="font-size: 10px;">{String(i + 1).padStart(2, '0')}</span>
									</button>
								{/each}
							</div>
						</div>
						<div class="lg:col-span-5 flex flex-col">
							<div class="px-8 py-10 border-b" style="border-color: var(--color-rule);">
								<span class="mono-label">Subsystems</span>
								{#key activeSub}
									<div class="detail">
										<div class="flex items-baseline gap-4 mt-5">
											<span class="mono-text text-primary/60">{activeIndex}</span>
											<h3 class="font-heading font-light text-white" style="font-size: 1.6rem; line-height: 1.15;">{active.label}</h3>
										</div>
										<p class="text-base leading-relaxed text-white/75 mt-3" style="max-width: 42ch;">{active.desc}</p>
									</div>
								{/key}
							</div>
							<div class="flex flex-col">
								{#each subsystems as s, i (s.id)}
									{@const on = activeSub === s.id}
									<button
										type="button"
										class="sub-row text-left px-8 py-3.5 border-b last:border-b-0 grid items-center gap-4"
										class:is-active={on}
										style="border-color: var(--color-rule); grid-template-columns: 1.75rem 1fr auto;"
										onmouseenter={() => (activeSub = s.id)}
										onfocus={() => (activeSub = s.id)}
										onclick={() => (activeSub = s.id)}
									>
										<span class="mono-text {on ? 'text-primary' : 'text-white/45'}">{String(i + 1).padStart(2, '0')}</span>
										<span class="mono-text {on ? 'text-white' : 'text-white/70'}">{s.label}</span>
										<ArrowRight size={13} class="sub-row-arrow" />
									</button>
								{/each}
							</div>
						</div>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 border-b" style="border-color: var(--color-rule);">
						<div class="px-8 py-12 flex flex-col gap-3 border-r" style="border-color: var(--color-rule);">
							<span class="mono-label">Robot Specs</span>
							<div class="flex flex-col mt-3">
								{#each specs as [k, v] (k)}
									<div class="flex justify-between gap-4 border-b py-2.5" style="border-color: var(--color-rule);">
										<span class="mono-text text-white/55">{k}</span>
										<span class="mono-text text-white/90">{v}</span>
									</div>
								{/each}
							</div>
						</div>
						<div class="px-8 py-12 flex flex-col gap-3">
							<span class="mono-label">Software</span>
							<p class="text-base leading-relaxed text-white/75 mt-1" style="max-width: 40ch;">FTC SDK Java, PedroPathing Ivy over dead-wheel odometry.</p>
							<div class="flex flex-col mt-3">
								{#each software as [k, v] (k)}
									<div class="flex justify-between gap-4 border-b py-2.5" style="border-color: var(--color-rule);">
										<span class="mono-text text-white/55">{k}</span>
										<span class="mono-text text-primary/70">{v}</span>
									</div>
								{/each}
							</div>
						</div>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 border-b" style="border-color: var(--color-rule);">
						<div class="px-8 py-10 flex flex-col gap-4 border-r" style="border-color: var(--color-rule);">
							<span class="mono-label">Hardware</span>
							<p class="text-base leading-relaxed text-white/75" style="max-width: 44ch;">Onshape for CAD, GoBUILDA parts.</p>
							<span class="mono-text text-primary/55">CAD / Build</span>
						</div>
						<div class="px-8 py-10 flex flex-col gap-4">
							<span class="mono-label">Strategy</span>
							<p class="text-base leading-relaxed text-white/75" style="max-width: 44ch;">Scoring app + match analysis. We've improved x points because of it.</p>
							<span class="mono-text text-primary/55">Analysis / Scouting</span>
						</div>
					</div>
				</div>
			</Section>
		</div>


		<div use:reveal>
			<Section id="season" kicker="2025–26">
				{#snippet title()}Season Timeline.{/snippet}
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
							<span class="mono-text text-white/55 px-6 py-4 border-r" style="border-color: var(--color-rule);">{row.month}</span>
							<span class="px-6 py-4 text-sm border-r {row.status === 'active' ? 'text-white/95' : 'text-white/65'}" style="border-color: var(--color-rule);">{row.event}</span>
							<span class="px-6 py-4 flex items-center gap-1.5">
								{#if row.status === 'active'}
									<span class="relative flex h-1.5 w-1.5">
										<span class="animate-ping absolute inline-flex h-full w-full opacity-75" style="background: var(--color-primary);"></span>
										<span class="relative inline-flex h-1.5 w-1.5" style="background: var(--color-primary);"></span>
									</span>
									<span class="mono-text text-[10px] text-primary">LIVE</span>
								{:else if row.status === 'future'}
									<span class="mono-text text-[10px] text-white/50">FUTURE</span>
								{:else}
									<span class="mono-text text-[10px] text-white/50">DONE</span>
								{/if}
							</span>
						</div>
					{/each}
				</div>
			</Section>
		</div>


		<div use:reveal>
			<Section id="outreach">
				{#snippet title()}Beyond Competition.{/snippet}
				<div class="flex flex-col border-t" style="border-color: var(--color-rule);">
					{#each OUTREACH as item (item.n)}
						<div class="border-b flex flex-col md:flex-row items-start gap-8 py-10" style="border-color: var(--color-rule);">
							<div class="flex items-baseline gap-6 md:w-1/3 shrink-0">
								<span class="mono-text text-primary/50 w-6">{item.n}</span>
								<h3 class="text-xl font-heading font-light text-white">{item.title}</h3>
							</div>
							<p class="text-base leading-relaxed flex-1 text-white/75 max-w-prose">{item.desc}</p>
							<span class="mono-label shrink-0">{item.tag}</span>
						</div>
					{/each}
				</div>
			</Section>
		</div>


		<div use:reveal>
			<Section id="team" kicker="{memberCount} members">
				{#snippet title()}The Team.{/snippet}
				<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t" style="border-color: var(--color-rule);">
					{#each MEMBERS as member (member.name)}
						{@const initials = member.name.split(' ').map((n) => n[0]).join('')}
						<div
							class="py-6 px-6 border-b border-r hover:bg-white/4 flex flex-col gap-4 transition-none"
							style="border-color: var(--color-rule);"
						>
							<div
								class="w-10 h-10 flex items-center justify-center shrink-0"
								style="background: rgba(122,158,126,0.08); border: 1px solid rgba(122,158,126,0.2);"
							>
								<span class="mono-text text-primary" style="font-size: 10px;">{initials}</span>
							</div>
							<div>
								<span class="block font-sans font-medium text-sm text-white leading-snug">{member.name}</span>
								<span class="mono-label mt-1 block">{member.role}</span>
							</div>
						</div>
					{/each}
				</div>
			</Section>
		</div>


		<div use:reveal>
			<Section id="results" kicker="PAST SEASONS">
				{#snippet title()}Season Results.{/snippet}
				<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
					<div class="liquid-panel p-12 lg:col-span-7 flex flex-col justify-between min-h-[360px] group">
						<span class="mono-label">Control Award</span>
						<div>
							<h3 class="text-4xl font-heading font-light text-white leading-tight mb-6 group-hover:text-primary transition-none">Second place —<br/>League Championship</h3>
							<p class="text-base leading-relaxed max-w-sm text-white/75">Recognized for our engineering notebook and software architecture, specifically our reliable autonomous control.</p>
						</div>
					</div>
					<div class="lg:col-span-5 flex flex-col gap-6">
						<div class="flat-panel p-10 flex-1 flex flex-col justify-center">
							<span class="mono-label mb-4">Alliance</span>
							<h3 class="text-2xl font-heading font-light text-white mb-3">Finalist alliance captain</h3>
							<p class="text-base leading-relaxed text-white/75">Finals at the FiT Central GEMS League Championship, winning against top-ranked teams.</p>
						</div>
						<div class="flat-panel p-10 flex-1 flex flex-col justify-center">
							<span class="mono-label mb-4">Legacy</span>
							<h3 class="text-2xl font-heading font-light text-white mb-3">Seven seasons</h3>
							<p class="text-base leading-relaxed text-white/75">Founded in 2019. Qualifying for League Tournament every season; two trips to Regionals.</p>
						</div>
					</div>
				</div>
			</Section>
		</div>


		<div use:reveal>
			<Section id="sponsors" kicker="Support the team">
				{#snippet title()}Sponsor Us.{/snippet}
				<div class="flex flex-col border-t" style="border-color: var(--color-rule);">

					<div class="grid grid-cols-1 md:grid-cols-2 border-b" style="border-color: var(--color-rule);">
						<div class="px-8 py-12 flex flex-col gap-5 border-r" style="border-color: var(--color-rule);">
							<p class="text-base leading-relaxed text-white/85" style="max-width: 42ch;">Your support funds robot parts, competition fees, and outreach events that bring STEM to our community. Helping build the next generation of engineers.</p>
							<p class="text-base leading-relaxed text-white/65" style="max-width: 42ch;">Processed through Westwood Robotics, a 501(c)(3). <br /><a href="mailto:{CLUB_EMAIL}" class="text-link inline-flex items-center gap-1" style="color: rgba(229,229,229,0.7);">Get in touch <ArrowRight size={13} /></a></p>
						</div>
						<div class="px-8 py-12 flex flex-col gap-8">
							<div class="flex flex-col gap-3">
								<span class="mono-label">Mentorship</span>
								<p class="text-base leading-relaxed text-white/65" style="max-width: 38ch;">Opportunities to teach us robotics, project management, or real-world engineering skills are always welcome.</p>
							</div>
							<div class="border-t" style="border-color: var(--color-rule);"></div>
							<div class="flex flex-col gap-3">
								<span class="mono-label">Facility Tours</span>
								<p class="text-base leading-relaxed text-white/65" style="max-width: 38ch;">Showing us a real workspace, whatever your industry, is invaluable to a team of high schoolers building real things.</p>
							</div>
						</div>
					</div>

					<div class="w-full border-b" style="border-color: rgba(255,255,255,0.2);">
						<div class="grid border-b" style="grid-template-columns: 8rem 8rem 1fr; border-color: rgba(255,255,255,0.2);">
							<span class="mono-label px-6 py-3 border-r" style="border-color: var(--color-rule);">Tier</span>
							<span class="mono-label px-6 py-3 border-r" style="border-color: var(--color-rule);">Investment</span>
							<span class="mono-label px-6 py-3">Inclusions</span>
						</div>
						{#each sponsorTiers as t (t.name)}
							<div
								class="grid border-b last:border-0 hover:bg-white/4 {t.name === 'Gold' ? 'bg-primary/5' : ''}"
								style="grid-template-columns: 8rem 8rem 1fr; border-color: var(--color-rule); transition: none;"
							>
								<span class="px-6 py-4 border-r font-sans text-sm font-medium text-white" style="border-color: var(--color-rule);">{t.name}</span>
								<span class="px-6 py-4 border-r" style="font-family: var(--font-mono); font-size: 11px; color: var(--color-primary); border-color: var(--color-rule);">{t.amount}</span>
								<span class="px-6 py-4 text-sm" style="color: rgba(229,229,229,0.7);">{#each t.perks as perk, i (perk)}{#if i > 0}<span class="mx-1 opacity-30">·</span>{/if}{perk}{/each}</span>
							</div>
						{/each}
					</div>

				</div>
			</Section>
		</div>

		<div use:reveal>
			<Contact />
		</div>

		<Footer />
	</main>
</div>

<IntroAnimation onComplete={() => (showContent = true)} />

<style>
	.marker {
		width: 1.75rem;
		height: 1.75rem;
		color: rgba(229, 229, 229, 0.85);
		border: 1px solid rgba(255, 255, 255, 0.28);
		background: rgba(10, 10, 10, 0.88);
		box-shadow: 0 0 0 3px rgba(10, 10, 10, 0.45);
		transition: color 200ms ease, border-color 200ms ease, transform 260ms cubic-bezier(0.2, 0.7, 0.3, 1);
	}
	.marker:hover { transform: translate(-50%, -50%) scale(1.08); }
	.marker.is-active {
		color: var(--color-primary);
		border-color: rgba(122, 158, 126, 0.9);
	}
	.marker-ring {
		position: absolute;
		inset: -5px;
		border: 1px solid rgba(122, 158, 126, 0.55);
		opacity: 0;
		transform: scale(0.82);
		transition: opacity 260ms ease, transform 260ms cubic-bezier(0.2, 0.7, 0.3, 1);
	}
	.marker.is-active .marker-ring { opacity: 1; transform: scale(1); }

	.detail { animation: detail-in 320ms cubic-bezier(0.2, 0.7, 0.3, 1) both; }
	@keyframes detail-in {
		from { opacity: 0; transform: translateY(6px); }
		to { opacity: 1; transform: none; }
	}

	.sub-row { transition: background-color 180ms ease, padding-left 220ms cubic-bezier(0.2, 0.7, 0.3, 1); }
	.sub-row:hover, .sub-row.is-active { background: rgba(255, 255, 255, 0.03); }
	.sub-row.is-active { padding-left: 2.5rem; }
	.sub-row :global(.sub-row-arrow) {
		color: var(--color-primary);
		opacity: 0;
		transform: translateX(-6px);
		transition: opacity 200ms ease, transform 220ms cubic-bezier(0.2, 0.7, 0.3, 1);
	}
	.sub-row.is-active :global(.sub-row-arrow) { opacity: 0.8; transform: none; }

	@media (prefers-reduced-motion: reduce) {
		.marker, .marker-ring, .sub-row, .sub-row :global(.sub-row-arrow) { transition: none; }
		.marker:hover { transform: translate(-50%, -50%); }
		.sub-row.is-active { padding-left: 2rem; }
		.detail { animation: none; }
	}
</style>
