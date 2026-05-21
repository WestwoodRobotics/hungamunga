<script lang="ts">
	import { onMount } from 'svelte';

	let { onComplete }: { onComplete?: () => void } = $props();

	let done = $state(false);
	let step = $state(0);

	onMount(() => {
		if (sessionStorage.getItem('introPlayed')) {
			done = true;
			onComplete?.();
			return;
		}

		const seq = [
			setTimeout(() => { step = 1; }, 500),
			setTimeout(() => { step = 2; }, 2000),
			setTimeout(() => { step = 3; }, 2700),
			setTimeout(() => {
				done = true;
				sessionStorage.setItem('introPlayed', 'true');
				onComplete?.();
			}, 3500)
		];

		return () => seq.forEach(clearTimeout);
	});
</script>

{#if !done}
	<div 
		class="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden transition-opacity duration-1000 {step === 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'}"
	>

		
		<div class="relative z-10 flex flex-col items-center">
			<div class="overflow-hidden">
				<span 
					class="block text-primary text-[10px] uppercase tracking-[0.4em] mb-4 font-sans font-medium transition-all duration-1000 {step >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}"
				>
					Loading...
				</span>
			</div>
			
			<h1 
				class="text-6xl md:text-9xl font-heading font-light tracking-tighter text-white/90 transition-all duration-[1000ms] ease-out
				{step === 0 ? 'blur-xl opacity-0 scale-95' : step === 1 ? 'blur-0 opacity-100 scale-100' : 'blur-xl opacity-0 scale-105'}"
			>
				17113
			</h1>
			
			<div class="overflow-hidden mt-6 flex flex-col items-center gap-4">
				<div 
					class="w-px h-16 bg-white/20 origin-top transition-transform duration-1000 delay-300 {step >= 1 ? 'scale-y-100' : 'scale-y-0'}"
				></div>
			</div>
		</div>
		
		<button 
			class="absolute bottom-8 right-8 text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors"
			onclick={() => {
				done = true;
				sessionStorage.setItem('introPlayed', 'true');
				onComplete?.();
			}}
		>
			Skip Intro
		</button>
		

	</div>
{/if}
