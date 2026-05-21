<script lang="ts">
	import { onMount } from 'svelte';
	import GlassButton from './GlassButton.svelte';
	import { magnetic } from '$lib/actions';

	let section: HTMLElement;
	let line1: HTMLSpanElement;
	let line2: HTMLSpanElement;
	let subtitleRef: HTMLParagraphElement;

	onMount(async () => {
		const { gsap } = await import('gsap');
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);

		const base = { trigger: section, start: 'top top', end: 'bottom top', scrub: true };
		gsap.to(line1, { yPercent: -35, ease: 'none', scrollTrigger: base });
		gsap.to(line2, { yPercent: -20, ease: 'none', scrollTrigger: base });
		gsap.to(subtitleRef, { yPercent: -8, ease: 'none', scrollTrigger: base });
	});
</script>

<section
	bind:this={section}
	id="hero"
	class="relative min-h-screen flex items-start overflow-hidden border-b"
	style="border-color: var(--color-rule); padding-left: max(4vw, 2rem); padding-top: clamp(6rem, 12vh, 9rem); z-index: var(--z-glass);"
>
	<!-- robot image -->
	<div
		class="absolute pointer-events-none select-none"
		style="
			height: 90vh;
			width: auto;
			right: -5%;
			bottom: 0;
			-webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0) 90%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%);
			mask-image: linear-gradient(to right, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0) 90%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%);
			-webkit-mask-composite: intersect;
			mask-composite: intersect;
		"
	>
		<img
			src="/favicon.png"
			alt=""
			aria-hidden="true"
			width="1200"
			height="1600"
			fetchpriority="low"
			style="height: 100%; width: auto; display: block; opacity: 0.08; mix-blend-mode: screen; filter: saturate(0) brightness(2);"
		/>
	</div>

	<div class="relative flex flex-col gap-10 pb-24" style="z-index: var(--z-glass);">
		<h1 style="font-family: var(--font-heading);">
			<span
				bind:this={line1}
				class="block text-white"
				style="font-size: var(--text-hero); line-height: 0.95; letter-spacing: -0.04em;"
			>Engineering</span>
			<span
				bind:this={line2}
				class="block text-white"
				style="font-size: var(--text-hero-sub); line-height: 1.1; letter-spacing: -0.04em;"
			><em>in</em> Motion.</span>
		</h1>

		<p
			bind:this={subtitleRef}
			class="text-sm leading-relaxed"
			style="max-width: 36ch; color: rgba(229,229,229,0.7);"
		>
			FTC Team 17113. Seven seasons, one makerspace, fifteen members.

		<div class="flex gap-4 flex-wrap">
			<span use:magnetic>
				<GlassButton variant="primary" href="#robot">The Build</GlassButton>
			</span>
			<span use:magnetic>
				<GlassButton variant="default" href="#season">Season</GlassButton>
			</span>
		</div>
	</div>

	<div
		class="absolute mono-label flex gap-6 flex-wrap"
		style="bottom: 2rem; left: max(4vw, 2rem); color: rgba(229,229,229,0.4);"
	>
		<span>Location / Austin, TX</span>
		<span>—</span>
		<span>League / FiT Central GEMS</span>
		<span>—</span>
		<span style="color: var(--color-primary);">17113</span>
	</div>
</section>