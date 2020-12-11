import React from 'react';
import Lottie from "lottie-react";

import Button from '../Button';

type Props = {

}

export default class Socials extends React.Component<Props> {
  render() {
    return <section id="socials">
      <h2>Les Réseaux sociaux</h2>

      <div className="flex">
        <div className="pane">
          <p>Sur Instagram, 100.00 millions de photos et de vidéos sont publiées par jours. En parallèle, 4.20 milliards de likes sont comptabilisés quotidiennement.</p>

          <div>Nombre de photos envoyées par jour sur Instagram</div>
          <div className="result">345</div>
          <Button color="white" bg="#FFDD2D" shadow="#E6B300" onClick={console.log} >-2</Button>
          <Button color="white" bg="#FFDD2D" shadow="#E6B300" onClick={console.log} >+2</Button>

          <div>Nombre de photos envoyées par jour sur Snapchat</div>
          <div className="result">345</div>
          <Button color="white" bg="#FFDD2D" shadow="#E6B300" onClick={console.log} >-2</Button>
          <Button color="white" bg="#FFDD2D" shadow="#E6B300" onClick={console.log} >+2</Button>
        </div>
        <div className="anim">
          <Lottie animationData={require('../assets/animations/social.json')} />
        </div>
      </div>
    </section>;
  }
}
