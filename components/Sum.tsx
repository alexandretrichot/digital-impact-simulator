import React from 'react';

import boltIcon from '../assets/icons/bolt.svg';
import weightIcon from '../assets/icons/weight.svg';

type Props = {
  kwh: number, // this is the amount of bytes
  ges: number,
}

export default function Sum(props: Props) {
  const isKg = props.ges >= 1000;

  return <div className="sum">
    <div className="value">
      <img src={boltIcon} alt="Icon" className="icon" />
      <div className="result"><span>{props.kwh}</span> kWh</div>
    </div>
    <div className="value">
      <img src={weightIcon} alt="Icon" className="icon" />
      <div className="result"><span>{props.ges}</span> g de CO<sub>2</sub></div>
    </div>
  </div >;
}
