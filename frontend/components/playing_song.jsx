import React from 'react';

class PlayingSong extends React.Component {
  constructor(props) {
    super(props);
    const audio = document.createElement('audio');
    this.state = { audio };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.playingSong !== this.props.playingSong) {
      this.state.audio.setAttribute('src', nextProps.playingSong.url);
      this.state.audio.load();
      this.play();
    }
  }

  play() {
    this.state.audio.play();
  }

  pause() {
    this.state.audio.pause();
  }

  render() {
    return (
      <footer id="playing-song">
        <button onClick={this.play}>Play</button>
        <button onClick={this.pause}>Pause</button>
      </footer>
    );
  }
}

export default PlayingSong;
