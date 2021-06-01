import React, { useState } from 'react';
import "./emailCTA.scss";

export type Props = {
	scheduled: boolean,
	onSetEmail: (email: string) => void
}

const EmailCTA: React.FC<Props> = props => {
	const [email, setEmail] = useState<string>('');
	const [emailError, setEmailError] = useState<string>('');

	const validate = () => {
		if (validateEmail(email)) {
			props.onSetEmail(email);
			setEmailError('');
		} else {
			setEmailError('Cet email n\'est pas valide');
		}
	}

	return (
		<div className="email-cta">
			{
				props.scheduled ? (
					<header>
						<h3>Rappel programmé !</h3>
						<p>À bientôt !</p>
					</header>
				) : (
					<>
						<header>
							<h3>Envie de réessayer plus tard ?</h3>
							<p>Nous vous enverons un email afin de réitérer l'exprience et voir votre évolution !</p>
						</header>
						<div className="col">
							<div className="form">
								<input type="email" placeholder="jean.dupont@mail.com" value={email} onChange={ev => setEmail(ev.currentTarget.value)} onKeyPress={ev => {
									setEmailError('');
									if (ev.code === 'Enter') validate();
								}} />
								<button className="btn" disabled={true} onClick={validate}>Et hop !</button>
							</div>
							{emailError ? (<div className="error">{emailError}</div>) : null}
						</div>
					</>
				)
			}
		</div>
	);
}

export default EmailCTA;

const validateEmail = (email: string) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);