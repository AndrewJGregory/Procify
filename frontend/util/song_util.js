export const fetchSongs = () => {
  return $.ajax({
    url: 'api/songs',
    method: 'GET'
  });
};

export const deleteSongFromPlaylist = (songId, playlistId) => {
  return $.ajax({
    url: `api/songs/${songId}`,
    method: 'DELETE',
    data: { playlistId }
  });
};
