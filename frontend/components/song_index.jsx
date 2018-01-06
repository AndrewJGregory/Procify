import React from 'react';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const songs = this.props.songs.map(song => {
      return <SongIndexItem key={song.id} song={song} />;
    });

    return (
      <section id='song-index'>
        <ul className='song-list'>
          {songs}
        </ul>
      </section>
    );
  }
}

export default SongIndex;
