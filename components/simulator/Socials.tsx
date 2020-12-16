import React from 'react';
import Lottie from "lottie-react";
import values from '../../values';
import CarbonSum from '../CarbonSum';
import Counter from '../Counter';

type Props = {
  instagramPics: number,
  snapchatPics: number,
  onUpdateInstagram: (value: number) => void,
  onUpdateSnapchat: (value: number) => void,
}

export default class Socials extends React.Component<Props> {
  render() {
    return <section id="socials">
      <h2>Les Réseaux sociaux</h2>

      <div className="flex">
        <div className="anim">
          <Lottie animationData={require('../../assets/animations/social.json')} />
        </div>
        <div className="pane">
          <p>Sur Instagram, 100.00 millions de photos et de vidéos sont publiées par jours. En parallèle, 4.20 milliards de likes sont comptabilisés quotidiennement.</p>

          <Counter title="Photos envoyées par jours sur Instagram" description={''} value={this.props.instagramPics} onUpdate={value => this.props.onUpdateInstagram(value)} />
          <Counter title="Photos envoyées par jours sur Snapchat" description={''} value={this.props.snapchatPics} onUpdate={value => this.props.onUpdateSnapchat(value)} />
          
          <CarbonSum value={this.props.instagramPics * values.gramPerPhoto + this.props.snapchatPics * values.gramPerPhoto} />
        </div>
      </div>
    </section>;
  }
}
