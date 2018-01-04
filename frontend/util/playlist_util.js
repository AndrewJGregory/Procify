export const createNewPlaylist = data => {
  return $.ajax({
    url: `api/users/${data.userId}/playlists`,
    method: 'POST',
    data
  });
};
