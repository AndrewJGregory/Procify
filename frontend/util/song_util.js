export const fetchSongs = () => {
  return $.ajax({
    url: 'api/songs',
    method: 'GET'
  });
};

export const deleteSongFromPlaylist = (userId, songId, playlistId) => {
  return $.ajax({
    url: `api/users/${userId}/playlists/${playlistId}`,
    method: 'DELETE',
    data: { songId }
  });
};
