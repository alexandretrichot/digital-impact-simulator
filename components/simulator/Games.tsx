import React from 'react';

import values from '../../values';
import Sum from '../Sum';
import Counter from '../Counter';
import Section from './Section';

type Props = {
  onlineGameMinutes: number,
  cloudGamingMinutes: number
  onUpdateOnlineGame: (value: number) => void,
  onUpdateCloudGaming: (value: number) => void,
}

export default function Games(props: Props) {
  return <Section
    title="Jeux en ligne"
    description={<>[Texte sur les jeux en lignes]</>}
    animation={require('../../assets/animations/controller.json')}
    counters={<>
      <Counter title="Minutes de jeux vidéos sur console ou ordinateur par jours" description="" value={props.onlineGameMinutes} onUpdate={value => props.onUpdateOnlineGame(value)} step={20} />
      <Counter title={'Minutes de jeux vidéos "sur le cloud" par jours'} description="" value={props.cloudGamingMinutes} onUpdate={value => props.onUpdateCloudGaming(value)} step={20} />
    </>}
    footer={<>
      <Sum kwh={props.onlineGameMinutes * values.kwh.onlineGame + props.cloudGamingMinutes * values.kwh.cloudGaming} ges={props.onlineGameMinutes * values.ges.onlineGame + props.cloudGamingMinutes * values.ges.cloudGaming} />
    </>}
  >
    [Texte de conclusion]
  </Section>;
}
