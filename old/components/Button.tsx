import React from 'react';

type Props = {
  onClick: (ev: any) => void
}

export default class Button extends React.Component<Props> {
  private timeout: any;
  private interval: any;

  render() {
    return <button className="btn big" onMouseDown={this.mouseDownHandler.bind(this)} onMouseUp={this.mouseUpHandler.bind(this)} onMouseOut={this.mouseUpHandler.bind(this)}>{this.props.children}</button>;
  }

  mouseDownHandler(ev: any) {
    this.props.onClick(ev);

    this.timeout = setTimeout(() => {
      this.interval = setInterval(() => this.props.onClick(ev), 20);
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
