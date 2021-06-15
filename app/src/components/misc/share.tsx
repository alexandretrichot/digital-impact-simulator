import React, { useState } from 'react';
import './share.scss';

const Share: React.FC<{link: string}> = props => {
	const [copied, setCopied] = useState<boolean>(false);

	function share() {
		if (navigator.share !== undefined) {
			navigator.share({ url: props.link }).catch(err => alert(err.message));
		} else {
			navigator.clipboard.writeText(props.link).then(() => setCopied(true)).catch(err => alert(err.message));
		}
	}

	return (
		<div className="share">
			<h4>Partagez votre simulation avec d'autres !</h4>
			{
				navigator.share !== undefined || navigator.clipboard !== undefined ? (
					<button className="btn" onClick={share}>{copied ? 'Lien copié !' : 'Partager !'}</button>
				) : (
					<div>{props.link}</div>
				)
			}
		</div>
	)
}

export default Share;
