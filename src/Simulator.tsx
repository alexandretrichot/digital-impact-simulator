import React from 'react';
import Lottie from "lottie-react";

import Button from './Button';

import SearchesSection from './sections/Searches';
import EmailsSection from './sections/Emails';
import SocialsSection from './sections/Socials';
import GamesSection from './sections/Games';
import StreamingSection from './sections/Streaming';


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
      <SearchesSection />
      <EmailsSection />
      <SocialsSection />
      <GamesSection />
      <StreamingSection />
      <footer>
        
      </footer>
    </div>
  }
}
