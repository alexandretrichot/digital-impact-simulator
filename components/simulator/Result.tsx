import values, { types } from '../../values';

import { UserStats } from '../../lib/models/User';

import Sum from '../Sum';
import Graph from '../Graph';
import { formatGES, getGesStats, getKWhStats } from '../../utils';
import Simile from '../Simile';

type Props = {
  stats: UserStats
}

export default function Result({ stats }: Props) {

  const kwh = getKWhStats(stats);
  const totalKwh = Object.values(kwh).reduce((a, b) => a + b);
  const ges = getGesStats(stats);
  const totalGes = Object.values(ges).reduce((a, b) => a + b);

  return <section className="simulator-result">
    <div className="wrapper">
      <h2>Résumé de votre impact sur une journée</h2>
      <Sum kwh={totalKwh} ges={totalGes} />

      <p>Répartition de votre consommation électrique liée à votre utilisation de services en ligne.</p>
      <Graph stats={kwh} />

      <p>Répartition vos émissions de CO<sub>2</sub> dues à l'utilisation de services en ligne.</p>
      <Graph stats={ges} />

      <div className="legendary">
        {Object.keys(types).map(i => <div key={i} className="item">
          <div className="color" style={{ backgroundColor: types[i].color }}></div>
          <div className="name">{types[i].name}</div>
        </div>)}
      </div>

      <br />

      <h3>En une année cela représente :</h3>
      <Sum kwh={totalKwh * 365} ges={totalGes * 365} />
      <br />
      <p>À titre de comparaison c'est :</p>
      <br />
      <div className="similes">
        <Simile title={`${Math.round(totalKwh * 365 / values.frigoPerYear)} frigos`} icon={require('../../assets/icons/fridge.svg')}>
          C'est l'équivalent en consommation energétique de {Math.round(totalKwh * 365 / values.frigoPerYear)} frigos par an.
        </Simile>
        <Simile title={`${(totalGes * 365 / values.gesPerKmInCar).toLocaleString()} Km`} icon={require('../../assets/icons/car.svg')}>
          C'est l'équivalent en émissions carbone d'une voiture thermique ayant parcouru {(totalGes * 365 / values.gesPerKmInCar).toLocaleString()} Km.
        </Simile>
      </div>
    </div>
  </section>
}