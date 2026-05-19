<script lang="ts">
	import Section from './Section.svelte';
	import { CLUB_EMAIL } from '$lib/config';
</script>

<Section id="contact" marker="07" kicker="Write to us">
	{#snippet title()}Get in touch.{/snippet}
	<div class="contact">
		<div class="left">
			<p class="lede">
				Interested in sponsoring, mentoring, or bringing us out for a demo? Reach out — we'd love to hear from you.
			</p>
			<dl class="meta">
				<div><dt>Email</dt><dd>{CLUB_EMAIL}</dd></div>
				<div><dt>Location</dt><dd>Austin, Texas</dd></div>
				<div><dt>Response</dt><dd>Within 48 hours</dd></div>
			</dl>
		</div>
		<a class="cta" href="mailto:{CLUB_EMAIL}">
			<span class="cta-label">Email us</span>
			<span class="cta-arrow">→</span>
		</a>
	</div>
</Section>

<style>
	.contact {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 96px;
		align-items: end;
		padding-top: 24px;
	}
	.left { max-width: 560px; display: flex; flex-direction: column; gap: 56px; }
	.lede {
		margin: 0;
		font-size: clamp(20px, 2.2vw, 26px);
		line-height: 1.4;
		letter-spacing: -0.015em;
		color: var(--ink);
	}
	.meta {
		margin: 0;
		display: grid;
		grid-template-columns: repeat(3, auto);
		gap: 36px;
		padding: 24px 28px;
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		backdrop-filter: var(--glass-blur);
		-webkit-backdrop-filter: var(--glass-blur);
		box-shadow: var(--glass-shadow);
		border-radius: 14px;
	}
	.meta > div { display: flex; flex-direction: column; gap: 6px; }
	.meta dt {
		font-size: 10px;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--accent-2-hi);
	}
	.meta dd { margin: 0; font-size: 13px; color: var(--ink); }

	.cta {
		display: inline-flex;
		align-items: center;
		gap: 16px;
		padding: 22px 28px;
		color: var(--ink);
		text-decoration: none;
		background: var(--glass-bg-2);
		border: 1px solid var(--glass-border);
		backdrop-filter: var(--glass-blur);
		-webkit-backdrop-filter: var(--glass-blur);
		box-shadow: var(--glass-shadow);
		border-radius: 14px;
		font-family: 'Space Grotesk', sans-serif;
		transition: background var(--t-base), border-color var(--t-base), color var(--t-base);
	}
	.cta-label { font-size: clamp(28px, 3.2vw, 40px); font-weight: 500; letter-spacing: -0.03em; }
	.cta-arrow { font-size: clamp(24px, 2.8vw, 32px); color: var(--accent); transition: transform var(--t-base); }
	.cta:hover { background: var(--accent); border-color: var(--accent); color: var(--bg); }
	.cta:hover .cta-arrow { transform: translateX(8px); color: var(--bg); }

	@media (max-width: 860px) {
		.contact { grid-template-columns: 1fr; gap: 48px; align-items: start; }
		.meta { grid-template-columns: 1fr; gap: 20px; }
	}
</style>
