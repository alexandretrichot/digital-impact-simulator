import values, { types } from '../../values';

import { UserStats } from '../../lib/models/User';

import Sum from '../Sum';
import Graph from '../Graph';
import { getGesStats, getKWhStats } from '../../utils';

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

      <p>Répartition de votre consomation éléctrique liée à votre utilisation de services en ligne.</p>
      <Graph stats={kwh} />

      <p>Répartition vos emmissions de CO<sub>2</sub> dû à l'utilisation de services en ligne.</p>
      <Graph stats={ges} />

      <br />

      <h3>Sur une année :</h3>
      <Sum kwh={totalKwh * 365} ges={totalGes * 365} />

      <br />

      <div className="legendary">
        {Object.keys(types).map(i => <div key={i} className="item">
          <div className="color" style={{ backgroundColor: types[i].color }}></div>
          <div className="name">{types[i].name}</div>
        </div>)}
      </div>
    </div>
  </section>
}