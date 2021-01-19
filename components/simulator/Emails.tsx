import React from 'react';
import Counter from '../Counter';
import Sum from '../Sum';
import values from '../../values';
import Section from './Section';
import { formatGES, formatKWh } from '../../utils';

type Props = {
  emailsSent: number,
  emailsReceived: number,
  emailsStored: number,
  onUpdateSent: (value: number) => void,
  onUpdateReceived: (value: number) => void,
  onUpdateStored: (value: number) => void,
}

export default function Emails(props: Props) {
  return <Section
    title={'Vos "petits" emails'}
    description={<>L'envoi d'un email consomme environ {formatKWh(values.kwh.email)} et emet environ {formatGES(values.ges.email)}.</>}
    animation={require('../../assets/animations/mail.json')}
    counters={<>
      <Counter title="Emails envoyés par jour" description={'C\'est le nombre d\'emails envoyés dans l\'espace d\'une journée.'} value={props.emailsSent} onUpdate={value => props.onUpdateSent(value)} />
      <Counter title="Emails reçus par jour" description={'Ceci est le nombre d\'emails entrant dans votre boite de réception y compris vos spams, emails de réseaux sociaux, etc.'} value={props.emailsReceived} onUpdate={value => props.onUpdateReceived(value)} />
      {/* <Counter title="Emails stockés sur son compte" description={'C\'est la somme de tous les emails stockés dans votre boîte de réception, vos emails envoyés, vos archives, les spams, votre corbeille, etc. Tout ces emails sont stockés quelque part et continuent de polluer même s\il ne servent plus à rien.'} value={this.props.emailsStored} onUpdate={value => this.props.onUpdateStored(value)} step={50} /> */}
    </>}
    footer={<>
      <Sum kwh={(props.emailsReceived + props.emailsSent) * values.kwh.email} ges={(props.emailsReceived + props.emailsSent) * values.ges.email} />
    </>}
  >
    <p>Chaque seconde, en moyenne <b>3 391 203</b> emails sont envoyés. Soit plus de <b>12 milliards</b> par heures.</p>
    <p>Cela a pour effet de dégager plus de {formatGES(3391203 * 60 * 60)} par heure.</p>
  </Section>
}
