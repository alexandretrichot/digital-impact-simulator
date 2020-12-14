import React from 'react';
import Lottie from "lottie-react";

type Props = {

}

export default class Emails extends React.Component<Props> {
  render() {
    return <section id="emails">
      <h2>Nos petits emails</h2>

      <div className="flex">
        <div className="pane">
          <p>L'envoi d'un email émet en moyenne 27 grammes de CO<sub>2</sub>.</p>
          <p>Chaques secondes, en moyenne <b>3391203</b> emails sont envoyés. Soit plus de <b>12 milliards</b> par heures.</p>
          <p>Cela a pour effet de dégager plus de <b>330 kilotonnes</b> de CO<sub>2</sub> par heure. (329624.93 tonnes)</p>

          <div>emails envoyés</div>
          <div className="result">345</div>
          
          <div>emails reçus par jour</div>
          <div className="result">345</div>
          
          <div>total d'emails stockés dans la boîte de reception et autres dossiers</div>
          <div className="result">345</div>
        </div>
        <div className="anim">
          <Lottie animationData={require('../../assets/animations/mail.json')} />
        </div>
      </div>
    </section>;
  }
}
