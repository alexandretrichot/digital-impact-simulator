import lottieWeb from 'lottie-web';
import React from 'react';

type Props = {
	animData: Promise<any>;
};

const Lottie: React.FC<Props> = props => {
	const container = React.useRef<HTMLDivElement>(null);


	React.useEffect(() => {
		props.animData.then(data => {
			lottieWeb.loadAnimation({
				container: container.current!,
				animationData: data,
			});
		});
	}, []);

	return (
		<div className="anim">
			<div className="container" ref={container}></div>
		</div>
	);
};

export default Lottie;
