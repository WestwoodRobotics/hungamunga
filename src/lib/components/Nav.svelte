<script lang="ts">
	const links = [
		{ n: '01', label: 'Robot', href: '#robot' },
		{ n: '02', label: 'Season', href: '#season' },
		{ n: '03', label: 'Outreach', href: '#outreach' },
		{ n: '04', label: 'Sponsors', href: '#sponsors' }
	];
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
</nav>

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

	@media (max-width: 720px) {
		.navlinks { display: none; }
	}
</style>
