<script lang="ts">
	import { onMount } from 'svelte';
	import MagnifyinngGlass from './icons/MagnifyinngGlass.svelte';
	import { replaceState } from '$app/navigation';
	import { page } from '$app/stores';

	let query: string = '';

	let searchParams: URLSearchParams;

	onMount(() => {
		const url = new URL(window.location.href);
		searchParams = new URLSearchParams(url.search);
		query = searchParams.get('search') || '';
	});

	let debounceTimer: number;
	function updateSearch(value: string) {
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			if (!value.trim()) {
				query = '';
				replaceState($page.url.pathname, {
					search: undefined
				});
			} else {
				replaceState($page.url.pathname, {
					search: value
				});
			}
		}, 500);
	}
</script>

<form on:submit={(e) => e.preventDefault()} class="flex items-center gap-2">
	<div class="relative w-full">
		<input
			type="text"
			aria-label="Pesquise por nome, telefone, email"
			placeholder="Pesquisar"
			name="search"
			bind:value={query}
			on:input={(e) => updateSearch(e.currentTarget.value)}
			class="w-full rounded-md border border-[#D6C8E8] bg-white py-2 pl-2 pr-8 text-[#6B5A8A] focus:outline-none focus:ring-2 focus:ring-[#B084D5]"
		/>
		<MagnifyinngGlass
			className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B084D5] fill-[#B084D5] w-5 h-5"
		/>
	</div>
</form>
