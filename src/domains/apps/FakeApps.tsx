import * as React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

interface Props {
    location?: any;
    onClick?: () => void;
}

class FakeAppsCore extends React.Component<Props> {
  public render() {
      return (
          <div style={{ backgroundColor: 'orange' }}>
            <button onClick={this.props.onClick}>Click</button>
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

const mapDispatchToProps = (dispatch: any) => {
    return {
        onClick: () => {
            dispatch({ type: 'Howdy' })
        }
    }
}

export default connect(() => ({}), mapDispatchToProps)(FakeAppsCore);