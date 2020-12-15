import React from 'react';
import { withRouter } from 'next/router';

type Props = {
  router: any
}

class Dashboard extends React.Component<Props> {
  componentDidMount() {
    fetch('/api/sessions', {
      method: 'PUT',
      body: JSON.stringify({
        title: "Hey",
        description: "This is a session"
      })
    }).then(r => r.json()).then(console.log).catch(console.error);

    fetch('/api/sessions/5fd8802e1dd23746860d0abc', {
      method: 'POST',
      body: JSON.stringify({
        title: "Updated",
        description: "This is a session"
      })
    }).then(r => r.json()).then(r => console.log('session', r)).catch(console.error);
  }

  render() {
    return <div id="dashboard">
      This is the dashboard

      <div>Session: {this.props.router.query.session ? this.props.router.query.session : 'null'}</div>
    </div>;
  }
}

export default withRouter(Dashboard);