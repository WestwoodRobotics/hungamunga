<script lang="ts">
	import { onMount } from 'svelte';
	import { Menu, X } from 'lucide-svelte';

	let scrolled = $state(false);
	let mobileMenuOpen = $state(false);

	onMount(() => {
		let ticking = false;
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					scrolled = window.scrollY > 20;
					ticking = false;
				});
				ticking = true;
			}
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div class="fixed top-0 w-full z-nav px-6 transition-all duration-500 {scrolled ? 'pt-4' : 'pt-8'} pointer-events-none">
	<nav class="max-w-4xl mx-auto liquid-panel liquid-panel-blur grid grid-cols-3 items-center px-6 py-3 pointer-events-auto shadow-2xl relative">
		<a href="/" class="flex items-baseline gap-3 group">
			<span class="font-sans text-sm tracking-widest text-white/90 font-medium group-hover:text-white transition-colors">17113</span>
			<span class="font-heading text-sm font-light tracking-wide text-white/70 hidden sm:block group-hover:text-white transition-colors">Hunga Munga</span>
		</a>

		<div class="hidden md:flex items-center justify-center space-x-8">
			<a href="#robot" class="text-[11px] font-sans tracking-widest uppercase text-white/70 hover:text-white transition-colors font-medium">The Build</a>
			<a href="#season" class="text-[11px] font-sans tracking-widest uppercase text-white/70 hover:text-white transition-colors font-medium">Season</a>
			<a href="#team" class="text-[11px] font-sans tracking-widest uppercase text-white/70 hover:text-white transition-colors font-medium">Roster</a>
			<a href="#sponsors" class="text-[11px] font-sans tracking-widest uppercase text-white/70 hover:text-white transition-colors font-medium">Sponsors</a>
		</div>

		<div class="hidden md:flex justify-end">
			<a href="#contact" class="text-[11px] font-sans tracking-widest uppercase text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors font-medium border border-white/5">
				Contact
			</a>
		</div>

		<button
			class="md:hidden text-white p-1 col-start-3 justify-self-end"
			onclick={() => mobileMenuOpen = !mobileMenuOpen}
			aria-label="Toggle menu"
		>
			{#if mobileMenuOpen}
				<X size={20} />
			{:else}
				<Menu size={20} />
			{/if}
		</button>
	</nav>

	{#if mobileMenuOpen}
		<div class="absolute top-full left-6 right-6 mt-4 liquid-panel liquid-panel-blur p-6 flex flex-col gap-6 md:hidden pointer-events-auto">
			<a href="#robot" onclick={() => mobileMenuOpen = false} class="text-sm font-sans tracking-widest uppercase text-white/80 hover:text-white font-medium">The Build</a>
			<a href="#season" onclick={() => mobileMenuOpen = false} class="text-sm font-sans tracking-widest uppercase text-white/80 hover:text-white font-medium">Season</a>
			<a href="#team" onclick={() => mobileMenuOpen = false} class="text-sm font-sans tracking-widest uppercase text-white/80 hover:text-white font-medium">Roster</a>
			<a href="#sponsors" onclick={() => mobileMenuOpen = false} class="text-sm font-sans tracking-widest uppercase text-white/80 hover:text-white font-medium">Sponsors</a>
			<a href="#contact" onclick={() => mobileMenuOpen = false} class="text-sm font-sans tracking-widest uppercase text-primary font-medium mt-2">Contact Us</a>
		</div>
	{/if}
</div>
