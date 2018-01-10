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

    if (this.props.match.params.category === 'browse') {
      activeHomeClass = 'green-link';
    }


    if (this.props.match.params.category === 'search') {
      activeSearchClass = 'green-link';
    }

    return (
      <aside id="sidebar">
        <div className='sidebar-top-links-container'>
          <ul className='sidebar-top-links'>
            <li>Procify img</li>
            <div className='search-bar-container'>
              <li className='search-bar'>
                  <Link to='/search/results'
                    className={`${activeSearchClass}`}>
                    Search
                  </Link>
                </li>
                <Link to='/search/results'>
                  <i className={`fa fa-search ${activeSearchClass}`} aria-hidden="true"></i>
                </Link>
              </div>
              <li className='sidebar-link'>
                <Link to='/browse/featured' className={`${activeHomeClass}`}>
                  Home
                </Link>
              </li>
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
