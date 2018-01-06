import React from 'react';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Welcome to the playlist show!
        Playlist id: {this.props.match.params.typeId}
        User id: {this.props.match.params.userId}
        Type: {this.props.match.params.type}
      </div>
    );
  }
}
export default PlaylistShow;
