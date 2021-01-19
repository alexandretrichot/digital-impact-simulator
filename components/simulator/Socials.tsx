import React from 'react';
import values from '../../values';

import Sum from '../Sum';
import Counter from '../Counter';
import Section from './Section';
import { formatGES, formatKWh } from '../../utils';

type Props = {
  instagramPics: number,
  snapchatPics: number,
  onUpdateInstagram: (value: number) => void,
  onUpdateSnapchat: (value: number) => void,
}

export default function Socials(props: Props) {
  return <Section
    title="Les réseaux sociaux"
    description={<p>Chaque minute passée sur Instagram consomme environ {formatKWh(values.kwh.instagram)} et émet environ {formatGES(values.ges.instagram)}.</p>}
    animation={require('../../assets/animations/social.json')}
    counters={<>
      <Counter title="Minutes passées par jour sur Instagram" description={'Indiquez ici le temps que vous y passez chaque jour'} value={props.instagramPics} onUpdate={value => props.onUpdateInstagram(value)} />
      <Counter title="Minutes passées par jour sur Snapchat" description={'Indiquez ici le temps que vous y passez chaque jour'} value={props.snapchatPics} onUpdate={value => props.onUpdateSnapchat(value)} />
    </>}
    footer={<>
      <p className="top"><b>En conséquence</b>, voici l'impact en consommation en énergie et émissions de gaz à effet de serre :</p>
      <Sum kwh={props.instagramPics * values.kwh.instagram + props.snapchatPics * values.kwh.snapchat} ges={props.instagramPics * values.ges.instagram + props.snapchatPics * values.ges.snapchat} />
    </>}
  >
    <p>Sur Instagram, <b>100.00 millions</b> de photos et de vidéos sont publiées par par jour dans le monde. En parallèle, <b>4.20 milliards</b> de likes sont comptabilisés quotidiennement.</p>
  </Section>;
}
