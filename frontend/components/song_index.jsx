import React from "react";
import SongIndexItemContainer from "./song_index_item_container";
import shortid from "shortid";
import _ from "lodash";

class SongIndex extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.songs, nextProps.songs)) {
      this.props.setQueue(nextProps.songs);
    }
  }

  render() {
    let num = 0;
    const songs = this.props.songs.map(song => {
      num += 1;
      return (
        <SongIndexItemContainer
          key={shortid.generate()}
          song={song}
          listNum={num}
        />
      );
    });

    return (
      <section className="song-index">
        <ul className="song-list">{songs}</ul>
      </section>
    );
  }
}

export default SongIndex;
