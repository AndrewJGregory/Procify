import React from "react";
import ArtistIndex from "./artist_index";
import AlbumIndex from "./album_index";
import SongIndex from "./song_index";
import PlaylistIndex from "./playlist_index";
import * as searchUtil from "../util/search_util.jsx";

const SearchResults = ({ artists, albums, songs, playlists }) => {
  const {
    artistsHeader,
    albumsHeader,
    songsHeader,
    playlistsHeader
  } = searchUtil.makeSearchHeaders(artists, albums, songs, playlists);

  return (
    <section className="search-results">
      {artistsHeader}
      <ArtistIndex artists={artists} />
      {albumsHeader}
      <AlbumIndex albums={albums} />
      {songsHeader}
      <SongIndex songs={songs} />
      {playlistsHeader}
      <PlaylistIndex playlists={playlists} shouldBtnBeDisplayed={false} />
    </section>
  );
};

export default SearchResults;
