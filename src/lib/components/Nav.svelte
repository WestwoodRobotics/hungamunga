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
		<img src="/favicon.png" alt="" />
		<div class="brand-text">
			<span class="brand-num">17113</span>
			<span class="brand-name">HUNGA <span class="serif-i">MUNGA</span></span>
		</div>
	</a>
	<div class="navlinks">
		{#each links as l}
			<a href={l.href}><span class="navnum">{l.n}</span> {l.label}</a>
		{/each}
	</div>
	<a class="navcta" href="#contact">Get in touch <span class="arr">-&gt;</span></a>
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
				<a href={l.href} onclick={close}><span class="navnum">{l.n}</span> {l.label}</a>
			{/each}
			<a class="drawer-cta" href="#contact" onclick={close}>Get in touch →</a>
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
		padding: 18px 28px;
		background: rgba(19, 19, 24, 0.72);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
	}
	.topnav::after {
		content: '';
		position: absolute;
		left: 28px;
		right: 28px;
		bottom: 0;
		height: 1px;
		background: var(--line);
	}
	.brand { display: inline-flex; align-items: center; gap: 12px; color: var(--ink); text-decoration: none; margin-right: auto; }
	.brand img { width: 28px; height: 28px; filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5)); }
	.brand-text { display: flex; flex-direction: column; line-height: 1; gap: 3px; }
	.brand-num { font-size: 12px; letter-spacing: 0.16em; color: var(--accent); }
	.brand-name { font-size: 13px; letter-spacing: 0.05em; color: var(--ink); }
	.navlinks { display: flex; gap: 28px; align-items: center; }
	.navlinks a {
		position: relative;
		color: var(--ink-dim);
		text-decoration: none;
		font-size: 12px;
		letter-spacing: 0.06em;
		padding: 6px 0;
		transition: color 0.15s ease;
	}
	.navlinks a::after {
		content: '';
		position: absolute;
		left: 0; right: 100%; bottom: 0;
		height: 1px; background: var(--accent);
		transition: right 0.25s ease;
	}
	.navlinks a:hover { color: #fff; }
	.navlinks a:hover::after { right: 0; }
	.navnum { color: var(--accent); margin-right: 6px; font-size: 10px; letter-spacing: 0.1em; }
	.navcta {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: var(--accent);
		text-decoration: none;
		font-size: 12px;
		letter-spacing: 0.06em;
		padding: 10px 16px;
		border-radius: 10px;
		background: var(--panel);
		box-shadow: var(--shadow-raised-sm);
		transition: box-shadow 0.18s ease, transform 0.18s ease;
	}
	.navcta:hover { transform: translateY(1px); box-shadow: var(--shadow-inset); }

	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 36px;
		height: 36px;
		padding: 6px;
		background: var(--panel);
		border: none;
		border-radius: 8px;
		box-shadow: var(--shadow-raised-sm);
		cursor: pointer;
	}
	.hamburger span {
		display: block;
		height: 1.5px;
		background: var(--ink-dim);
		border-radius: 2px;
		transition: transform 0.2s ease, opacity 0.2s ease;
	}
	.hamburger span.open:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
	.hamburger span.open:nth-child(2) { opacity: 0; }
	.hamburger span.open:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

	.drawer-backdrop {
		position: fixed;
		inset: 0;
		z-index: 9;
		background: rgba(0,0,0,0.5);
		backdrop-filter: blur(2px);
	}
	.drawer {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 11;
		width: 240px;
		background: var(--bg);
		border-left: 1px solid var(--line);
		padding: 80px 24px 32px;
		display: flex;
		flex-direction: column;
		animation: drawerIn 0.22s cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}
	@keyframes drawerIn {
		from { transform: translateX(100%); }
		to { transform: translateX(0); }
	}
	.drawer-links { display: flex; flex-direction: column; gap: 4px; }
	.drawer-links a {
		color: var(--ink-dim);
		text-decoration: none;
		font-size: 14px;
		letter-spacing: 0.06em;
		padding: 12px 8px;
		border-radius: 8px;
		transition: background 0.15s ease, color 0.15s ease;
	}
	.drawer-links a:hover { background: var(--panel); color: #fff; }
	.drawer-cta {
		margin-top: 16px;
		color: var(--accent) !important;
		border: 1px solid var(--line);
		text-align: center;
	}

	@media (max-width: 720px) {
		.navlinks, .navcta { display: none; }
		.hamburger { display: flex; }
	}
</style>
