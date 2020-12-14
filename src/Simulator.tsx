import React from 'react';
import Lottie from "lottie-react";

import Button from './Button';

import SearchesSection from './sections/Searches';
import EmailsSection from './sections/Emails';
import SocialsSection from './sections/Socials';
import GamesSection from './sections/Games';
import StreamingSection from './sections/Streaming';

import meuseLogo from './assets/images/meuse.png';
import estLogo from './assets/images/grand-est.jpg';
import drealLogo from './assets/images/dreal.jpg';


type Props = {

}

export default class App extends React.Component<Props> {
  state = {
    
  }

  render() {
    return <div className="simulator">
      <header id="intro">
        <h1>Simulateur d'impact carbone</h1>
        <div style={{ float: 'right', width: '40%' }}>
          <Lottie animationData={require('./assets/animations/booking.json')} />
        </div>
        <p style={{ maxWidth: "500px" }}>Vous êtes-vous déjà demandés si votre consomation d’internet avait un impact sur l’environnement ? Et si vous vous êtes posé la question, avez-vous une idée de ce que cela représente ?</p>
        <p>On vous propose d'y jeter un oeil !</p>
      </header>
      <SearchesSection onUpdate={() => {}} />
      <EmailsSection />
      <SocialsSection />
      <GamesSection />
      <StreamingSection />
      <footer>
        <div className="sponsors">
          <p>Avec la participation de :</p>
          <div className="flex">
            <img src={meuseLogo} alt="meuse logo" />
            <img src={estLogo} alt="grand est logo" />
            <img src={drealLogo} alt="dreal logo" />
          </div>
        </div>
      </footer>
    </div>
  }
}
