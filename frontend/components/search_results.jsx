import React from "react";
import ArtistIndex from "./artist_index";
import AlbumIndex from "./album_index";
import SongIndex from "./song_index";
import PlaylistIndex from "./playlist_index";
import shortid from "shortid";
import * as searchUtil from "../util/search_util.jsx";
import * as navbarUtil from "../util/navbar_util.jsx";

const SearchResults = props => {
  const {
    artistsHeader,
    albumsHeader,
    songsHeader,
    playlistsHeader
  } = searchUtil.makeSearchHeaders(
    props.artists,
    props.albums,
    props.songs,
    props.playlists
  );

  const { category } = props.params;
  const lis = ["all results", "artists", "tracks", "albums", "playlists"].map(
    navbarWord =>
      navbarUtil.generateLi(
        props.type,
        category,
        navbarWord,
        shortid.generate()
      )
  );
  return (
    <section className="search-results">
      <ul className="nav-bar-ul">{lis}</ul>
      {artistsHeader}
      <ArtistIndex artists={props.artists} />
      {albumsHeader}
      <AlbumIndex albums={props.albums} />
      {songsHeader}
      <SongIndex songs={props.songs} />
      {playlistsHeader}
      <PlaylistIndex playlists={props.playlists} shouldBtnBeDisplayed={false} />
    </section>
  );
};

export default SearchResults;
