import React from 'react';
import Lottie from "lottie-react";
import values from '../../values';
import CarbonSum from '../CarbonSum';
import Counter from '../Counter';
import Section from './Section';

type Props = {
  instagramPics: number,
  snapchatPics: number,
  onUpdateInstagram: (value: number) => void,
  onUpdateSnapchat: (value: number) => void,
}

export default class Socials extends React.Component<Props> {
  render() {
    return <Section
      title="Les Réseaux sociaux"
      description="Sur Instagram, 100.00 millions de photos et de vidéos sont publiées par jours. En parallèle, 4.20 milliards de likes sont comptabilisés quotidiennement."
      animation={require('../../assets/animations/social.json')}
      counters={<>
        <Counter title="Photos envoyées par jours sur Instagram" description={''} value={this.props.instagramPics} onUpdate={value => this.props.onUpdateInstagram(value)} />
        <Counter title="Photos envoyées par jours sur Snapchat" description={''} value={this.props.snapchatPics} onUpdate={value => this.props.onUpdateSnapchat(value)} />
      </>}
      footer={<>
        <CarbonSum value={this.props.instagramPics * values.instagram + this.props.snapchatPics * values.snapchat} />
      </>}
    >
      <p>Chaque seconde, en moyenne <b>3 391 203</b> emails sont envoyés. Soit plus de <b>12 milliards</b> par heures.</p>
      <p>Cela a pour effet de dégager plus de <b>330 kilotonnes</b> de CO<sub>2</sub> par heure. (329 625 tonnes)</p>
    </Section>;
  }
}
