import React from "react";
import SongIndexItemContainer from "./song_index_item_container";
import shortid from "shortid";
import _ from "lodash";

class SongIndex extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!this.areArraysOfObjectsEqual(this.props.songs, this.props.queue)) {
      if (!_.isEqual(this.props.playingSong, nextProps.playingSong)) {
        const possibleNextSong = this.props.songs[nextProps.queuePosition];
        if (_.isEqual(nextProps.playingSong, possibleNextSong)) {
          this.props.setQueue(this.props.songs);
        }
      }
    }
  }

  areArraysOfObjectsEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) {
      return false;
    }

    return arrayOne.reduce((acc, el, idx) => {
      return _.isEqual(el, arrayTwo[idx]) && acc;
    }, true);
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
