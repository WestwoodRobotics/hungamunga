<script lang="ts">
	import Section from './Section.svelte';
	import Brackets from './Brackets.svelte';
</script>

<Section id="contact" marker="05">
	{#snippet title()}Get in <span class="serif-i">touch.</span>{/snippet}
	<div class="contactcard">
		<Brackets />
		<div class="contact-grid">
			<p class="sub">
				Interested in sponsoring, mentoring, or bringing us out for a demo? Reach out, we'd love to hear from you!
			</p>
			<a class="cta" href="mailto:team17113@gmail.com">
				Email Us →
			</a>
		</div>
	</div>
</Section>

<style>
	.contactcard {
		position: relative;
		border-radius: 18px;
		padding: 52px 40px;
		background:
			radial-gradient(ellipse at top right, rgba(217, 74, 44, 0.12), transparent 60%),
			var(--panel);
		box-shadow: var(--shadow-raised);
	}
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 32px;
		align-items: center;
	}
	.sub { max-width: 480px; margin: 0; color: var(--muted); font-size: 14px; line-height: 1.65; }
	.cta {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 16px 24px;
		border-radius: 12px;
		background: var(--accent);
		color: #fff;
		text-decoration: none;
		font-size: 13px;
		letter-spacing: 0.04em;
		box-shadow:
			0 1px 0 rgba(255, 255, 255, 0.16) inset,
			8px 8px 22px rgba(0, 0, 0, 0.45),
			0 0 0 1px rgba(217, 74, 44, 0.5);
		transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
		white-space: nowrap;
	}
	.cta:hover {
		transform: translateY(1px);
		filter: brightness(1.06);
		box-shadow:
			inset 3px 3px 8px rgba(0, 0, 0, 0.35),
			0 0 0 1px rgba(217, 74, 44, 0.5);
	}
	.cta :global(.arr) { color: #fff; }

	@media (max-width: 860px) {
		.contact-grid { grid-template-columns: 1fr; }
	}
</style>
