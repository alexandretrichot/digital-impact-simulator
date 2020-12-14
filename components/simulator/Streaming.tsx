import React from 'react';
import Lottie from "lottie-react";

type Props = {

}

export default class Streaming extends React.Component<Props> {
  render() {
    return <section id="streaming">
      <h2>Nos soirées Netfilx</h2>

      <div className="flex">
        <div className="anim">
          <Lottie animationData={require('../../assets/animations/streaming.json')} />
        </div>
        <div className="pane">
          <p>Chaque années, YouTube et les plateformes de vidéos eu lignes génèrent <b>65 millions</b> de tonnes de CO<sub>2</sub>.</p>
          <p>Les services de VOD comme Netflix ou Amazon prime en génèrent quand à eux <b>102 millions</b>.</p>
          <p>Combinés, ils dégagent plus de <b>170 millions</b> de tonnes de CO<sub>2</sub> sur une année.</p>

          <div>temps passé sur ytb</div>
          <div className="result">345</div>
          
          <div>temps passé sur netflix</div>
          <div className="result">345</div>
        </div>
      </div>
    </section>;
  }
}
