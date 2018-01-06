import React from 'react';
import SongIndex from './song_index';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.typeId);
  }

  render() {
    return (
      <div>
        <SongIndex songs={this.props.songs} />
        Welcome to the playlist show!
        Playlist id: {this.props.match.params.typeId}
        User id: {this.props.match.params.userId}
        Type: {this.props.match.params.type}
      </div>
    );
  }
}
export default PlaylistShow;
