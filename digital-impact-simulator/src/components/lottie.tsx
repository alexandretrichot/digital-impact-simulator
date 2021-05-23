import lottieWeb, { AnimationItem } from 'lottie-web';
import React from 'react';

import './lottie.scss';

type Props = {
	animData: Promise<any>;
};

const Lottie: React.FC<Props> = props => {
	const container = React.useRef<HTMLDivElement>(null);


	React.useEffect(() => {
		let anim: AnimationItem;

		props.animData.then(data => {
			anim = lottieWeb.loadAnimation({
				container: container.current!,
				animationData: data,
				renderer: 'canvas',
				rendererSettings: {
					className: 'lottie',
				}
			});
		});

		return () => {
			if (anim) {
				anim.destroy();
			}
		}
	}, [props.animData]);

	return (
		<div className="anim">
			<div className="container" ref={container}></div>
		</div>
	);
};

export default Lottie;
