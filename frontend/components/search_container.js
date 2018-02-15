import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchResults } from '../actions/search_actions';

const mapDispatchToProps = dispatch => {
  return {
    search: query => dispatch(fetchSearchResults(query))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
