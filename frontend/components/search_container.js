import { connect } from "react-redux";
import Search from "./search";
import {
  fetchSearchResults,
  clearSearchResults
} from "../actions/search_actions";

const mapDispatchToProps = dispatch => {
  return {
    search: query => dispatch(fetchSearchResults(query)),
    clearSearchResults: () => dispatch(clearSearchResults())
  };
};

export default connect(null, mapDispatchToProps)(Search);
