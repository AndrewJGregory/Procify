import React from 'react';
import NavBar from './navbar';

class InnerCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="inner-collection">
        <NavBar />
        "Hey from the inner collection"
      </section>
    );
  }
}

export default InnerCollection;
