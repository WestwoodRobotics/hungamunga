<script lang="ts">
	import { onMount } from 'svelte';
	import IntroAnimation from '$lib/components/IntroAnimation.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Section from '$lib/components/Section.svelte';
	import Card from '$lib/components/Card.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';

	import { MEMBERS } from '$lib/config';

	let showContent = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add('in-view');
						observer.unobserve(e.target);
					}
				});
			},
			{ threshold: 0.06 }
		);
		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	});
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

	<div class="reveal">
		<Section id="robot" marker="01" kicker="The build">
			{#snippet title()}From sketch to scoring.{/snippet}
			<div class="trio">
				<Card idx="01" title="Mechanical" variant="paper">
					CAD in Onshape, prototype in the Makerspace. Custom builds each season's game.
				</Card>
				<Card idx="02" title="Software" variant="paper">
					Java on the Control Hub. Autonomous routines tuned with vision, odometry, and the occasional 2 AM debug session.
				</Card>
				<Card idx="03" title="Strategy" variant="paper">
					Scouting, match analysis, alliance selection. Every decision is backed by data we collected, not vibes.
				</Card>
			</div>
		</Section>
	</div>

	<div class="band reveal">
		<Section id="season" marker="02" kicker="A calendar">
			{#snippet title()}How a season runs.{/snippet}
			<Timeline />
		</Section>
	</div>

	<div class="reveal">
		<Section id="outreach" marker="03" kicker="The reach" variant="margin">
			{#snippet title()}More than competition.{/snippet}
			<ol class="outreach">
				<li>
					<span class="o-n">01</span>
					<div class="o-body">
						<h3>FLL mentoring</h3>
						<p>We coach two local FIRST Lego League teams through their season — from build through judging.</p>
					</div>
					<span class="o-tag">ongoing</span>
				</li>
				<li>
					<span class="o-n">02</span>
					<div class="o-body">
						<h3>School demonstrations</h3>
						<p>Bringing the robot to elementary and middle schools, showing students what FIRST looks like up close.</p>
					</div>
					<span class="o-tag">quarterly</span>
				</li>
				<li>
					<span class="o-n">03</span>
					<div class="o-body">
						<h3>Open shop</h3>
						<p>Sharing CAD, code, and engineering notebooks with rookie teams who ask. Pay it forward.</p>
					</div>
					<span class="o-tag">always</span>
				</li>
			</ol>
		</Section>
	</div>

	<div class="band reveal">
		<Section id="team" marker="04" kicker="The roster">
			{#snippet title()}Who we are.{/snippet}
			<div class="team-wrap">
				<div class="team-lead">
					<p class="lede">
						<span class="lede-em">15 students.</span> One pit. Seven seasons of figuring out how to make an 18-by-18-inch box move.
					</p>
					<div class="team-meta">
						<span>Austin, TX</span>
						<span>Founded 2019</span>
						<span>Westwood High</span>
					</div>
				</div>
				<div class="members-grid">
					{#each MEMBERS as member (member.name)}
						<div class="member-card">
							{#if member.pfp}
								<img class="member-avatar" src={member.pfp} alt={member.name} />
							{:else}
								<div class="member-avatar"></div>
							{/if}
							<span class="member-name">{member.name}</span>
							<span class="member-role">{member.role}</span>
						</div>
					{/each}
				</div>
			</div>
		</Section>
	</div>

	<div class="reveal">
		<Section id="results" marker="05" kicker="Last season">
			{#snippet title()}Competition highlights.{/snippet}
			<div class="results">
				<article class="r-hero">
					<span class="r-pos">2<span class="r-pos-suf">nd</span></span>
					<div>
						<span class="r-label">Control Award</span>
						<h3>Second place — League Championship</h3>
						<p>Honored for our software design and engineering notebook. Judges cited our use of intelligent control and odometry in autonomous.</p>
					</div>
				</article>
				<article class="r-row">
					<span class="r-pos">1</span>
					<div>
						<span class="r-label">Alliance</span>
						<h3>Finalist alliance captain</h3>
						<p>Finals at the FiT Central GEMS League Championship, winning against top-ranked teams along the way.</p>
					</div>
				</article>
				<article class="r-row">
					<span class="r-pos">7</span>
					<div>
						<span class="r-label">Legacy</span>
						<h3>Seven seasons, counting</h3>
						<p>Founded in 2019. Qualifying for League Tournament every season; two trips to Regionals.</p>
					</div>
				</article>
			</div>
		</Section>
	</div>

	<div class="band reveal">
		<Section id="sponsors" marker="06" kicker="With thanks">
			{#snippet title()}Powered by our sponsors.{/snippet}
			<p class="sub">
				Every season, our sponsors make the robot, the travel, and the outreach possible. If
				you'd like to support FTC Team 17113, we'd love to talk.
			</p>
			<Sponsors />
		</Section>
	</div>

	<div class="reveal">
		<Contact />
	</div>
	<SiteFooter />
</div>

<IntroAnimation onComplete={() => (showContent = true)} />

<style>
	#content {
		min-height: 100vh;
		font-size: 14px;
		line-height: 1.6;
		visibility: hidden;
		opacity: 0;
	}
	#content.visible {
		visibility: visible;
		animation: contentEnter 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}
	@keyframes contentEnter {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	.band {
		position: relative;
		background:
			linear-gradient(180deg, rgba(95,143,100,0.10), rgba(95,143,100,0.04)),
			var(--bg-2);
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
	}

	.trio {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 56px;
	}

	.outreach { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 20px; }
	.outreach li {
		display: grid;
		grid-template-columns: 56px 1fr auto;
		gap: 32px;
		padding: 28px 32px;
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		backdrop-filter: var(--glass-blur);
		-webkit-backdrop-filter: var(--glass-blur);
		box-shadow: var(--glass-shadow);
		border-radius: 14px;
		align-items: center;
		transition: background var(--t-base), border-color var(--t-base);
	}
	.outreach li:hover { background: var(--glass-bg-2); border-color: var(--line-accent-2); }
	.o-n {
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		font-size: 22px;
		color: var(--accent);
		justify-self: start;
		line-height: 1;
	}
	.o-body h3 {
		margin: 0 0 8px;
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 500;
		font-size: clamp(20px, 2.2vw, 26px);
		color: var(--ink);
		letter-spacing: -0.02em;
	}
	.o-body p { margin: 0; color: var(--ink-2); font-size: 16px; line-height: 1.65; max-width: 620px; }
	.o-tag {
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		font-size: 14px;
		color: var(--accent-2-hi);
		white-space: nowrap;
	}

	.team-wrap { display: flex; flex-direction: column; gap: 48px; }
	.members-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 20px;
	}
	.member-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		padding: 24px 16px;
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		border-radius: 14px;
		text-align: center;
		transition: background var(--t-base), border-color var(--t-base);
	}
	.member-card:hover { background: var(--glass-bg-2); border-color: var(--line-accent-2); }
	.member-avatar {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		background: var(--accent-2-dim);
		border: 2px solid var(--line-accent-2);
		object-fit: cover;
	}
	.member-name {
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 500;
		font-size: 14px;
		color: var(--ink);
		letter-spacing: -0.01em;
	}
	.member-role {
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--accent);
	}
	.lede {
		margin: 0 0 32px;
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(22px, 2.6vw, 30px);
		font-weight: 400;
		line-height: 1.35;
		letter-spacing: -0.02em;
		color: var(--ink);
	}
	.lede-em { color: var(--accent-2-hi); font-style: normal; font-family: 'Space Grotesk', sans-serif; font-weight: 500; }
	.team-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
		padding-top: 20px;
		border-top: 1px solid var(--line-strong);
		font-size: 12px;
		color: var(--ink-2);
	}
	.team-meta span:not(:last-child)::after {
		content: '·';
		margin-left: 24px;
		color: var(--muted);
	}

	.results { display: flex; flex-direction: column; gap: 20px; }
	.r-hero, .r-row {
		display: grid;
		grid-template-columns: 120px 1fr;
		gap: 40px;
		padding: 36px 36px;
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		backdrop-filter: var(--glass-blur);
		-webkit-backdrop-filter: var(--glass-blur);
		box-shadow: var(--glass-shadow);
		border-radius: 14px;
		align-items: start;
	}
	.r-hero {
		padding: 64px 48px;
		background: linear-gradient(135deg, #2d3a31 0%, #232a26 100%);
		border: 1px solid var(--line-accent-2);
		backdrop-filter: none;
		-webkit-backdrop-filter: none;
		border-radius: var(--r-lg);
		box-shadow: 0 1px 0 rgba(255,255,255,0.06) inset, 0 24px 60px rgba(0,0,0,0.45);
		grid-template-columns: 160px 1fr;
	}
	.r-hero .r-pos { font-size: 88px; color: var(--accent); }
	.r-hero .r-pos-suf { color: var(--accent); }
	.r-pos {
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 500;
		font-size: 56px;
		color: var(--ink-dim);
		line-height: 0.9;
		letter-spacing: -0.04em;
	}
	.r-pos-suf { font-size: 0.4em; vertical-align: super; margin-left: 2px; color: var(--ink-dim); }
	.r-label {
		font-size: 10px;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--accent-2-hi);
	}
	.r-hero h3, .r-row h3 {
		margin: 6px 0 12px;
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 500;
		font-size: 26px;
		color: var(--ink);
		letter-spacing: -0.02em;
	}
	.r-hero h3 { font-size: clamp(32px, 3.4vw, 44px); }
	.r-hero p, .r-row p { margin: 0; color: var(--ink-2); font-size: 16px; line-height: 1.75; max-width: 640px; }

	.sub {
		max-width: 620px;
		margin: 0 0 48px;
		font-size: 16px;
		line-height: 1.65;
		color: var(--ink-2);
	}

	@keyframes revealUp {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: none; }
	}
	.reveal {
		opacity: 0;
		animation: revealUp 0.7s var(--ease-out-expo) forwards;
		animation-play-state: paused;
	}
	.reveal:global(.in-view) { animation-play-state: running; }

	@media (max-width: 1080px) {
		.trio { gap: 32px; }
		.members-grid { grid-template-columns: repeat(4, 1fr); }
	}
	@media (max-width: 760px) {
		.trio { grid-template-columns: 1fr; gap: 0; }
		.outreach li { grid-template-columns: 1fr; gap: 14px; padding: 24px 22px; }
		.o-tag { justify-self: flex-start; }
		.members-grid { grid-template-columns: repeat(3, 1fr); }
		.r-hero, .r-row { grid-template-columns: 1fr; gap: 14px; padding: 28px 22px; }
		.r-hero { padding: 36px 22px; }
	}
</style>
