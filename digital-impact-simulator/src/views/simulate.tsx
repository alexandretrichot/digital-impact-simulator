import { useParams } from 'react-router';

export type SimulatePageParams = {
	id?: string;
}

function SimulatePage() {
	const { id } = useParams<SimulatePageParams>();

	return (
		<h2>Simulate page with { id ? `id: ${id}` : 'no id' }.</h2>
	);
}

export default SimulatePage;