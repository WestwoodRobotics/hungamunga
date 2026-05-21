<script lang="ts">
	import GlassButton from './GlassButton.svelte';
</script>

<section class="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden border-b border-white/5">
	<div
		class="absolute pointer-events-none select-none"
		style="
			height: 92vh;
			width: auto;
			right: -2vw;
			top: 50%;
			transform: translateY(-46%);
			-webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 95%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%);
			mask-image: linear-gradient(to right, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 95%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%);
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
			style="
				height: 100%;
				width: auto;
				display: block;
				opacity: 0.09;
				mix-blend-mode: screen;
				filter: saturate(0) brightness(2);
			"
		/>
	</div>

	
	<div class="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
		
		<div class="lg:col-span-3 hidden lg:flex flex-col justify-between h-full py-12 border-l border-white/5 pl-8">
			<div class="flex flex-col gap-2">
				<span class="text-[10px] font-sans uppercase tracking-[0.2em] text-white/40">Location</span>
				<span class="text-xs font-sans uppercase tracking-widest text-white/80 font-medium">Austin, TX</span>
			</div>
			
			<div class="flex flex-col gap-2 mt-auto">
				<span class="text-[10px] font-sans uppercase tracking-[0.2em] text-white/40">League</span>
				<span class="text-xs font-sans uppercase tracking-widest text-white/80 font-medium">FiT Central GEMS</span>
			</div>
		</div>

		<div class="lg:col-span-9 flex flex-col items-start relative">
			
			<h1 class="text-6xl md:text-[7rem] xl:text-[9rem] font-heading font-light tracking-tighter text-white leading-[0.9] mb-12 relative z-10">
				Engineering <br />
				<span class="text-white/50 italic tracking-normal">in</span> Motion.
			</h1>
			
			<div class="flex flex-col sm:flex-row items-start sm:items-center gap-10">
				<p class="text-sm text-white/70 font-sans leading-relaxed text-justify max-w-sm relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-primary/50">
					Seven seasons of building, competing, and growing. We are a student-led robotics team focused on technical excellence and community impact.
				</p>
				
				<div class="flex gap-4">
					<GlassButton variant="primary" href="#robot">The Build</GlassButton>
					<GlassButton variant="default" href="#season">Season</GlassButton>
				</div>
			</div>
		</div>
		
	</div>
</section>
