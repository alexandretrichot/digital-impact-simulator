import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  title: ReactNode
}

export default function Nothing(props: PropsWithChildren<Props>) {
  return <div className="nothing">
    <div className="title">{props.title}</div>
    <div className="description">{props.children}</div>
  </div>
}