import React from "react";

export const fetchSearchResults = query => {
  return $.ajax({
    url: `api/searches`,
    method: "POST",
    data: { search: { query } }
  });
};

export const makeSearchHeaders = (artists, albums, songs, playlists) => {
  let artistsHeader, albumsHeader, songsHeader, playlistsHeader;

  artistsHeader =
    artists.length > 0 ? (
      <h3 className="search-results-header">Artists</h3>
    ) : (
      ""
    );

  albumsHeader =
    albums.length > 0 ? <h3 className="search-results-header">Albums</h3> : "";

  songsHeader =
    songs.length > 0 ? <h3 className="search-results-header">Songs</h3> : "";

  playlistsHeader =
    playlists.length > 0 ? (
      <h3 className="search-results-header">Playlists</h3>
    ) : (
      ""
    );

  return { artistsHeader, albumsHeader, songsHeader, playlistsHeader };
};
