export async function initLenis() {
	const { default: Lenis } = await import('lenis');
	return new Lenis({ duration: 1.2, smoothWheel: true, touchMultiplier: 2 });
}
