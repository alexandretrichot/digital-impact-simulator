import React from 'react';

import values from '../../values';
import Sum from '../Sum';
import Counter from '../Counter';
import Section from './Section';
import { formatGES, formatKWh } from '../../utils';

type Props = {
  onlineGameMinutes: number,
  cloudGamingMinutes: number
  onUpdateOnlineGame: (value: number) => void,
  onUpdateCloudGaming: (value: number) => void,
}

export default function Games(props: Props) {
  return <Section
    title="Jeux en ligne"
    description={<>
      <p>Chaque minute passée sur un jeu en ligne consomme environ {formatKWh(values.kwh.onlineGame)} et émet environ {formatGES(values.ges.onlineGame)}.</p>
      <p>Pour du cloud gaming sur Stadia (Google) ou XCloud (Microsoft) on consomme environ {formatKWh(values.kwh.cloudGaming)} et émet environ {formatGES(values.ges.cloudGaming)} par minute de jeu.</p>
      <p>Cela revient à {formatKWh(values.kwh.cloudGaming * 60)} pour {formatGES(values.ges.cloudGaming * 60)} une heure de jeu !</p>
    </>}
    animation={require('../../assets/animations/controller.json')}
    counters={<>
      <Counter title="Minutes de jeux vidéos sur console ou ordinateur par jour" description="Indiquez ici le temps que vous y passez chaque jour" value={props.onlineGameMinutes} onUpdate={value => props.onUpdateOnlineGame(value)} step={20} />
      <Counter title={'Minutes de jeux vidéos "sur le cloud" par jour'} description="Indiquez ici le temps que vous y passez chaque jour" value={props.cloudGamingMinutes} onUpdate={value => props.onUpdateCloudGaming(value)} step={20} />
    </>}
    footer={<>
      <p className="top"><b>En conséquence</b>, voici l'impact en consommation en énergie et émissions de gaz à effet de serre :</p>
      <Sum kwh={props.onlineGameMinutes * values.kwh.onlineGame + props.cloudGamingMinutes * values.kwh.cloudGaming} ges={props.onlineGameMinutes * values.ges.onlineGame + props.cloudGamingMinutes * values.ges.cloudGaming} />
    </>}
  >
    <p>En sachant que <b>3 millards</b> de personnes jouent aux jeux vidéo dans le monde et en admettant un temps de jeu par jour moyen de 30 minutes, faire un calcul rapide revient à dire que {formatKWh(values.kwh.onlineGame * 30 * 3000000000)} sont consommés pour un rejet de {formatGES(values.ges.onlineGame * 30 * 3000000000)} par jour.</p>
    {/* source : https://www.presse-citron.net/plus-de-3-milliards-de-personnes-jouent-aux-jeux-video-dans-le-monde/#:~:text=Plus%20de%203%20milliards%20de%20personnes%20jouent%20aux%20jeux%20vid%C3%A9o%20dans%20le%20monde,-Tests */}
  </Section>;
}
