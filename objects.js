var playlist = {
  artistName:"songTitle",
  ChrisBrown:"Run it!",
  TreySongz:"Gotta Go!",
};

// objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`:

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { artistName: songTitle })
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  return Object.assign ({}, { [artistName]: songTitle })
}