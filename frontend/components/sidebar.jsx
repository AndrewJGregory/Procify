import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside id="sidebar">
        <div className='sidebar-top-links-container'>
          <ul className='sidebar-top-links'>
            <li>Procify img</li>
            <div className='search-bar-container'>
              <li className='search-bar clickable'>Search</li>
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <li className='sidebar-link clickable'>Home</li>
            <li className='sidebar-link sidebar-music-link clickable'>Your Music</li>
          </ul>
        </div>
        <div className='bottom-sidebar'>
          <Link to='/settings/account'>
            {this.props.username}
          </Link>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
