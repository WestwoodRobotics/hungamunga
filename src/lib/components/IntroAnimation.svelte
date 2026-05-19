<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let { onComplete }: { onComplete?: () => void } = $props();

	let introEl: HTMLDivElement | undefined = $state();
	let crackCanvas: HTMLCanvasElement | undefined = $state();
	let showCracks = $state(false);
	let irisOut = $state(false);
	let done = $state(false);
	let vw = 0, vh = 0;

	function drawCracks(canvas: HTMLCanvasElement) {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		const dpr = window.devicePixelRatio || 1;
		canvas.width = vw * dpr;
		canvas.height = vh * dpr;
		ctx.scale(dpr, dpr);

		const ox = vw / 2;
		const oy = vh / 2;
		const reach = Math.hypot(vw, vh) * 0.6;

		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';

		const primaryCount = 8;
		const angleStep = (Math.PI * 2) / primaryCount;
		const baseAngle = Math.random() * Math.PI * 2;
		const primaryAngles: number[] = [];
		for (let i = 0; i < primaryCount; i++) {
			const angle = baseAngle + i * angleStep + (Math.random() - 0.5) * 0.18;
			primaryAngles.push(angle);
			const length = reach * (0.78 + Math.random() * 0.22);
			drawCrackBranch(ctx, ox, oy, angle, length, 4.2, 0.95, 0);
		}
		for (let i = 0; i < primaryCount; i++) {
			const angle = primaryAngles[i] + angleStep / 2 + (Math.random() - 0.5) * 0.15;
			const length = reach * (0.4 + Math.random() * 0.25);
			drawCrackBranch(ctx, ox, oy, angle, length, 2.4, 0.7, 0);
		}
	}

	function drawCrackBranch(
		ctx: CanvasRenderingContext2D,
		x: number,
		y: number,
		angle: number,
		length: number,
		baseWidth: number,
		baseAlpha: number,
		depth: number
	) {
		const segments = 6 + Math.floor(Math.random() * 3);
		let cx = x;
		let cy = y;
		let remainingLength = length;
		let currentAngle = angle;
		const points: [number, number][] = [[cx, cy]];
		const angles: number[] = [currentAngle];
		for (let s = 0; s < segments; s++) {
			const segLen = (remainingLength / (segments - s)) * (0.75 + Math.random() * 0.5);
			currentAngle += (Math.random() - 0.5) * 0.28;
			cx += Math.cos(currentAngle) * segLen;
			cy += Math.sin(currentAngle) * segLen;
			points.push([cx, cy]);
			angles.push(currentAngle);
			remainingLength -= segLen;
		}
		for (let s = 0; s < points.length - 1; s++) {
			const t = s / (points.length - 1);
			const w = baseWidth * (1 - t * 0.75);
			const a = baseAlpha * (1 - t * 0.4);
			ctx.beginPath();
			ctx.moveTo(points[s][0], points[s][1]);
			ctx.lineTo(points[s + 1][0], points[s + 1][1]);
			ctx.strokeStyle = `rgba(236, 230, 212, ${a * 0.55})`;
			ctx.lineWidth = w;
			ctx.stroke();
		}
		if (depth < 2 && baseWidth > 1.2) {
			const branches = depth === 0 ? 2 : 1;
			for (let b = 0; b < branches; b++) {
				const idx = Math.floor(points.length * (0.4 + Math.random() * 0.4));
				const [bx, by] = points[idx];
				const branchAngle =
					angles[idx] + (Math.random() > 0.5 ? 1 : -1) * (0.4 + Math.random() * 0.5);
				drawCrackBranch(
					ctx,
					bx,
					by,
					branchAngle,
					length * (0.35 + Math.random() * 0.2),
					baseWidth * 0.55,
					baseAlpha * 0.85,
					depth + 1
				);
			}
		}
	}

	const T_SHAKE = 1050;
	const T_SHAKE_OFF = 360;
	const T_IRIS = 1500;
	const T_DONE = T_IRIS + 1200;

	const timeouts: ReturnType<typeof setTimeout>[] = [];

	function skip() {
		if (done) return;
		timeouts.forEach(clearTimeout);
		timeouts.length = 0;
		irisOut = true;
		onComplete?.();
		timeouts.push(setTimeout(() => { done = true; }, 1200));
	}

	onMount(() => {
		vw = window.innerWidth;
		vh = window.innerHeight;
		timeouts.push(
			setTimeout(() => {
				introEl?.classList.add('screen-shake');
				if (crackCanvas) drawCracks(crackCanvas);
				showCracks = true;
				timeouts.push(setTimeout(() => introEl?.classList.remove('screen-shake'), T_SHAKE_OFF));
			}, T_SHAKE),
			setTimeout(() => { irisOut = true; onComplete?.(); }, T_IRIS),
			setTimeout(() => { done = true; }, T_DONE)
		);
	});

	onDestroy(() => { timeouts.forEach(clearTimeout); });
