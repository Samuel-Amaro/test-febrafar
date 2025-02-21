import { json } from '@sveltejs/kit';
import data from '$lib/data/data.json';

export function GET({ url }) {
	const searchParam = url.searchParams.get('search');
	const pageParam = url.searchParams.get('page');

	const pageIndex = pageParam ? parseInt(pageParam, 10) : 1;

	let filteredData = data;

	if (searchParam) {
		filteredData = data.filter((item) =>
			[item.name, item.email, item.phone].some((field) =>
				field.toLowerCase().includes(searchParam.toLowerCase())
			)
		);
	}

	const totalItems = filteredData.length;
	const totalPages = Math.ceil(totalItems / 5);

	const startIndex = (pageIndex - 1) * 5;
	const endIndex = startIndex + 5;

	const paginatedData = filteredData.slice(startIndex, endIndex);

	return json({
		data: paginatedData,
		totalItems,
		totalPages,
		currentPage: pageIndex
	});
}
