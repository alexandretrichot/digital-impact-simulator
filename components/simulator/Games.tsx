import React from 'react';

import values from '../../values';
import CarbonSum from '../CarbonSum';
import Counter from '../Counter';
import Section from './Section';

type Props = {
  gamesMinutes: number,
  onUpdateGame: (value: number) => void,
}

export default class Games extends React.Component<Props> {
  render() {
    return <Section
      title="Jeux en ligne"
      description={<>[Texte sur les jeux en lignes]</>}
      animation={require('../../assets/animations/controller.json')}
      counters={<Counter title="Minutes passées à jouer à des jeux vidéos par jours" description={''} value={this.props.gamesMinutes} onUpdate={value => this.props.onUpdateGame(value)} step={20} />}
      footer={<>
        <CarbonSum value={this.props.gamesMinutes * values.gramPerGameMinute} />
      </>}
    >
      <p>En moyenne, une recherche google emet <b>7</b> grammes de CO<sub>2</sub>.</p>
      <p>Chaques secondes, google doit répondre à <b>38000</b> requêtes. Soit <b>2280000</b> par minutes et plus de <b>137 millions par heures</b>.</p>
      <p>Cela a pour effet de dégager <b>957.6 tonnes</b> de CO<sub>2</sub> chaque heure en permanence.</p>
    </Section>;
  }
}
