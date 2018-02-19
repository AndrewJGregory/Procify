import { connect } from "react-redux";
import Search from "./search";
import {
  fetchSearchResults,
  clearSearchResults
} from "../actions/search_actions";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => {
  return {
    search: query => dispatch(fetchSearchResults(query)),
    clearSearchResults: () => dispatch(clearSearchResults())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Search));
