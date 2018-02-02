import React from 'react';
import secToMin from 'sec-to-min';
import { Link } from 'react-router-dom';
import { pause } from '../util/playing_song_util';
import * as PlayingSongUtil from '../util/playing_song_util';

class PlayingSong extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    const duration = this.findDuration(props);
    this.state = {
      currentTime: secToMin(this.props.audio.currentTime),
      duration,
      volume: '0.5'
    };
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  findDuration(props) {
    let duration;
    if (props.audio.duration) {
      duration = secToMin(props.audio.duration);
    } else {
      duration = '0:00';
    }
    return duration;
  }

  handleClick(e) {
    if (this.props.playingSong.title) {
      if (this.props.isSongPlaying) {
        PlayingSongUtil.pause(this.props);
      } else {
        PlayingSongUtil.rePlay(this.props, this);
      }
    }
  }

  componentWillUnmount() {
    PlayingSongUtil.pause(this.props);
    this.props.selectPlayingSong({});
    this.props.setAudioSrc('');
  }

  componentWillReceiveProps(nextProps) {
    nextProps.audio.addEventListener('loadedmetadata', () => {
      this.setState({ duration: this.findDuration(nextProps) });
    });
    window.setInterval(() => {
      this.setState({ currentTime: secToMin(nextProps.audio.currentTime) });
    }, 1000);
  }

  handleVolumeChange(e) {
    e.preventDefault();
    const volumeLevel = e.target.value;
    this.props.audio.volume = volumeLevel;
  }

  render() {
    const playPauseBtn = (
      this.props.isSongPlaying ?
      <i className="fa fa-pause-circle-o playing-song-btn clickable" aria-hidden="true"
        onClick={this.handleClick}></i> :
        <i className="fa fa-play-circle-o clickable" aria-hidden="true"
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
                  <div className='song-btns'>
                    {playPauseBtn}
                  </div>
                </div>
                <div className='song-times'>
                  <span className='song-time'>
                    {this.state.currentTime}
                  </span>
                  <span className='song-time'>
                    {this.state.duration}
                  </span>
                </div>
              </div>
              <div className='right-song-info'>

                <div className='volume-container'>
                  <input type='range' min='0.0' max='1.0'
                    step='any'
                    defaultValue={this.state.volume}
                    onChange={this.handleVolumeChange}></input>
                </div>
              </div>
            </section>
          </footer>
        );
      }
    }

    export default PlayingSong;
