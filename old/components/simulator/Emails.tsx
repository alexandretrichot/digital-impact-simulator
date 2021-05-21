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
    title={'Vos "petits" e-mails'}
    description={<>L'envoi d'un e-mail consomme environ {formatKWh(values.kwh.email)} et émet environ {formatGES(values.ges.email)}.</>}
    animation={require('../../assets/animations/mail.json')}
    counters={<>
      <Counter title="E-mails envoyés par jour" description="Indiquez le nombre d'e-mails que vous envoyez en l'espace au cours d'une journée." value={props.emailsSent} onUpdate={value => props.onUpdateSent(value)} />
      <Counter title="E-mails reçus par jour" description="Indiquez le nombre d'e-mails entrant dans votre boite de réception y compris vos spams, e-mails de réseaux sociaux, etc." value={props.emailsReceived} onUpdate={value => props.onUpdateReceived(value)} />
    </>}
    footer={<>
      <p className="top"><b>En conséquence</b>, voici votre impact en consommation en énergie et émissions de gaz à effet de serre :</p>
      <Sum kwh={(props.emailsReceived + props.emailsSent) * values.kwh.email} ges={(props.emailsReceived + props.emailsSent) * values.ges.email} />
    </>}
  >
    <p>Chaque seconde, dans le monde, en moyenne <b>3 391 203</b> e-mails sont envoyés : soit plus de <b>12 milliards</b> par heure.</p>
    <p>Cela a pour effet de dégager l'équivalent de plus de {formatGES(3391203 * 60 * 60)} par heure.</p>
  </Section>
}
