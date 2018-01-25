import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activeYourMusicClass = '';
    let activeSearchClass = '';
    let activeHomeClass = '';

    if (['collection', 'user'].includes(this.props.match.params.category)) {
      activeYourMusicClass = 'green-link';
    }

    if (this.props.match.params.category === 'search') {
      activeSearchClass = 'green-link';
    }

    return (
      <aside id="sidebar">
        <div className='sidebar-top-links-container'>
          <ul className='sidebar-top-links'>
            <li>Procify img</li>
            <li className='sidebar-link
              sidebar-music-link'>
              <Link to='/collection/playlists' className={`${activeYourMusicClass}`}>
                Your Music
              </Link>
            </li>
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
