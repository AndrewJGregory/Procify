export const switchOnType = (params, components, actions, decision) => {
  let result;
  switch (params.type) {
    case 'tracks':
    result = {
      component: components.SongIndex,
      action: actions.fetchSongs,
      id: null
    };
    return result[decision];

    case 'playlists':
    if (params.userId && params.typeId) {
      result = {
        component: components.PlaylistShowContainer,
        action: actions.fetchPlaylist,
        id: params.typeId
      };
      return result[decision];
    } else {
      result = {
        component: components.PlaylistIndex,
        action: actions.fetchCurrentUsersPlaylists,
        id: params.currentUserId
      };
      return result[decision];
    }
    default:
    return null;
  }
};
