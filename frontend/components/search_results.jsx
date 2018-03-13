import React from "react";
import ArtistIndex from "./artist_index";
import AlbumIndex from "./album_index";
import SongIndexContainer from "./song_index_container";
import PlaylistIndex from "./playlist_index";
import * as searchUtil from "../util/search_util.jsx";
import Navbar from "./navbar";

export default class SearchResults extends React.Component {
  componentWillUnmount() {
    this.props.moveToEntities(this.props);
    this.props.clearSearchResults();
  }

  render() {
    const {
      artistsHeader,
      albumsHeader,
      songsHeader,
      playlistsHeader
    } = searchUtil.makeSearchHeaders(
      this.props.artists,
      this.props.albums,
      this.props.songs,
      this.props.playlists
    );

    const { category } = this.props.params;
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
          <ArtistIndex artists={this.props.artists} />
        </div>
      ),
      tracks: (
        <div>
          {songsHeader}
          <SongIndexContainer songs={this.props.songs} />
        </div>
      ),
      albums: (
        <div>
          {albumsHeader}
          <AlbumIndex albums={this.props.albums} />
        </div>
      ),
      playlists: (
        <div>
          {playlistsHeader}
          <PlaylistIndex
            playlists={this.props.playlists}
            shouldBtnBeDisplayed={false}
          />
        </div>
      ),

      results: (
        <div>
          {artistsHeader}
          <ArtistIndex artists={this.props.artists} />
          {albumsHeader}
          <AlbumIndex albums={this.props.albums} />
          {songsHeader}
          <SongIndexContainer songs={this.props.songs} />
          {playlistsHeader}
          <PlaylistIndex
            playlists={this.props.playlists}
            shouldBtnBeDisplayed={false}
          />
        </div>
      )
    };

    const content = possibleContent[this.props.type];
    return (
      <section className="search-results">
        <Navbar
          type={this.props.type}
          category={category}
          navbarWords={navbarWords}
          query={this.props.query}
        />
        {content}
      </section>
    );
  }
}
