import React from 'react';

import Lottie from "lottie-react";

import SearchesSection from '../components/simulator/Searches';
import EmailsSection from '../components/simulator/Emails';
import SocialsSection from '../components/simulator/Socials';
import GamesSection from '../components/simulator/Games';
import StreamingSection from '../components/simulator/Streaming';

type Props = {

}

export default class Home extends React.Component<Props> {
  state = {

  }

  render() {
    return <div className="simulator">
      <header id="intro">
        <h1>Simulateur d'impact carbone</h1>
        <div style={{ float: 'right', width: '40%' }}>
          <Lottie animationData={require('../assets/animations/booking.json')} />
        </div>
        <p style={{ maxWidth: "500px" }}>Vous êtes-vous déjà demandés si votre consomation d’internet avait un impact sur l’environnement ? Et si vous vous êtes posé la question, avez-vous une idée de ce que cela représente ?</p>
        <p>On vous propose d'y jeter un oeil !</p>
      </header>
      <SearchesSection searchCount={43} onUpdate={console.log} />
      <EmailsSection />
      <SocialsSection />
      <GamesSection />
      <StreamingSection />
      <footer>
        <div className="sponsors">
          <p>Avec la participation de :</p>
          <div className="flex">
            <img src={require('../assets/images/meuse.png')} alt="meuse logo" />
            <img src={require('../assets/images/grand-est.jpg')} alt="grand est logo" />
            <img src={require('../assets/images/dreal.jpg')} alt="dreal logo" />
          </div>
        </div>
      </footer>
    </div>
  }
}