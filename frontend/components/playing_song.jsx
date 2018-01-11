import React from 'react';
import secToMin from 'sec-to-min';
import { Link } from 'react-router-dom';

class PlayingSong extends React.Component {
  constructor(props) {
    super(props);
    this.state = { length: '0:00', currentSecs: 0 };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.isSongPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.playingSong !== this.props.playingSong) {
      this.props.setAudioSrc(nextProps.playingSong.url);
      this.props.audio.load();
      this.setState({currentSecs: 0});
      this.play();
    }
  }

  play() {
    this.props.audio.play().then(() => {
      const intervalId = window.setInterval(() => this.incrementTime(), 1000);
      this.props.setIntervalId(intervalId);
      const length = secToMin(this.props.audio.duration);
      this.setState({length});
    });
    this.props.toggleSongPlaying();
  }

  pause() {
    this.props.audio.pause();
    window.clearInterval(this.props.intervalId);
    this.props.toggleSongPlaying();
  }

  incrementTime() {
    this.setState({currentSecs: this.state.currentSecs + 1});
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
      const formattedTime = secToMin(this.state.currentSecs);
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
                  <i className="fa fa-step-backward playing-song-btn" aria-hidden="true"></i>
                  {playPauseBtn}
                  <i className="fa fa-step-forward playing-song-btn" aria-hidden="true"></i>
                </div>
              </div>
              <div className='song-times'>
                <span className='song-time'>
                  {formattedTime}
                </span>
                <span className='song-time'>
                  {this.state.length}
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
