import { PropsWithChildren, ReactChild } from 'react';

import Lottie from 'lottie-react';

type Props = {
  title: ReactChild,
  description: ReactChild,
  animation: any,
  counters: ReactChild,
  footer: ReactChild
}

export default function SimulatorSection(props: PropsWithChildren<Props>) {
  return <section id="search">
    <div className="wrapper">
      <header>
        <div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <Lottie animationData={props.animation} />
      </header>

      <div className="counters">
        {props.counters}
      </div>

      <div className="main">
        {props.children}
      </div>
      <footer>
        <h3>En conséquence :</h3>
        {props.footer}
      </footer>
    </div>
  </section>;
}