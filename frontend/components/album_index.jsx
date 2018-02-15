import React from 'react';
import AlbumIndexItemContainer from './album_index_item_container';

const AlbumIndex = ({ albums }) => {
    const albumIndexItems = albums.map(album => {
      return <AlbumIndexItemContainer key={album.id} album={album} />;
    });

    return (
      <section className='square-index-content'>
        <ul>
          {albumIndexItems}
        </ul>
      </section>
    );
};

export default AlbumIndex;
