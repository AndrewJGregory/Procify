export const switchOnType = (props, components, actions, decision) => {
  let result;
  switch (props.match.params.type) {
    case 'tracks':
    result = {
      component: components.SongIndex,
      action: actions.fetchSongs,
      id: null
    };
    return result[decision];

    case 'playlists':
    if (props.match.params.userId && props.match.params.typeId) {
      result = {
        component: components.PlaylistShowContainer,
        action: actions.fetchPlaylist,
        id: props.match.params.typeId
      };
      return result[decision];
    } else {
      result = {
        component: components.PlaylistIndex,
        action: actions.fetchCurrentUsersPlaylists,
        id: props.currentUserId
      };
      return result[decision];
    }
    default:
    return null;
  }
};
