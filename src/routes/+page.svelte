<script lang="ts">
	import { page } from '$app/stores';
	import Search from '$lib/Search.svelte';
	import type { DataType } from '../types';
	import { replaceState } from '$app/navigation';
	import Skeleton from '$lib/Skeleton.svelte';
	import Pagination from '$lib/Pagination.svelte';

	function getUrl(search?: string, page?: number) {
		const baseUrl = '/api/datas';

		if (search) {
			return `${baseUrl}?search=${search}`;
		} else if (page) {
			return `${baseUrl}?page=${page.toString()}`;
		} else {
			return baseUrl;
		}
	}

	async function getDatas(search?: string, page?: number) {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		const response = await fetch(getUrl(search, page));
		const datas: {
			data: DataType[];
			totalItems: number;
			totalPages: number;
			currentPage: number;
		} = await response.json();
		return datas;
	}
</script>

<article class="mx-auto flex max-w-[1110px] flex-col gap-6 p-8">
	<header>
		<div class="flex items-center justify-between">
			<h1 class="text-2xl text-[#6B5A8A]">Contatos</h1>
			<div>
				<Search />
			</div>
		</div>
	</header>
	{#await getDatas($page.state.search, $page.state.page)}
		<Skeleton />
	{:then data}
		<p class="mt-1 text-sm text-gray-500">
			Exibindo {data.data.length} do total de {data.totalItems} registros encontrados
		</p>
		{#if data.data.length > 0}
			<div class="mt-4 overflow-hidden rounded-lg bg-white shadow-md">
				<table class="w-full border-collapse overflow-auto">
					<thead>
						<tr class="bg-[#F7F3FB] text-[#6B5A8A]">
							<th class="p-3 text-left text-sm font-semibold">Nome</th>
							<th class="p-3 text-left text-sm font-semibold">Telefone</th>
							<th class="p-3 text-left text-sm font-semibold">Cargo</th>
							<th class="p-3 text-left text-sm font-semibold">Departamento</th>
							<th class="p-3 text-left text-sm font-semibold">Último Acesso</th>
						</tr>
					</thead>
					<tbody>
						{#each data.data as item, index}
							<tr class="{index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} text-gray-700">
								<td class="p-3 text-sm">
									<p class="font-semibold text-[#6B5A8A]">{item.name}</p>
									<p class="text-xs text-gray-500">{item.email}</p>
								</td>
								<td class="p-3 text-sm">{item.phone}</td>
								<td class="p-3 text-sm">{item.cargos.join('; ')}</td>
								<td class="p-3 text-sm">{item.departamentos.join('; ')}</td>
								<td class="p-3 text-sm">{item.ultimoAcesso || '-'}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{:else}
			<div class="flex flex-col items-center justify-center rounded-lg bg-white py-10 shadow-md">
				<p class="text-lg font-semibold text-gray-700">Nenhum registro encontrado</p>
				<p class="mt-2 text-center text-sm text-gray-500">
					Tente alterar a sua pesquisa ou filtro para encontrar o que você deseja.
				</p>
			</div>
		{/if}
		<Pagination totalPages={data.totalPages} currentPage={data.currentPage} />
	{:catch error}
		<div
			class="flex flex-col items-center justify-center rounded-lg border border-red-300 bg-white py-10 shadow-md"
		>
			<p class="text-lg font-semibold text-red-600">Erro ao carregar os dados</p>
			<p class="mt-2 text-center text-sm text-gray-500">
				Ocorreu um problema ao buscar as informações. Tente novamente mais tarde.
			</p>
			<button
				type="button"
				on:click={() => window.location.reload()}
				class="mt-4 font-medium text-red-600 hover:underline"
			>
				Tentar Novamente
			</button>
		</div>
	{/await}
</article>
