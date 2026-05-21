<script lang="ts">
	import { SPEC_VERSION } from '../config';
</script>

<footer class="border-t border-white/5 bg-background pt-24 pb-12 relative overflow-hidden">
	<div class="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-baseline relative z-10">
		<div class="flex items-baseline gap-4">
			<span class="font-sans text-sm tracking-widest uppercase font-medium text-primary">17113</span>
			<span class="text-[11px] font-sans font-medium tracking-widest uppercase text-white/40">Hunga Munga / Westwood</span>
		</div>
		
		<div class="flex items-center md:justify-center gap-6 text-[11px] font-sans uppercase font-medium tracking-widest text-white/40">
			<span>2026</span>
			<span class="w-1 h-1 bg-white/10 rounded-full"></span>
			<a href="https://www.firstinspires.org/robotics/ftc" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors border-b border-transparent hover:border-white/30 pb-1">FIRST Tech Challenge</a>
		</div>
		
		<div class="flex md:justify-end text-[11px] font-sans font-medium text-white/30 tracking-widest uppercase">
			SYS.{SPEC_VERSION}
		</div>
	</div>
</footer>
