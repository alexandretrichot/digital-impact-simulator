import React from 'react';
import { withRouter } from 'next/router';

type Props = {
  router: any
}

class Dashboard extends React.Component<Props> {
  render() {
    return <div id="dashboard">
      This is the dashboard

      <div>Session: {this.props.router.query.session ? this.props.router.query.session : 'null'}</div>
    </div>;
  }
}

export default withRouter(Dashboard);