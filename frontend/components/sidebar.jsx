import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside id="sidebar">

        <Link to='/settings/account'>
          {this.props.username}
        </Link>
      </aside>
    );
  }
}

export default Sidebar;
