import React from 'react';
import ArtistIndexItem from './artist_index_item';

class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const artists = this.props.artists.map(artist => {
      return <ArtistIndexItem artist={artist} key={artist.id} />;
    });

    return (
      <section className='artist-index' >
        <ul>
          {artists}
        </ul>
      </section>
    );
  }
}

export default ArtistIndex;
