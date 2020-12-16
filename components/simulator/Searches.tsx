import React from 'react';
import Lottie from "lottie-react";

import values from '../../values';

import Counter from '../Counter';
import CarbonSum from '../CarbonSum';

type Props = {
  searches: number,
  onUpdateSearches: (searches: number) => void,
}

export default class Searches extends React.Component<Props> {
  render() {
    return <section id="search">
      <h2>Les recherches sur Google</h2>

      <div className="flex">
        <div className="anim">
          <Lottie animationData={require('../../assets/animations/search.json')} />
        </div>
        <div className="pane">
          <p>En moyenne, une recherche google emet <b>7</b> grammes de CO<sub>2</sub>.</p>
          <p>Chaques secondes, google doit répondre à <b>38000</b> requêtes. Soit <b>2280000</b> par minutes et plus de <b>137 millions par heures</b>.</p>
          <p>Cela a pour effet de dégager <b>957.6 tonnes</b> de CO<sub>2</sub> chaque heure en permanence.</p>

          <Counter title="Recherches par jours" description={'Ceci est votre nombre de recherches sur un moteur de recherches comme Google, Bing, Yahoo, etc. Si vous utilisez des moteurs de recherches "éco-responsables" vous pouvez mettre 0'} step={1} value={this.props.searches} onUpdate={value => this.props.onUpdateSearches(value)} />
          <CarbonSum value={this.props.searches * values.gramPerSearch} />
        </div>
      </div>
    </section>;
  }
}
