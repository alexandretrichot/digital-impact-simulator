import React from 'react';
import values from '../../values';

import Sum from '../Sum';
import Counter from '../Counter';
import Section from './Section';

type Props = {
  instagramPics: number,
  snapchatPics: number,
  onUpdateInstagram: (value: number) => void,
  onUpdateSnapchat: (value: number) => void,
}

export default function Socials(props: Props) {
  return <Section
    title="Les Réseaux sociaux"
    description={<>Sur Instagram, <b>100.00 millions</b> de photos et de vidéos sont publiées par jours. En parallèle, <b>4.20 milliards</b> de likes sont comptabilisés quotidiennement.</>}
    animation={require('../../assets/animations/social.json')}
    counters={<>
      <Counter title="Photos envoyées par jours sur Instagram" description={''} value={props.instagramPics} onUpdate={value => props.onUpdateInstagram(value)} />
      <Counter title="Photos envoyées par jours sur Snapchat" description={''} value={props.snapchatPics} onUpdate={value => props.onUpdateSnapchat(value)} />
    </>}
    footer={<>
      <Sum kwh={props.instagramPics * values.kwh.instagram + props.snapchatPics * values.kwh.snapchat} ges={props.instagramPics * values.ges.instagram + props.snapchatPics * values.ges.snapchat} />
    </>}
  >
    
  </Section>;
}
