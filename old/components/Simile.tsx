import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  icon: string,
  title: string | ReactNode,
}

export default function Simile(props: PropsWithChildren<Props>) {
  return <div className="simile">
    <img src={props.icon} alt="Simile icon"/>
    <div className="title">{props.title}</div>
    <div>{props.children}</div>
  </div>
}