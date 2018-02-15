import React from "react";
import ArtistIndex from "./artist_index";
import AlbumIndex from "./album_index";
import SongIndex from "./song_index";
import PlaylistIndex from "./playlist_index";

const SearchResults = ({ artists, albums, songs, playlists }) => {
  return (
    <section className="search-results">
      <ArtistIndex artists={artists} />
      <AlbumIndex albums={albums} />
      <SongIndex songs={songs} />
      <PlaylistIndex playlists={playlists} />
    </section>
  );
};

export default SearchResults;
