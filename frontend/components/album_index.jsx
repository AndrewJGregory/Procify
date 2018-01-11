import React from 'react';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const albums = this.props.albums.map(album => {
      return <li>
        <img src={`${album.img_url}`}/>
        {album.title}
      </li>;
    });
    return (
      <section className='album-index'>
        <ul>
          {albums}
        </ul>
      </section>
    );
  }
}

export default AlbumIndex;
