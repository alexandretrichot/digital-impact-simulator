import lottieWeb, { AnimationItem } from 'lottie-web';
import React from 'react';

import './lottie.scss';

type Props = {
	anim: string
};

const Lottie: React.FC<Props> = props => {
	const container = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		let anim: AnimationItem;

		import(`../assets/animations/${props.anim}.json`).then(data => {
			anim = lottieWeb.loadAnimation({
				container: container.current!,
				animationData: data,
				renderer: 'canvas',
				rendererSettings: {
					className: 'lottie',
				}
			});

			container.current!.classList.add('loaded');
		});

		return () => {
			if (anim) {
				anim.destroy();
			}
		}
	}, [props.anim]);

	return (
		<div className="lottie-container" ref={container}></div>
	);
};

export default Lottie;