</script>

{#if !done}
	<div id="intro" bind:this={introEl} class:iris-out={irisOut}
		role="button" tabindex="0" aria-label="Skip intro"
		onclick={skip} onkeydown={(e) => (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') && skip()}>
		<img src="/favicon.png" alt="Hunga Munga logo" id="logo" />
		<canvas id="crack-canvas" bind:this={crackCanvas} class:visible={showCracks}></canvas>
		<span class="skip-hint">tap to skip</span>
	</div>
{/if}

<style>
	#intro {
		position: fixed;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		background: var(--bg);
		z-index: 100;
		clip-path: circle(150% at 50% 50%);
	}
	#intro.iris-out {
		will-change: clip-path, transform;
		animation: irisReveal 1.1s cubic-bezier(0.65, 0, 0.2, 1) forwards;
	}
	@keyframes irisReveal {
		0% { clip-path: circle(150% at 50% 50%); transform: scale(1); }
		100% { clip-path: circle(0% at 50% 50%); transform: scale(1.4); }
	}
	#logo {
		width: 140px;
		position: relative;
		z-index: 4;
		animation: logoDrop 1.05s linear forwards;
		transform-origin: center bottom;
		user-select: none;
		-webkit-user-select: none;
		pointer-events: none;
	}
	@keyframes logoDrop {
		0%   { transform: translateY(-110vh) scale(1, 1); opacity: 0;
			animation-timing-function: cubic-bezier(0.55, 0, 0.85, 0.2); }
		12%  { opacity: 1; }
		60%  { transform: translateY(0) scale(1, 1); opacity: 1;
			animation-timing-function: cubic-bezier(0.3, 0, 0.2, 1); }
		66%  { transform: translateY(0) scale(1.18, 0.78); }
		74%  { transform: translateY(-12px) scale(0.94, 1.08);
			animation-timing-function: cubic-bezier(0.5, 0, 0.6, 1); }
		82%  { transform: translateY(0) scale(1.06, 0.94); }
		90%  { transform: translateY(-3px) scale(0.98, 1.02); }
		100% { transform: translateY(0) scale(1, 1); }
	}
	@keyframes screenShake {
		0%,100% { transform: translate(0, 0); }
		10% { transform: translate(-9px, -8px); }
		20% { transform: translate(11px, 7px); }
		30% { transform: translate(-13px, 10px); }
		40% { transform: translate(13px, -9px); }
		50% { transform: translate(-7px, 13px); }
		60% { transform: translate(13px, 5px); }
		70% { transform: translate(-11px, -11px); }
		80% { transform: translate(9px, 13px); }
		90% { transform: translate(-11px, -7px); }
	}
	:global(.screen-shake) {
		animation: screenShake 0.32s ease-in-out !important;
	}
	.skip-hint {
		position: absolute;
		bottom: 28px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 11px;
		letter-spacing: 0.18em;
		color: rgba(236, 230, 212, 0.55);
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		pointer-events: none;
		z-index: 5;
	}
	#crack-canvas {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: 3;
		pointer-events: none;
		opacity: 0;
		clip-path: circle(0% at 50% 50%);
	}
	#crack-canvas.visible {
		opacity: 1;
		animation: crackPropagate 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}
	@keyframes crackPropagate {
		0% { clip-path: circle(0% at 50% 50%); }
		100% { clip-path: circle(95% at 50% 50%); }
	}
</style>
