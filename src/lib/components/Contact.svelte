<script lang="ts">
	import Section from './Section.svelte';
	import GlassButton from './GlassButton.svelte';
	import { onMount } from 'svelte';
	
	const eParts = ['hungamunga17113', 'gmail.com'];
	let eHref = $state('#');
	let eDisplay = $state('Loading...');

	onMount(() => {
		const email = `${eParts[0]}@${eParts[1]}`;
		eHref = `mailto:${email}`;
		eDisplay = email;
	});
</script>

<Section id="contact" marker="07" kicker="Inquiries">
	{#snippet title()}Get in<br/> Touch.{/snippet}
	<div class="liquid-panel p-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
		<div class="flex flex-col gap-12">
			<p class="text-sm text-white/70 leading-relaxed max-w-sm">
				Interested in sponsoring, mentoring, or requesting a demonstration? Reach out. We typically respond within 48 hours.
			</p>
			
			<div class="flex flex-col gap-6">
				<div class="flex flex-col gap-2">
					<dt class="text-[11px] font-sans uppercase tracking-widest text-primary font-medium">Email</dt>
					<dd class="text-sm font-sans text-white/90 break-words">{eDisplay}</dd>
				</div>
				<div class="flex flex-col gap-2">
					<dt class="text-[11px] font-sans uppercase tracking-widest text-primary font-medium">Location</dt>
					<dd class="text-sm font-sans text-white/90">Austin, Texas</dd>
				</div>
			</div>
		</div>
		
		<div class="lg:justify-self-end flex items-end">
			<GlassButton variant="primary" size="lg" class="group px-12">
				<a href={eHref} class="flex items-center gap-4 py-2">
					<span class="text-base tracking-widest">Send Message</span>
					<span class="transition-transform duration-500 group-hover:translate-x-2">-></span>
				</a>
			</GlassButton>
		</div>
	</div>
</Section>
