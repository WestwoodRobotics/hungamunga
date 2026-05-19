<script lang="ts">
	const links = [
		{ n: '01', label: 'Robot', href: '#robot' },
		{ n: '02', label: 'Season', href: '#season' },
		{ n: '03', label: 'Outreach', href: '#outreach' },
		{ n: '04', label: 'Results', href: '#results' },
		{ n: '05', label: 'Sponsors', href: '#sponsors' }
	];

	let open = $state(false);
	function close() { open = false; }
</script>

<nav class="topnav">
	<a class="brand" href="#top" aria-label="Team 17113 home">
		<span class="brand-num">17113</span>
		<span class="brand-name">Hunga Munga</span>
	</a>
	<div class="navlinks">
		{#each links as l}
			<a href={l.href}><span class="navnum">{l.n}</span><span>{l.label}</span></a>
		{/each}
	</div>
	<a class="navcta" href="#contact">Contact <span class="arr">→</span></a>
	<button class="hamburger" aria-label="Toggle menu" aria-expanded={open} onclick={() => (open = !open)}>
		<span class:open></span>
		<span class:open></span>
		<span class:open></span>
	</button>
</nav>

{#if open}
	<div class="drawer-backdrop" onclick={close} aria-hidden="true"></div>
	<div class="drawer" role="dialog" aria-label="Navigation">
		<div class="drawer-links">
			{#each links as l}
				<a href={l.href} onclick={close}><span class="navnum">{l.n}</span>{l.label}</a>
			{/each}
			<a class="drawer-cta" href="#contact" onclick={close}>Contact →</a>
		</div>
	</div>
{/if}

<style>
	.topnav {
		position: sticky;
		top: 0;
		z-index: 10;
		display: flex;
		align-items: center;
		gap: 32px;
		padding: 18px 56px;
		background: rgba(28, 30, 34, 0.55);
		backdrop-filter: var(--glass-blur);
		-webkit-backdrop-filter: var(--glass-blur);
		border-bottom: 1px solid var(--glass-border);
		box-shadow: 0 1px 0 rgba(255,255,255,0.05) inset;
	}
	.brand { display: inline-flex; align-items: baseline; gap: 12px; color: var(--ink); text-decoration: none; margin-right: auto; }
	.brand-num {
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		font-size: 28px;
		color: var(--accent);
		line-height: 1;
	}
	.brand-name {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 11px;
		font-weight: 400;
		letter-spacing: 0.06em;
		color: var(--ink-dim);
	}
	.navlinks { display: flex; gap: 28px; align-items: center; }
	.navlinks a {
		position: relative;
		display: inline-flex;
		align-items: baseline;
		gap: 6px;
		color: var(--ink-2);
		text-decoration: none;
		font-size: 13px;
		padding: 6px 0;
		transition: color var(--t-fast);
	}
	.navlinks a::after {
		content: '';
		position: absolute;
		left: 0; right: 100%; bottom: 0;
		height: 1px; background: var(--accent-2);
		transition: right var(--t-base);
	}
	.navlinks a:hover { color: var(--ink); }
	.navlinks a:hover::after { right: 0; }
	.navnum {
		font-family: 'Instrument Serif', Georgia, serif;
		font-style: italic;
		font-size: 13px;
		color: var(--ink-dim);
	}
	.navcta {
		text-decoration: none;
		font-size: 13px;
		padding: 10px 18px;
		background: var(--glass-bg-2);
		color: var(--ink);
		border: 1px solid var(--glass-border);
		backdrop-filter: var(--glass-blur);
		-webkit-backdrop-filter: var(--glass-blur);
		box-shadow: var(--glass-shadow);
		border-radius: 14px;
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 500;
		transition: background var(--t-fast), border-color var(--t-fast);
	}
	.navcta :global(.arr) { color: var(--accent); margin-left: 4px; }
	.navcta:hover { background: var(--accent); border-color: var(--accent); }
	.navcta:hover :global(.arr) { color: var(--bg); }

	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 36px;
		height: 36px;
		padding: 6px;
		background: transparent;
		border: 1px solid var(--ink);
		cursor: pointer;
	}
	.hamburger span {
		display: block;
		height: 1.5px;
		background: var(--ink);
		transition: transform var(--t-fast), opacity var(--t-fast);
	}
	.hamburger span.open:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
	.hamburger span.open:nth-child(2) { opacity: 0; }
	.hamburger span.open:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

	.drawer-backdrop {
		position: fixed; inset: 0; z-index: 9;
		background: rgba(10, 16, 26, 0.55);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
	}
	.drawer {
		position: fixed;
		top: 0; right: 0; bottom: 0;
		z-index: 11;
		width: 260px;
		background: rgba(35, 38, 44, 0.85);
		backdrop-filter: var(--glass-blur);
		-webkit-backdrop-filter: var(--glass-blur);
		border-left: 1px solid var(--glass-border);
		padding: 80px 28px 32px;
		animation: drawerIn 0.22s var(--ease-out-expo) forwards;
	}
	@keyframes drawerIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
	.drawer-links { display: flex; flex-direction: column; gap: 2px; }
	.drawer-links a {
		display: flex; gap: 14px; align-items: baseline;
		color: var(--ink); text-decoration: none;
		font-size: 16px; padding: 14px 0;
		border-bottom: 1px solid var(--line);
	}
	.drawer-cta {
		margin-top: 20px;
		background: var(--accent);
		color: var(--bg) !important;
		padding: 14px 18px !important;
		justify-content: center;
		border-bottom: none !important;
		border-radius: 14px;
	}

	@media (max-width: 760px) {
		.topnav { padding: 16px 24px; }
		.navlinks, .navcta { display: none; }
		.hamburger { display: flex; }
	}
</style>
