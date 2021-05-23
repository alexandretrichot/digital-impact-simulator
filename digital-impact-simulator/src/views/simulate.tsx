import { useParams } from 'react-router';

export type SimulatePageParams = {
	id?: string;
}

const SimulatePage: React.FC = () => {
	const { id } = useParams<SimulatePageParams>();

	return (
		<div className="wrapper">
			Simulate Page
		</div>
	);
}

export default SimulatePage;
