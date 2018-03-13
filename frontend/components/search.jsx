import React from "react";
import SearchResultsContainer from "./search_results_container";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.updateInput = this.updateInput.bind(this);
  }

  componentDidMount() {
    const query = this.props.location.pathname.match(/.*\/(.*?)$/)[1];
    if (query) {
      this.setState({ query }, () => {
        this.props.search(this.state.query);
      });
    }
  }

  updateInput(type) {
    return e => {
      this.setState({ [type]: e.target.value }, () => {
        if (this.state.query) {
          this.props.search(this.state.query);
          this.props.history.push(`/search/results/${this.state.query}`);
        } else {
          this.props.clearSearchResults();
          this.props.history.push("/search/results");
        }
      });
    };
  }

  render() {
    return (
      <section className="main-interior">
        <div className="search-container">
          <div className="search-info-input-container">
            <p className="search-info-text">
              Search for an Artist, Song, Album or Playlist
            </p>
            <input
              value={this.state.query}
              onChange={this.updateInput("query")}
              placeholder="Start typing..."
              className="search-input-field"
              autoFocus="true"
            />
          </div>
        </div>
        <SearchResultsContainer type={this.props.match.params.type} />
      </section>
    );
  }
}

export default Search;
