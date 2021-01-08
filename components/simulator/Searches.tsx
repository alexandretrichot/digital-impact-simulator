import React from 'react';
import Lottie from "lottie-react";

import values from '../../values';

import Counter from '../Counter';
import CarbonSum from '../CarbonSum';

type Props = {
  searches: number,
  onUpdateSearches: (searches: number) => void,
}

export default class SearchesSection extends React.Component<Props> {
  render() {
    return <section id="search">
      <h2>Vos recherches sur internet</h2>

      <div className="flex">
        <div className="anim">
          <Lottie animationData={require('../../assets/animations/search.json')} />
        </div>
        <div className="pane">
          <p>En moyenne, une recherche sur un moteur de recherche comme Google, Bing ou Yahoo! consomme environ <b>??Wh</b> et emet environ <b>7 grammes de CO<sub>2</sub></b>.</p>
          
          <Counter title="Recherches" description={'Ceci est votre nombre moyen de recherches sur internet par jour.'} step={1} value={this.props.searches} onUpdate={value => this.props.onUpdateSearches(value)} />
          <CarbonSum value={this.props.searches * values.gramPerSearch} />

          <p>Chaque seconde, Google doit répondre à <b>38000</b> requêtes. Soit <b>2280000</b> par minute et plus de <b>137 millions par heures</b>.</p>
          <p>Cela a pour effet de consommer <b>?? Wh</b> et de dégager <b>957.6 tonnes</b> de CO<sub>2</sub> chaque heure en permanence.</p>

          <p>Note : Ecosia est le seul moteur de recherche ayant un bilan carbone positif. Les rejets de CO<sub>2</sub> sont compensés par des replantations d'arbres.</p>
        </div>
      </div>
    </section>;
  }
}
