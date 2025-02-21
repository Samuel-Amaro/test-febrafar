<script lang="ts">
	import { replaceState } from '$app/navigation';
	import { page } from '$app/stores';

	export let totalPages: number;
	export let currentPage: number;
</script>

{#if totalPages > 1}
	<div class="mt-4 flex flex-wrap items-center justify-center space-x-2">
		<button
			type="button"
			on:click={() => {
				replaceState($page.url.pathname, {
					search: $page.state.search,
					page: currentPage - 1
				});
			}}
			class="rounded bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
			disabled={currentPage <= 1}
		>
			Anterior
		</button>
		<span class="rounded bg-gray-700 px-4 py-2 text-base font-medium text-white">
			{currentPage}
		</span>
		<button
			type="button"
			on:click={() => {
				replaceState($page.url.pathname, {
					search: $page.state.search,
					page: currentPage + 1
				});
			}}
			class="rounded bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
			disabled={currentPage >= totalPages}
		>
			Próximo
		</button>
	</div>
{/if}
