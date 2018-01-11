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
        component: components.PlaylistIndexContainer,
        action: actions.fetchCurrentUsersPlaylists,
        id: props.currentUserId
      };
      return result[decision];
    }

    case 'albums':
    if (props.match.params.typeId) {
      result = {
        component: components.AlbumShowContainer,
        action: actions.fetchAlbum,
        id: props.match.params.typeId
      };
    } else {
      result = {
        component: components.AlbumIndex,
        action: actions.fetchAlbums,
        id: ''
      };
    }
    return result[decision];

    case 'artists':
    if (props.match.params.typeId) {
      result = {
        component: components.ArtistShowContainer,
        action: actions.fetchArtist,
        id: props.match.params.typeId
      };
    } else {
      result = {
        component: components.ArtistIndex,
        action: actions.fetchArtists,
        id: ''
      };
    }
    return result[decision];

    case 'account':
    return components.AccountInfoContainer;
    default:
    return null;
  }
};

export const shouldFetchInfo = (props) => {
  return !props.location.pathname.includes('account');
};
