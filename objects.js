var playlist = {
  ChrisBrown:"Run it!",
  TreySongz:"Gotta Go!"
};

// objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`:

function updatePlaylist(artistName, songTitle) {
  return Object.assign ({}, { [artistName]: songTitle })
}

function updatePlaylist(artistName, songTitle) {
  return Object.assign ({}, { [artistName]: songTitle })
}