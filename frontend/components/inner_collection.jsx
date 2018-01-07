import React from 'react';
import {NavBarContainer} from './playlist_form_container';
import * as innerCollectionUtil from '../util/inner_collection_util';

class InnerCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = innerCollectionUtil.switchOnType(
      this.props.match.params, {}, {}, 'id'
    );
    this.props.fetchAction(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.type !== this.props.match.params.type) {
      const id = innerCollectionUtil.switchOnType(
        this.props.match.params, {}, {}, 'id');
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
