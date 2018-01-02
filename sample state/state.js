{
  entities: {

    songs: {
      1: {
        id: 1,
        name: "44 bars",
        artistNames: ["Logic"],
        albumName: "Bobby Tarantino",
        length: '3:56',
      },

      2: {
        id: 2,
        name: "rockstar",
        artistNames: ["Post Malone", "21 Savage"],
        albumName: "Beerbongs & Bentleys",
        length: '3:38',
      },

      3: {
        id: 3,
        name: "juicy",
        artistNames: ["Biggie smalls"],
        albumName: "Ready to die",
        length: '2:34',
      },
    },

    playlists: {
      11: {
        id: 11,
        name: "chill",
        songIds: [5, 3, 2, 100, 45],
        authorName: "Andrew",
      },

      53: {
        id: 53,
        name: "gym",
        songIds: [],
        authorName: "Blake"
      }
    },

    artists: {
      205: {
        id: 205,
        name: "Ryan Caraveo",
        songIds: [5, 1, 50, 2],
        albumIds: [56, 2, 4],
      },

      2: {
        id: 2,
        name: "Kendrick Lamar",
        songIds: [5, 2],
        albumIds: [20]
      },
    },

    albums: {
      6: {
        id: 6,
        name: "Under Presure",
        songIds: [5, 6, 1, 22, 521],
        artistId: 111,
      }
    },
  },

  ui: {
    loading: true/false,
  },

  errors: {
    sessionErrors: ["Invalid username/password combination"],
    playlistErrors: ['Playlist title cannot be blank'],
  },

  session: {
    id: 51,
    currentUser: {
      id: 412,
      username: "block_my_proc",
      followedPlaylistIds: [53, 12]
    },
  },

  playingSong {
    songId: 123,
  },

  queue {
    songIds: [5, 15, 22, 10],
  },
}
