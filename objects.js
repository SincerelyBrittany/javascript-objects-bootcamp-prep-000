var playlist = {
  ChrisBrown:"Run it!",
  TreySongz:"Gotta Go!"
};

function updatePlaylist(artistName, songTitle) {
 
  return Object.assign ({}, { [artistName]: songTitle })
}