import React from 'react';
import secToMin from 'sec-to-min';

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
      if (this.props.isSongPlaying) {
        this.props.audio.play().then(() => {
          const length = secToMin(this.props.audio.duration);
          this.setState({length});
        });
      } else {
        this.play();
      }
    }
  }

  play() {
    this.props.audio.play().then(() => {
      const length = secToMin(this.props.audio.duration);
      this.setState({length});
    });
    this.props.toggleSongPlaying();
  }

  pause() {
    this.props.audio.pause();
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
      return (
        <footer id="playing-song">
          <div className='playing-song-info'>
            {this.props.playingSong.title}
          </div>
          <div className='song-controls'>
            <i className="fa fa-step-backward playing-song-btn" aria-hidden="true"></i>
            {playPauseBtn}
            <i className="fa fa-step-forward playing-song-btn" aria-hidden="true"></i>
          </div>
          <div className='volume-container'>
            {this.state.length}
          </div>
        </footer>
      );
    }
  }

  export default PlayingSong;
