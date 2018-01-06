import React from 'react';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const songs = this.props.songs.map(song => {
      return <li key={song.id}>{song.title}</li>;
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
