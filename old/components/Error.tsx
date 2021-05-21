import { PropsWithChildren } from 'react';

import Lottie from 'lottie-react';

import errorAnim from '../assets/animations/error-screen.json';

type Props = {
  details?: string
}

export default function Error(props: PropsWithChildren<Props>) {
  return <div className="error">
    <Lottie className="anim" animationData={errorAnim} />
    <div className="text">{props.children}</div>
    {props.details && <div className="details">{props.details}</div>}
  </div>
}