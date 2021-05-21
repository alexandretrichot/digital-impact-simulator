import React from 'react';

import boltIcon from '../assets/icons/bolt.svg';
import weightIcon from '../assets/icons/weight.svg';
import { formatGES, formatKWh } from '../utils';

type Props = {
  kwh: number, // this is the amount of bytes
  ges: number,
}

export default function Sum(props: Props) {
  return <div className="sum">
    <div className="value">
      <img src={boltIcon} alt="Icon" className="icon" />
      <div className="result">{formatKWh(props.kwh)}</div>
    </div>
    <div className="value">
      <img src={weightIcon} alt="Icon" className="icon" />
      <div className="result">{formatGES(props.ges)}</div>
    </div>
  </div >;
}
