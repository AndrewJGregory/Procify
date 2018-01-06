import React from 'react';
import {NavBarContainer} from './playlist_form_container';

class InnerCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let component = null;
    if (this.props.component) {
      component = <this.props.component/>;
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
