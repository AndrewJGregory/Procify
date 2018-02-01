import React from 'react';
import { Link } from 'react-router-dom';
import { pause } from '../util/playing_song_util';
import * as PlayingSongUtil from '../util/playing_song_util';

class PlayingSong extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.playingSong.title) {
      if (this.props.isSongPlaying) {
        PlayingSongUtil.pause(this.props);
      } else {
        PlayingSongUtil.rePlay(this.props);
      }
    }
  }

  render() {
    const playPauseBtn = (
      this.props.isSongPlaying ?
      <i className="fa fa-pause-circle-o playing-song-btn" aria-hidden="true"
        onClick={this.handleClick}></i> :
        <i className="fa fa-play-circle-o" aria-hidden="true"
          onClick={this.handleClick}></i>
      );
      const artistName = (
        this.props.artist ? this.props.artist.name : ''
      );
      let albumImg;
      if (this.props.playingSongAlbum) {
        albumImg = <img src={`${this.props.playingSongAlbum.img_url}`} className='small-img'/>;
      } else {
        albumImg = <div className='small-img'></div>;
        }

        const albumId = (this.props.playingSongAlbum ? this.props.playingSongAlbum.id : -1);

        const artistId = (this.props.artist ? this.props.artist.id : -1);
        
        return (
          <footer id="playing-song">
            <section className='playing-song-content'>
              <div className='left-song-info'>
                <div className='playing-song-img'>
                  {albumImg}
                </div>
                <div className='left-song-text'>
                  <h5>
                    <Link to={`/collection/albums/${albumId}`}>
                      {this.props.playingSong.title}
                    </Link>
                  </h5>
                  <h5>
                    <Link to={`/collection/artists/${artistId}`}
                      id='artist-name-playing'>
                      {artistName}
                    </Link>
                  </h5>
                </div>
              </div>
              <div className='middle-song-info'>
                <div className='song-controls'>
                  <div className='song-btns clickable'>
                    {playPauseBtn}
                  </div>
                </div>
                <div className='song-times'>
                  <span className='song-time'>
                    {this.props.currentTime}
                  </span>
                  <span className='song-time'>
                    {this.props.duration}
                  </span>
                </div>
              </div>
              <div className='right-song-info'>

                <div className='volume-container'>
                </div>
              </div>
            </section>
          </footer>
        );
      }
    }

    export default PlayingSong;
