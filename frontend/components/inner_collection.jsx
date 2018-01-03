import React from 'react';
import {NavBarContainer} from './playlist_form_container';

class InnerCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="inner-collection">
        <NavBarContainer />
        "Hey from the inner collection"
      </section>
    );
  }
}

export default InnerCollection;
