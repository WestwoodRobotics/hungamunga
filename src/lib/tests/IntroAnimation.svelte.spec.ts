import { render, cleanup } from '@testing-library/svelte';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { flushSync } from 'svelte';
import IntroAnimation from '../components/IntroAnimation.svelte';

const mockCtx = {
	scale: vi.fn(), beginPath: vi.fn(), moveTo: vi.fn(),
	lineTo: vi.fn(), stroke: vi.fn(),
};
HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue(mockCtx) as never;

describe('IntroAnimation', () => {
	beforeEach(() => { vi.useFakeTimers(); });
	afterEach(() => { flushSync(); cleanup(); vi.useRealTimers(); });

	it('does not call onComplete before T_IRIS', async () => {
		const onComplete = vi.fn();
		render(IntroAnimation, { onComplete });
		await vi.advanceTimersByTimeAsync(1499);
		expect(onComplete).not.toHaveBeenCalled();
	});

	it('calls onComplete at T_IRIS and applies iris-out simultaneously', async () => {
		const onComplete = vi.fn();
		render(IntroAnimation, { onComplete });
		await vi.advanceTimersByTimeAsync(1050);
		await vi.advanceTimersByTimeAsync(450);
		expect(onComplete).toHaveBeenCalledOnce();
		expect(document.querySelector('#intro')).toHaveClass('iris-out');
	});

	it('intro is in DOM on mount and removed after T_DONE', async () => {
		render(IntroAnimation, {});
		expect(document.querySelector('#intro')).toBeInTheDocument();
		await vi.advanceTimersByTimeAsync(1050);
		await vi.advanceTimersByTimeAsync(450);
		await vi.advanceTimersByTimeAsync(1200);
		expect(document.querySelector('#intro')).not.toBeInTheDocument();
	});

	it('clears all timeouts on destroy', () => {
		const spy = vi.spyOn(global, 'clearTimeout');
		const { unmount } = render(IntroAnimation, {});
		unmount();
		expect(spy).toHaveBeenCalled();
	});
});
