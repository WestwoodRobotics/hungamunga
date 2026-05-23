<script lang="ts">
	import Section from './Section.svelte';
	import GlassButton from './GlassButton.svelte';
	import { onMount } from 'svelte';
	import { magnetic } from '$lib/actions';
	import { CLUB_EMAIL } from '$lib/config';
	import { Mail, MapPin, ArrowRight } from 'lucide-svelte';

	let emailHref = $state('#');
	let emailDisplay = $state('');

	onMount(() => {
		emailHref = `mailto:${CLUB_EMAIL}`;
		emailDisplay = CLUB_EMAIL;
	});
</script>

<Section id="contact">
	{#snippet title()}Get in<br/> Touch.{/snippet}
	<div class="liquid-panel p-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
		<div class="flex flex-col gap-12">
			<p class="text-sm leading-relaxed max-w-sm" style="color: rgba(229,229,229,0.7);">
				Interested in sponsoring, mentoring, or requesting a demonstration? Reach out. We typically respond within 48 hours.
			</p>

			<div class="flex flex-col gap-6">
				<dl class="flex flex-col gap-2">
					<dt class="mono-label flex items-center gap-1.5"><Mail size={11} />Email</dt>
					<dd class="text-sm font-sans wrap-break-word" style="color: rgba(229,229,229,0.9);">{emailDisplay}</dd>
				</dl>
				<dl class="flex flex-col gap-2">
					<dt class="mono-label flex items-center gap-1.5"><MapPin size={11} />Location</dt>
					<dd class="text-sm font-sans" style="color: rgba(229,229,229,0.9);">Austin, Texas</dd>
				</dl>
			</div>
		</div>

		<div class="lg:justify-self-end flex items-end">
			<span use:magnetic={{ strength: 0.12 }}>
				<GlassButton variant="primary" size="lg" class="group px-12" href={emailHref}>
					<span class="flex items-center gap-4 py-2">
						<span class="text-base tracking-widest">Send Message</span>
						<ArrowRight size={16} />
					</span>
				</GlassButton>
			</span>
		</div>
	</div>
</Section>
