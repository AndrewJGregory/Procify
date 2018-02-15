import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(type) {
    return e => {
      this.setState({[type]: e.target.value});
    };
  }

  render() {
    return (
      <main className='main-interior'>
        <div className='search-input'>

          <input
            value={this.state.query}
            onChange={this.updateInput('query')}
            placeholder="Start typing..."
            className='playlist-input search-input'
            autoFocus='true' />
        </div>
        <section className='search-results'>

        </section>
      </main>
    );
  }
}

export default Search;
