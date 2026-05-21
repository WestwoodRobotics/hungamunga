<script lang="ts">
	import { onMount } from 'svelte';
	import { Menu, X } from 'lucide-svelte';
	import { magnetic } from '$lib/actions';

	let scrolled = $state(false);
	let mobileMenuOpen = $state(false);
	let menuEl = $state<HTMLDivElement | undefined>(undefined);

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

	async function animateMenu(open: boolean) {
		const { gsap } = await import('gsap');
		if (open) {
			gsap.fromTo(menuEl, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.35, ease: 'back.out(1.7)' });
		} else {
			gsap.to(menuEl, { opacity: 0, y: -8, duration: 0.2, ease: 'power2.in', onComplete: () => { mobileMenuOpen = false; } });
		}
	}

	function openMenu() { mobileMenuOpen = true; }
	function closeMenu() { animateMenu(false); }
	function toggleMenu() { mobileMenuOpen ? closeMenu() : openMenu(); }
</script>

<div class="fixed top-0 w-full px-3 md:px-6 transition-all duration-500 {scrolled ? 'pt-3 md:pt-4' : 'pt-4 md:pt-8'} pointer-events-none" style="z-index: var(--z-nav);">
	<nav class="max-w-4xl mx-auto liquid-panel liquid-panel-blur flex items-center justify-between px-6 py-3 pointer-events-auto shadow-2xl relative" style="background: rgba(17,17,17,0.6); border-color: rgba(255,255,255,0.1);">
		<a href="/" class="flex items-center gap-3 group shrink-0">
			<img src="/favicon.png" alt="Hunga Munga logo" class="h-6 w-6 shrink-0 object-contain" />
			<span class="mono-label group-hover:text-white transition-colors" style="color: rgba(229,229,229,0.9);">17113</span>
			<span class="font-heading text-sm font-light tracking-wide text-white/70 hidden sm:block group-hover:text-white transition-colors">Hunga Munga</span>
		</a>

		<div class="hidden md:flex items-center gap-6">
			<span use:magnetic><a href="#robot" class="text-[11px] font-sans tracking-widest uppercase text-white/70 hover:text-white transition-colors font-medium">The Build</a></span>
			<span use:magnetic><a href="#season" class="text-[11px] font-sans tracking-widest uppercase text-white/70 hover:text-white transition-colors font-medium">Season</a></span>
			<span use:magnetic><a href="#team" class="text-[11px] font-sans tracking-widest uppercase text-white/70 hover:text-white transition-colors font-medium">Roster</a></span>
			<span use:magnetic><a href="#sponsors" class="text-[11px] font-sans tracking-widest uppercase text-white/70 hover:text-white transition-colors font-medium">Sponsors</a></span>
			<span use:magnetic>
				<a href="#contact" class="text-[11px] font-sans tracking-widest uppercase text-white bg-white/10 hover:bg-white/20 px-4 py-2 transition-none font-medium border border-white/5 ml-2" style="transition: none;">
					Contact
				</a>
			</span>
		</div>

		<button
			class="md:hidden text-white p-1"
			onclick={toggleMenu}
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
		<div bind:this={menuEl} class="absolute top-full left-6 right-6 mt-4 liquid-panel liquid-panel-blur p-6 flex flex-col gap-6 md:hidden pointer-events-auto">
			<a href="#robot" onclick={closeMenu} class="text-sm font-sans tracking-widest uppercase text-white/80 hover:text-white font-medium">The Build</a>
			<a href="#season" onclick={closeMenu} class="text-sm font-sans tracking-widest uppercase text-white/80 hover:text-white font-medium">Season</a>
			<a href="#team" onclick={closeMenu} class="text-sm font-sans tracking-widest uppercase text-white/80 hover:text-white font-medium">Roster</a>
			<a href="#sponsors" onclick={closeMenu} class="text-sm font-sans tracking-widest uppercase text-white/80 hover:text-white font-medium">Sponsors</a>
			<a href="#contact" onclick={closeMenu} class="text-sm font-sans tracking-widest uppercase text-primary font-medium mt-2">Contact Us</a>
		</div>
	{/if}
</div>