import React from 'react';

type Props = {
  color: string,
  bg: string,
  shadow: string,
  onClick: (ev: any) => void
}

export default class Button extends React.Component<Props> {
  private timeout: any;
  private interval: any;

  render() {
    return <button className="btn" onMouseDown={this.mouseDownHandler.bind(this)} onMouseUp={this.mouseUpHandler.bind(this)} onMouseOut={this.mouseUpHandler.bind(this)} style={{ background: this.props.bg, color: this.props.color, boxShadow: '0px 3px 0px ' + this.props.shadow }}>{this.props.children}</button>;
  }

  mouseDownHandler(ev: any) {
    this.props.onClick(ev);

    this.timeout = setTimeout(() => {
      this.interval = setInterval(() => this.props.onClick(ev), 50);
    }, 300);
  }

  mouseUpHandler(ev: any) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
