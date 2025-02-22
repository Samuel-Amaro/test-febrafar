export function formatDate(dateStr: string) {
	const dateObj = new Date(dateStr);

	return dateObj.toLocaleDateString('pt-BR', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	});
}

export function getUrl(search?: string, page?: number) {
	const baseUrl = '/api/datas';

	if (search && page) {
		return `${baseUrl}?search=${search}&page=${page.toString()}`;
	} else if (search) {
		return `${baseUrl}?search=${search}`;
	} else if (page) {
		return `${baseUrl}?page=${page.toString()}`;
	} else {
		return baseUrl;
	}
}
