import React from 'react';
import Lottie from "lottie-react";
import Counter from '../Counter';
import CarbonSum from '../CarbonSum';
import values from '../../values';

type Props = {
  emailsSent: number,
  emailsReceived: number,
  emailsStored: number,
  onUpdateSent: (value: number) => void,
  onUpdateReceived: (value: number) => void,
  onUpdateStored: (value: number) => void,
}

export default class Emails extends React.Component<Props> {
  render() {
    return <section id="emails">
      <div className="wrapper">
        <h2>Vos "petits" emails</h2>
        <Lottie animationData={require('../../assets/animations/mail.json')} />

        <div className="grid">
          <p>L'envoi d'un email consomme environ <b>??Wh</b> et emet environ <b>27 grammes de CO<sub>2</sub></b>.</p>
          <Counter title="Emails envoyés par jour" description={'C\'est le nombre d\'emails envoyés dans l\'espace d\'une journée.'} value={this.props.emailsSent} onUpdate={value => this.props.onUpdateSent(value)} />
          <Counter title="Emails reçus par jour" description={'Ceci est le nombre d\'emails entrant dans votre boite de réception y compris vos spams, emails de réseaux sociaux, etc.'} value={this.props.emailsReceived} onUpdate={value => this.props.onUpdateReceived(value)} />
          <Counter title="Emails stockés sur son compte" description={'C\'est la somme de tous les emails stockés dans votre boîte de réception, vos emails envoyés, vos archives, les spams, votre corbeille, etc. Tout ces emails sont stockés quelque part et continuent de polluer même s\il ne servent plus à rien.'} value={this.props.emailsStored} onUpdate={value => this.props.onUpdateStored(value)} step={50} />

          <CarbonSum value={this.props.emailsReceived * values.gramPerEmail + this.props.emailsSent * values.gramPerEmail + this.props.emailsStored * values.gramPerEmailSleep} />
          <p>Chaque seconde, en moyenne <b>3 391 203</b> emails sont envoyés. Soit plus de <b>12 milliards</b> par heures.</p>
          <p>Cela a pour effet de dégager plus de <b>330 kilotonnes</b> de CO<sub>2</sub> par heure. (329 624.93 tonnes)</p>
        </div>
      </div>
    </section>;
  }
}
