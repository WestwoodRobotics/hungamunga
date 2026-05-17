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

{#if showContent}
	<div id="content">
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

		<Section id="sponsors" marker="04">
			{#snippet title()}Powered <span class="serif-i">by</span> our sponsors.{/snippet}
			<p class="sub">
				Every season, our sponsors make the robot, the travel, and the outreach possible. If
				you'd like to support FTC 17113, we'd love to talk.
			</p>
			<Sponsors />
		</Section>

		<Contact />
		<SiteFooter />
	</div>
{/if}

<IntroAnimation onComplete={() => (showContent = true)} />

<style>
	#content {
		min-height: 100vh;
		animation: contentEnter 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
		font-size: 14px;
		line-height: 1.55;
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
</style>
