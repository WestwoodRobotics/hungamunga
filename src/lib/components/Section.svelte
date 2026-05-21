<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		id,
		marker,
		kicker,
		title,
		variant = 'default',
		children,
	}: {
		id: string;
		marker: string;
		kicker: string;
		title: Snippet;
		variant?: 'default' | 'wide';
		children: Snippet;
	} = $props();
</script>

{#if variant === 'wide'}
<section {id} class="relative py-32 border-t border-white/5 isolate">
	<div class="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-16">
		<div class="flex flex-col sm:flex-row sm:items-end gap-6 pb-12 border-b border-white/5">
			<div class="flex items-center gap-6 flex-1">
				<span class="font-sans text-xs tracking-widest text-primary font-medium">{marker}</span>
				<div class="h-px bg-white/10 flex-1"></div>
				<span class="font-sans text-[10px] tracking-widest uppercase text-white/40 font-medium">{kicker}</span>
			</div>
			<h2 class="text-4xl md:text-5xl font-heading font-light tracking-tight text-white leading-[1.05]">
				{@render title()}
			</h2>
		</div>
		<div class="w-full">
			{@render children()}
		</div>
	</div>
</section>
{:else}
<section {id} class="relative py-32 border-t border-white/5 isolate">
	<div class="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-16">

		<div class="md:w-1/3 flex flex-col justify-start pt-4">
			<div class="sticky top-32 flex items-center gap-6">
				<span class="font-sans text-xs tracking-widest text-primary font-medium">{marker}</span>
				<div class="h-px bg-white/10 flex-1"></div>
				<span class="font-sans text-[10px] tracking-widest uppercase text-white/40 font-medium">{kicker}</span>
			</div>
		</div>

		<div class="md:w-2/3 flex flex-col gap-12">
			<h2 class="text-4xl md:text-6xl font-heading font-light tracking-tight text-white leading-[1.1] max-w-2xl">
				{@render title()}
			</h2>

			<div class="w-full">
				{@render children()}
			</div>
		</div>
	</div>
</section>
{/if}
