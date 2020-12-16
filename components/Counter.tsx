import React from 'react';

import Button from './Button';

type Props = {
  title: string,
  description: string,
  value: number,
  unit: number,
  step: number,
  onUpdate: (value: number) => void,

}

export default class Counter extends React.Component<Props> {
  static defaultProps = {
    unit: '',
    step: 1
  }

  updateHandler(value: number) {
    const a = this.props.value + value;
    if(a < 0) return;
    this.props.onUpdate(a);
  }

  render() {
    return <div className="counter">
      <div className="title">{this.props.title}</div>
      <div className="description">{this.props.description}</div>
      <div className="screen">
        <div className="value">{this.props.value}</div>
      </div>
      <div className="buttons">
        <Button onClick={() => this.updateHandler(-this.props.step)}>-{this.props.step}<span className="unit">{this.props.unit}</span></Button>
        <Button onClick={() => this.updateHandler(this.props.step)}>+{this.props.step}<span className="unit">{this.props.unit}</span></Button>
      </div>
    </div>;
  }
}
