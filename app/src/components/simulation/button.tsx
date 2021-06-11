import React from 'react';

export type Props = {
	onClick: () => void,
}

const Button: React.FC<Props> = props => {
	const timeout = React.useRef<number>();
	const interval = React.useRef<number>();

	function mouseDownHandler() {
		props.onClick();

		timeout.current = window.setTimeout(() => {
			interval.current = window.setInterval(() => props.onClick(), 20);
		}, 300);
	}

	function mouseUpHandler() {
		if (timeout.current) clearTimeout(timeout.current);
		if (interval.current) clearInterval(interval.current);
	}

	return (
		<button
			className="btn big"
			onMouseDown={mouseDownHandler}
			onMouseUp={mouseUpHandler}
			onMouseOut={mouseUpHandler}

			onDoubleClick={ev => {
				ev.preventDefault();
				ev.stopPropagation();
			}}
		>
			{ props.children}
		</button >
	);
};

export default Button;
