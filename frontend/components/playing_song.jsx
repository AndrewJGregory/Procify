import React from 'react';
import secToMin from 'sec-to-min';

class PlayingSong extends React.Component {
  constructor(props) {
    super(props);
    const audio = document.createElement('audio');
    this.state = { audio, playing: false };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.playingSong !== this.props.playingSong) {
      this.state.audio.setAttribute('src', nextProps.playingSong.url);
      this.state.audio.load();
      this.play();
      this.setState({playing: true});
    }
  }

  play() {
    this.state.audio.play();
    this.setState({playing: true});
  }

  pause() {
    this.state.audio.pause();
    this.setState({playing: false});
  }

  render() {
    const playPauseBtn = (
      this.state.playing ?
      <i className="fa fa-pause-circle-o playing-song-btn" aria-hidden="true"
        onClick={this.pause}></i> :
        <i className="fa fa-play-circle-o" aria-hidden="true"
          onClick={this.play}></i>
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
          </div>
        </footer>
      );
    }
  }

  export default PlayingSong;
