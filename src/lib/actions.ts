const prefersReducedMotion =
	typeof window !== 'undefined'
		? window.matchMedia('(prefers-reduced-motion: reduce)').matches
		: false;

export function reveal(node: HTMLElement) {
	if (prefersReducedMotion) {
		return;
	}

	let cleanup: (() => void) | undefined;

	import('gsap').then(({ gsap }) =>
		import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
			gsap.registerPlugin(ScrollTrigger);
			gsap.set(node, { opacity: 0, y: 40 });
			const t = ScrollTrigger.create({
				trigger: node,
				start: 'top 88%',
				once: true,
				onEnter: () => gsap.to(node, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
			});
			cleanup = () => t.kill();
		})
	);

	return {
		destroy() {
			cleanup?.();
		}
	};
}

export function magnetic(
	node: HTMLElement,
	{ strength = 0.18, radius = 50 }: { strength?: number; radius?: number } = {}
) {
	if (prefersReducedMotion) return;

	let xTo: ((v: number) => void) | undefined;
	let yTo: ((v: number) => void) | undefined;

	import('gsap').then(({ gsap }) => {
		xTo = gsap.quickTo(node, 'x', { duration: 0.6, ease: 'power3' }) as (v: number) => void;
		yTo = gsap.quickTo(node, 'y', { duration: 0.6, ease: 'power3' }) as (v: number) => void;
	});

	function onMouseMove(e: MouseEvent) {
		if (!xTo || !yTo) return;
		const rect = node.getBoundingClientRect();
		const cx = rect.left + rect.width / 2;
		const cy = rect.top + rect.height / 2;
		const dx = e.clientX - cx;
		const dy = e.clientY - cy;
		const dist = Math.sqrt(dx * dx + dy * dy);
		if (dist < radius) {
			xTo(dx * strength);
			yTo(dy * strength);
		} else {
			xTo(0);
			yTo(0);
		}
	}

	function onMouseLeave() {
		xTo?.(0);
		yTo?.(0);
	}

	window.addEventListener('mousemove', onMouseMove);
	node.addEventListener('mouseleave', onMouseLeave);

	return {
		destroy() {
			window.removeEventListener('mousemove', onMouseMove);
			node.removeEventListener('mouseleave', onMouseLeave);
		}
	};
}