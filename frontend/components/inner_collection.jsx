import React from 'react';
import {NavBarContainer} from './playlist_form_container';

class InnerCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let id = null;
    switch (this.props.match.params.type) {
      case 'playlists':
      if (this.props.match.params.userId && this.props.match.params.typeId) {
        id = this.props.match.params.typeId;
      } else {
        id = this.props.currentUserId;
      }
      break;
      default:
      id = null;
    }
    this.props.fetchAction(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.type !== this.props.match.params.type) {
      let id = null;
      switch (nextProps.match.params.type) {
        case 'playlists':
        if (nextProps.match.params.userId && nextProps.match.params.typeId) {
          id = nextProps.match.params.typeId;
        } else {
          id = nextProps.currentUserId;
        }
        break;
        default:
        id = null;
      }
      nextProps.fetchAction(id);
    }

  }

  render() {
    let component = null;
    if (this.props.component) {
      component = <this.props.component
        playlists={this.props.playlists}
        songs={this.props.songs}
        currentUserId={this.props.currentUserId}
        />;
    }
    return (
      <section id="inner-collection">
        <NavBarContainer />
        {component}
        "Hey from the inner collection"
      </section>
    );
  }
}

export default InnerCollection;
