import React from 'react';
import { withRouter } from 'next/router';

import Lottie from "lottie-react";

import SearchesSection from '../components/simulator/Searches';
import EmailsSection from '../components/simulator/Emails';
import SocialsSection from '../components/simulator/Socials';
import GamesSection from '../components/simulator/Games';
import StreamingSection from '../components/simulator/Streaming';

import Footer from '../components/Footer';
import Result from '../components/simulator/Result';

type Props = {
  router: any
}

type State = {
  user?: {
    name: string,
    id: string,
  },
  values: {
    searches: number,
    emailsSent: number,
    emailsReceived: number,
    emailsStored: number,
    instagramPics: number,
    snapchatPics: number,
    gamesMinutes: number,
    youtubeMinutes: number,
    netflixMinutes: number
  }
}

class Home extends React.Component<Props> {
  timeout: any; 

  state: State = {
    values: {
      searches: 0,
      emailsSent: 0,
      emailsReceived: 0,
      emailsStored: 0,
      instagramPics: 0,
      snapchatPics: 0,
      gamesMinutes: 0,
      youtubeMinutes: 0,
      netflixMinutes: 0
    }
  }

  sendValues() {
    
  }

  setValues(values: any) {
    this.setState({ ...this.state, values: values });

    this.timeout = setTimeout(this.sendValues.bind(this), 500);
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
        <a className="btn" href="#search">Faire le test !</a>
        <div>{this.props.router.query.session}</div>
      </header>
      <SearchesSection
        searches={this.state.values.searches} onUpdateSearches={value => this.setValues({ ...this.state.values, searches: value })} />
      <EmailsSection
        emailsSent={this.state.values.emailsSent} onUpdateSent={value => this.setValues({ ...this.state.values, emailsSent: value })}
        emailsReceived={this.state.values.emailsReceived} onUpdateReceived={value => this.setValues({ ...this.state.values, emailsReceived: value })}
        emailsStored={this.state.values.emailsStored} onUpdateStored={value => this.setValues({ ...this.state.values, emailsStored: value })} />
      <SocialsSection
        instagramPics={this.state.values.instagramPics} onUpdateInstagram={value => this.setValues({ ...this.state.values, instagramPics: value })}
        snapchatPics={this.state.values.snapchatPics} onUpdateSnapchat={value => this.setValues({ ...this.state.values, snapchatPics: value })} />
      <GamesSection
        gamesMinutes={this.state.values.gamesMinutes} onUpdateGame={value => this.setValues({ ...this.state.values, gamesMinutes: value })} />
      <StreamingSection
        youtubeMinutes={this.state.values.youtubeMinutes} onUpdateYoutube={value => this.setValues({ ...this.state.values, youtubeMinutes: value })}
        netflixMinutes={this.state.values.netflixMinutes} onUpdateNetflix={value => this.setValues({ ...this.state.values, netflixMinutes: value })} />

      <Result />
      
      <Footer />
    </div>
  }
}

export default withRouter(Home);