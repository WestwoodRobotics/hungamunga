export async function initLenis() {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
	const { default: Lenis } = await import('lenis');
	return new Lenis({ duration: 1.2, smoothWheel: true, touchMultiplier: 2 });
}
