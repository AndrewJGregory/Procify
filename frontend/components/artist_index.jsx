import React from "react";
import ArtistIndexItem from "./artist_index_item";

const ArtistIndex = ({ artists }) => {
  const artistIndexItems = artists.map(artist => {
    return <ArtistIndexItem artist={artist} key={artist.id} />;
  });

  return (
    <section className="artist-index">
      <ul>{artistIndexItems}</ul>
    </section>
  );
};

export default ArtistIndex;
