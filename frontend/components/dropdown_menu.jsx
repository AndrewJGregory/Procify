import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClickOutside() {
    this.toggle();
  }

  toggle() {
    this.props.toggleDropdownMenu();
  }

  render() {
    return (
      <ul className='dropdown-menu'
        style={this.props.menuPos}>
        <li>Add to playlist</li>
        <li>Delete from playlist</li>
      </ul>
    );
  }
}

export default enhanceWithClickOutside(DropdownMenu);
