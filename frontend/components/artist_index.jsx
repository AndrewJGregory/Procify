import React from 'react';

class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const artists = this.props.artists.map(artist => {
      return <li>
        <img src={`${artist.img_url}`}/>
        {artist.name}
      </li>;
    });

    return (
      <section className='artist-index' >
        <ul>
          {artists}
        </ul>
      </section>
    );
  }
}

export default ArtistIndex;
