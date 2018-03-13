import React from "react";
import ArtistIndex from "./artist_index";
import AlbumIndex from "./album_index";
import SongIndexContainer from "./song_index_container";
import PlaylistIndex from "./playlist_index";
import * as searchUtil from "../util/search_util.jsx";
import Navbar from "./navbar";

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
  const navbarWords = [
    "all results",
    "artists",
    "tracks",
    "albums",
    "playlists"
  ];

  const possibleContent = {
    artists: (
      <div>
        {artistsHeader}
        <ArtistIndex artists={props.artists} />
      </div>
    ),
    tracks: (
      <div>
        {songsHeader}
        <SongIndexContainer songs={props.songs} />
      </div>
    ),
    albums: (
      <div>
        {albumsHeader}
        <AlbumIndex albums={props.albums} />
      </div>
    ),
    playlists: (
      <div>
        {playlistsHeader}
        <PlaylistIndex
          playlists={props.playlists}
          shouldBtnBeDisplayed={false}
        />
      </div>
    ),

    results: (
      <div>
        {artistsHeader}
        <ArtistIndex artists={props.artists} />
        {albumsHeader}
        <AlbumIndex albums={props.albums} />
        {songsHeader}
        <SongIndexContainer songs={props.songs} />
        {playlistsHeader}
        <PlaylistIndex
          playlists={props.playlists}
          shouldBtnBeDisplayed={false}
        />
      </div>
    )
  };

  const content = possibleContent[props.type];
  return (
    <section className="search-results">
      <Navbar type={props.type} category={category} navbarWords={navbarWords} />
      {content}
    </section>
  );
};

export default SearchResults;
