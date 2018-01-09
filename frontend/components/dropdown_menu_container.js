import { connect } from 'react-redux';
import DropdownMenu from './dropdown_menu';
import { toggleDropdownMenu } from '../actions/song_actions';

const mapDispatchToProps = dispatch => {
  return {
    toggleDropdownMenu: () => dispatch(toggleDropdownMenu())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DropdownMenu);
