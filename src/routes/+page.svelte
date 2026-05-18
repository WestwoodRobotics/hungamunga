<script lang="ts">
	import IntroAnimation from '$lib/components/IntroAnimation.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import Section from '$lib/components/Section.svelte';
	import Card from '$lib/components/Card.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';

	let showContent = $state(false);
</script>

<svelte:head>
	<title>FTC Team 17113 — Hunga Munga Robotics</title>
	<meta name="description" content="FTC Team 17113 Hunga Munga — a Westwood Robotics team competing in FiT Central GEMS, building robots and engineers in Austin, TX." />
	<meta property="og:title" content="FTC Team 17113 — Hunga Munga Robotics" />
	<meta property="og:description" content="FTC Team 17113 Hunga Munga — a Westwood Robotics team competing in FiT Central GEMS, building robots and engineers in Austin, TX." />
	<meta property="og:url" content="https://team17113.com" />
	<meta property="og:type" content="website" />
</svelte:head>

	<div id="content" class:visible={showContent}>
		<Nav />
		<Hero />
		<Stats />

		<Section id="robot" marker="01">
			{#snippet title()}From sketch <span class="serif-i">to</span> scoring.{/snippet}
			<div class="grid">
				<Card idx="01.A" title="Mechanical">
					CAD in Onshape, prototype in the Makerspace. Custom builds each season's game.
				</Card>
				<Card idx="01.B" title="Software">
					Java on the Control Hub. Autonomous routines tuned with vision, odometry, and the occasional 2 AM debug session.
				</Card>
				<Card idx="01.C" title="Strategy">
					Scouting, match analysis, alliance selection. Every decision is backed by data we collected, not vibes.
				</Card>
			</div>
		</Section>

		<Section id="season" marker="02">
			{#snippet title()}How a <span class="serif-i">season</span> runs.{/snippet}
			<Timeline />
		</Section>

		<Section id="outreach" marker="03">
			{#snippet title()}More than <span class="serif-i">competition.</span>{/snippet}
			<div class="grid">
				<Card idx="03.A" title="FLL mentoring">
					We coach two local FIRST Lego League teams through their season, from build to judging.
				</Card>
				<Card idx="03.B" title="School demos">
					Bringing the robot to elementary and middle schools to show students what FIRST looks like up close.
				</Card>
				<Card idx="03.C" title="Open shop">
					Sharing CAD, code, and engineering notebooks with rookie teams who ask. Pay it forward.
				</Card>
			</div>
		</Section>

		<Section id="team" marker="—">
			{#snippet title()}Who <span class="serif-i">we are.</span>{/snippet}
			<div class="grid">
				<Card idx="T.1" title="Software">
					Java on REV Control Hub. We write autonomous routines using vision, odometry, and state machines.
				</Card>
				<Card idx="T.2" title="Hardware">
					Starts on paper, moves to CAD in Onshape, and gets prototyped in the Makerspace. Designs are iterated until they hold up in a match.
				</Card>
				<Card idx="T.3" title="Design & Strategy">
					Scouting data, alliance strategy, robot analysis, and logistics.
				</Card>
			</div>
			<p class="team-note">~15 students · Austin, TX · Founded 2019 · Westwood High School</p>
		</Section>

		<Section id="results" marker="04">
			{#snippet title()}Competition <span class="serif-i">highlights - 2025</span>{/snippet}
			<div class="grid">
				<Card idx="04.A" title="Control Award 2nd Place">
					Honored for our software design and engineering notebook. Judges cited our use of intelligent control and odometry in autonomous.
				</Card>
				<Card idx="04.B" title="Finalist Alliance Captain">
					Finals at the FiT Central GEMS League Championship, winning against top-ranked teams along the way.
				</Card>
				<Card idx="04.C" title="7 seasons, counting">
					Founded in 2019, qualifying for League Tournament every season, with two trips to the Regional Championship.
				</Card>
			</div>
		</Section>

		<Section id="sponsors" marker="05">
			{#snippet title()}Powered <span class="serif-i">by</span> our sponsors.{/snippet}
			<p class="sub">
				Every season, our sponsors make the robot, the travel, and the outreach possible. If
				you'd like to support FTC Team 17113, we'd love to talk.
			</p>
			<Sponsors />
		</Section>

		<Contact />
		<SiteFooter />
	</div>

<IntroAnimation onComplete={() => (showContent = true)} />

<style>
	#content {
		min-height: 100vh;
		font-size: 14px;
		line-height: 1.55;
		visibility: hidden;
		opacity: 0;
	}
	#content.visible {
		visibility: visible;
		animation: contentEnter 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}
	@keyframes contentEnter {
		from { opacity: 0; transform: scale(1.04); }
		to { opacity: 1; transform: scale(1); }
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 16px;
	}
	.sub {
		max-width: 560px;
		margin: 0 0 8px;
		color: var(--muted);
		font-size: 14px;
		line-height: 1.65;
	}
	.team-note {
		margin: 20px 0 0;
		font-size: 11px;
		letter-spacing: 0.14em;
		color: var(--muted);
		text-transform: uppercase;
	}
</style>
