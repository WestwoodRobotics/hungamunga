<script lang="ts">
	import { onMount } from 'svelte';

	let container: HTMLDivElement;

	onMount(async () => {
		const { gsap } = await import('gsap');
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);

		const lines = container.querySelectorAll<SVGGeometryElement>('[data-draw]');
		lines.forEach((line, i) => {
			const length = line.getTotalLength?.() ?? 1000;
			gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
			gsap.to(line, {
				strokeDashoffset: 0,
				ease: 'none',
				scrollTrigger: {
					trigger: document.body,
					start: `${i * 15}% top`,
					end: `${i * 15 + 25}% top`,
					scrub: 1
				}
			});
		});
	});
</script>

<div
	bind:this={container}
	class="fixed inset-0 pointer-events-none"
	style="z-index: var(--z-grid);"
	aria-hidden="true"
>
	<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
		<!-- horiz -->
		<line data-draw x1="0" y1="25%" x2="100%" y2="25%" stroke="rgba(255,255,255,0.07)" stroke-width="1" />
		<line data-draw x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.07)" stroke-width="1" />
		<line data-draw x1="0" y1="75%" x2="100%" y2="75%" stroke="rgba(255,255,255,0.07)" stroke-width="1" />
		<!-- vert -->
		<line data-draw x1="20%" y1="0" x2="20%" y2="100%" stroke="rgba(255,255,255,0.07)" stroke-width="1" />
		<line data-draw x1="80%" y1="0" x2="80%" y2="100%" stroke="rgba(255,255,255,0.07)" stroke-width="1" />
	</svg>
</div>