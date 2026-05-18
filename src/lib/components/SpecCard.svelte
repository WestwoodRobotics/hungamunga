<script lang="ts">
	import Brackets from './Brackets.svelte';
	import { SPEC_VERSION } from '$lib/config';

	const specs = [
		['NAME', 'Hunga Munga'],
		['NUMBER', '17113'],
		['PROGRAM', 'Westwood Robotics'],
		['FOUNDED', '2019'],
		['BASE', 'Austin, TX']
	];
</script>

<aside class="spec-card">
	<Brackets />
	<div class="spec-head">
		<span>TEAM_SPEC</span><span class="muted">{SPEC_VERSION}</span>
	</div>
	<dl class="spec">
		{#each specs as [k, v]}
			<div><dt>{k}</dt><dd>{v}</dd></div>
		{/each}
		<div>
			<dt>STATUS</dt>
			<dd><span class="dot"></span> Active · Season 25/26</dd>
		</div>
	</dl>
</aside>

<style>
	.spec-card {
		position: relative;
		background: var(--panel);
		padding: 24px;
		border-radius: 14px;
		box-shadow: var(--shadow-raised);
	}
	.spec-head {
		display: flex;
		justify-content: space-between;
		font-size: 10.5px;
		letter-spacing: 0.2em;
		color: var(--muted);
		padding-bottom: 12px;
		margin-bottom: 16px;
		text-transform: uppercase;
		border-bottom: 1px dashed var(--line);
	}
	.spec { margin: 0; display: grid; gap: 10px; }
	.spec > div { display: grid; grid-template-columns: 92px 1fr; gap: 14px; align-items: baseline; }
	.spec dt { color: var(--muted); letter-spacing: 0.12em; font-size: 10.5px; }
	.spec dd { margin: 0; color: #fff; font-size: 12.5px; }
	.dot {
		display: inline-block; width: 6px; height: 6px; border-radius: 50%;
		background: #4ade80;
		box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.15);
		margin-right: 8px; vertical-align: middle;
	}
</style>
