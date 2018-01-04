export const createNewPlaylist = playlist => {
  return $.ajax({
    url: `api/users/${playlist.userId}/playlists`,
    method: 'POST',
    data: playlist
  });
};
