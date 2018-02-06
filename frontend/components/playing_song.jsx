import React from 'react';
import secToMin from 'sec-to-min';
import { Link } from 'react-router-dom';
import { pause } from '../util/playing_song_util';
import * as PlayingSongUtil from '../util/playing_song_util';

class PlayingSong extends React.Component {
  constructor(props) {
    super(props);
    const duration = this.findDuration(props);
    this.state = {
      currentTime: secToMin(this.props.audio.currentTime),
      duration,
      volume: '0.5',
      volumeIcon: <i className="fa fa-volume-down fa-2x"></i>,
      progress: '0',
      width: 520
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.seekTrackForward = this.seekTrackForward.bind(this);
    this.seekTrackBackward = this.seekTrackBackward.bind(this);
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
      const currentTime = secToMin(nextProps.audio.currentTime);
      const progress = this.findProgress(nextProps.audio);
      this.setState({ currentTime, progress });
    }, 1000);
  }

  findProgress(audio) {
    let progress = (audio.currentTime)/(audio.duration);
    progress *= this.state.width;
    return `${progress}px`;
  }

  handleVolumeChange(e) {
    e.preventDefault();
    const volumeLevel = e.target.value;
    this.props.audio.volume = volumeLevel;
    const volumeIcon = this.getVolumeIcon(volumeLevel);
    this.setState({ volumeIcon });
  }

  getVolumeIcon(volumeLevel) {
    if (volumeLevel == 0) {
      return <i className="fa fa-2x fa-volume-off"></i>;
      } else if (volumeLevel > 0.5) {
        return <i className="fa fa-2x fa-volume-up"></i>;
        } else if (volumeLevel <= 0.5) {
          return <i className="fa fa-2x fa-volume-down"></i>;
          }
        }

        findPlayOrPauseBtn() {
          const action = (this.props.isSongPlaying ? 'pause' : 'play');
          return <i
            className={`fa fa-${action}-circle-o playing-song-btn clickable`}
            aria-hidden="true"
            onClick={this.handleClick}></i>;
          }

          findAlbumImg() {
            let albumImg = <div className='small-img'></div>;
              if (this.props.playingSongAlbum) {
                albumImg = <img src={this.props.playingSongAlbum.img_url}
                  className='small-img'></img>;
                }
                return albumImg;
              }

              seekTrackForward(e) {
                e.preventDefault();
                const clickedPercentage = parseFloat(e.currentTarget.value);
                let timeInSeconds = (this.props.audio.duration * clickedPercentage);
                let currentTime, pixels;
                if (timeInSeconds) {
                  currentTime = secToMin(timeInSeconds);
                  pixels = clickedPercentage * this.state.width;
                } else {
                  pixels = 0;
                  currentTime = '0:00';
                  timeInSeconds = 0;
                }
                this.setState({ progress: `${pixels}px`, currentTime }, () => {
                  this.props.audio.currentTime = timeInSeconds;
                });
              }

              seekTrackBackward(e) {
                e.preventDefault();
                const clickedPercentage = parseFloat(e.currentTarget.value);
                let timeInSeconds = (clickedPercentage *
                  parseFloat(this.state.progress)/520 *
                  this.props.audio.duration);
                  let currentTime, pixels;
                  if (timeInSeconds) {
                    currentTime = secToMin(timeInSeconds);
                    pixels = parseFloat(this.state.progress) * clickedPercentage;
                  } else {
                    currentTime = '0:00';
                    timeInSeconds = 0;
                  }
                  this.setState({ progress: `${pixels}px`, currentTime }, () => {
                    this.props.audio.currentTime = timeInSeconds;
                  });
                }

                render() {
                  const playPauseBtn = this.findPlayOrPauseBtn();
                  const albumImg = this.findAlbumImg();
                  const artistName = (
                    this.props.artist ? this.props.artist.name : ''
                  );
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
                            <span className='track-bar-container'>
                              <input className='track-bar clickable'
                                type='range'
                                min='0.0' max='1.0'
                                step='any'
                                defaultValue='0.0'
                                onClick={this.seekTrackForward}>
                              </input>
                              <input className='progress-bar clickable'
                                type='range'
                                min='0.0' max = '1.0'
                                step='any'
                                defaultValue='0.0'
                                style={{width: this.state.progress}}
                                onClick={this.seekTrackBackward}>
                              </input>
                            </span>
                            <span className='song-time'>
                              {this.state.duration}
                            </span>
                          </div>
                        </div>
                        <div className='right-song-info'>
                          {this.state.volumeIcon}
                          <div className='volume-container'>
                            <input className='volume-slider'
                              type='range' min='0.0' max='1.0'
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
