import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    location?: any;
}

export default class FakeApps extends React.Component<Props> {
  public render() {
      return (
          <div style={{ backgroundColor: 'orange' }}>
            <div>Howdy</div>
            <Link to={this.linkTarget()}>{this.linkName()}</Link>
          </div>
      );
  }

  private linkTarget = () => {
      return this.props.location.pathname === '/apps/howdy' ? '/apps' : 'apps/howdy';
  }

  private linkName = () => {
      return this.props.location.pathname === '/apps/howdy' ? 'Home' : 'Howdy Page';
  }
}