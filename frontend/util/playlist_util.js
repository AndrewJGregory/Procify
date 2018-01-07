export const createNewPlaylist = playlist => {
  return $.ajax({
    url: `api/users/${playlist.userId}/playlists`,
    method: 'POST',
    data: playlist
  });
};

export const fetchPlaylist = id => {
  return $.ajax({
    url: `api/playlists/${id}`,
    method: 'GET'
  });
};

export const fetchCurrentUsersPlaylists = userId => {
  return $.ajax({
    url: `api/users/${userId}/playlists`,
    method: 'GET'
  });
};
