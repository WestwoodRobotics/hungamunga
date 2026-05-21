<script lang="ts">
	import { cn } from '$lib/utils';
	import { Settings, ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { format, addMonths, subMonths, isSameDay, isToday, getDate, getDaysInMonth, startOfMonth } from 'date-fns';
	import { slide } from 'svelte/transition';

	interface Props {
		selectedDate?: Date;
		onDateSelect?: (date: Date) => void;
		class?: string;
	}

	let { selectedDate = $bindable(new Date()), onDateSelect, class: className }: Props = $props();

	let currentMonth = $state(new Date(selectedDate.getTime()));

	let monthDays = $derived.by(() => {
		const start = startOfMonth(currentMonth);
		const totalDays = getDaysInMonth(currentMonth);
		const days = [];
		for (let i = 0; i < totalDays; i++) {
			const date = new Date(start.getFullYear(), start.getMonth(), i + 1);
			days.push({
				date,
				isToday: isToday(date),
				isSelected: isSameDay(date, selectedDate)
			});
		}
		return days;
	});

	function handleDateClick(date: Date) {
		selectedDate = date;
		if (onDateSelect) onDateSelect(date);
	}

	function handlePrevMonth() {
		currentMonth = subMonths(currentMonth, 1);
	}

	function handleNextMonth() {
		currentMonth = addMonths(currentMonth, 1);
	}
</script>

<div
	class={cn(
		"w-full max-w-[360px] p-6 overflow-hidden liquid-panel",
		"text-foreground font-sans",
		className
	)}
>
	<div class="flex items-center justify-between border-b border-white/5 pb-4">
		<div class="flex items-center space-x-1 p-1 bg-black/20 rounded-[14px] border border-white/5">
			<button class="px-3 py-1 bg-white/10 rounded-[10px] text-xs font-medium tracking-wide text-white shadow-sm transition-colors">
				Monthly
			</button>
			<button class="px-3 py-1 text-xs font-medium tracking-wide text-white/50 hover:text-white transition-colors">
				Weekly
			</button>
		</div>
		<button class="p-2 text-white/40 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] rounded-full border border-white/5 transition-all">
			<Settings class="h-4 w-4" />
		</button>
	</div>

	<div class="my-6 flex items-center justify-between">
		<div class="relative h-10 w-48 overflow-hidden">
			{#key currentMonth}
				<p
					in:slide={{ axis: 'y', duration: 400, delay: 50 }}
					class="absolute text-3xl font-heading font-medium tracking-tight text-white/90"
				>
					{format(currentMonth, "MMMM")}
				</p>
			{/key}
		</div>
		<div class="flex items-center space-x-2">
			<button onclick={handlePrevMonth} class="p-1.5 rounded-full border border-white/10 text-white/50 bg-white/[0.02] hover:bg-white/[0.08] hover:text-white transition-all active:scale-95">
				<ChevronLeft class="h-4 w-4" />
			</button>
			<button onclick={handleNextMonth} class="p-1.5 rounded-full border border-white/10 text-white/50 bg-white/[0.02] hover:bg-white/[0.08] hover:text-white transition-all active:scale-95">
				<ChevronRight class="h-4 w-4" />
			</button>
		</div>
	</div>

	<div class="overflow-x-auto scrollbar-hide -mx-6 px-6">
		<div class="flex space-x-2 pb-4">
			{#each monthDays as day (format(day.date, "yyyy-MM-dd"))}
				<div class="flex flex-col items-center space-y-3 shrink-0 w-10">
					<span class="text-[10px] font-sans text-white/40 font-medium tracking-widest uppercase">
						{format(day.date, "E").charAt(0)}
					</span>
					<button
						onclick={() => handleDateClick(day.date)}
						class={cn(
							"flex h-10 w-10 items-center justify-center text-sm font-medium transition-all duration-300 border rounded-full active:scale-95",
							day.isSelected 
								? "bg-primary text-white border-primary-foreground/20 shadow-[0_2px_10px_rgba(74,89,77,0.4)]" 
								: "bg-transparent border-transparent hover:bg-white/[0.06] text-white/70 hover:text-white"
						)}
					>
						{getDate(day.date)}
					</button>
					<div class="h-1 w-full flex justify-center">
						{#if day.isToday && !day.isSelected}
							<span class="h-1 w-1 bg-white/40 rounded-full"></span>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
