<script lang="ts">
	import Brackets from './Brackets.svelte';
</script>

<section id="contact" class="block">
	<div class="contactcard">
		<Brackets />
		<div class="contact-grid">
			<div>
				<span class="sec-marker">§ 05</span>
				<h2 class="contact-h">Get in <span class="serif-i">touch.</span></h2>
				<p class="sub">
					Interested in sponsoring, mentoring, or bringing us out for a demo? Reach out — we
					read everything.
				</p>
			</div>
			<a class="cta" href="mailto:team17113@gmail.com">
				Email the team <span class="arr">-&gt;</span>
			</a>
		</div>
	</div>
</section>

<style>
	.block {
		max-width: 1180px;
		margin: 0 auto;
		padding: 56px 28px 88px;
	}
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
	.sec-marker {
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		color: var(--accent);
		font-size: 26px;
		display: inline-block;
		margin-bottom: 12px;
	}
	.contact-h {
		font-family: inherit;
		font-weight: 500;
		font-size: clamp(24px, 3vw, 32px);
		margin: 0 0 12px;
		letter-spacing: -0.005em;
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
