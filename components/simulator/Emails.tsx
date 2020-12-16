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
      <h2>Nos petits emails</h2>

      <div className="flex">
        <div className="pane">
          <p>L'envoi d'un email émet en moyenne 27 grammes de CO<sub>2</sub>.</p>
          <p>Chaques secondes, en moyenne <b>3391203</b> emails sont envoyés. Soit plus de <b>12 milliards</b> par heures.</p>
          <p>Cela a pour effet de dégager plus de <b>330 kilotonnes</b> de CO<sub>2</sub> par heure. (329624.93 tonnes)</p>

          <Counter title="Emails envoyés par jours" description={'Ceci est le nombre d\'emails entrants dans votre boite de récéption, vos spams, etc.'} value={this.props.emailsSent} onUpdate={value => this.props.onUpdateSent(value)} />
          <Counter title="Emails reçus par jours" description={'Vous n\'avez qu\'a mettre le nombre d\'emails envoyés dans l\'espace d\'une journée.'} value={this.props.emailsReceived} onUpdate={value => this.props.onUpdateReceived(value)} />
          <Counter title="Emails stockés sur son compte" description={'C\'est la somme de tout les emails stockés dans votre boîte de reception, vos emails envoyés, vos archives, les spams, votre corbeille, etc. Tout ces emails sont tout de mêmes stockés quelque part et continuent de polluer même s\il ne servent plus à rien.'} value={this.props.emailsStored} onUpdate={value => this.props.onUpdateStored(value)} step={100} />

          <CarbonSum value={this.props.emailsReceived * values.gramPerEmail + this.props.emailsSent * values.gramPerEmail + this.props.emailsStored * values.gramPerEmailSleep} />
        </div>
        <div className="anim">
          <Lottie animationData={require('../../assets/animations/mail.json')} />
        </div>
      </div>
    </section>;
  }
}
