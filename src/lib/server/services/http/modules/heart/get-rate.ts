export default async function () {
	const response = await fetch('https://advent.sveltesociety.dev/data/2023/day-four.json');

	return await response.json();
}
