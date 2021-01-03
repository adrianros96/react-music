import { useState } from "react";

import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

import "./styles/App.css";

import data from "./util";

function App() {
  // state
  const [songs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [statusLibrary, setStatusLibrary] = useState(false);

  return (
    <div className={`App ${statusLibrary ? "library-active" : ""}`}>
      <Nav statusLibrary={statusLibrary} setStatusLibrary={setStatusLibrary} />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        songs={songs}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        statusLibrary={statusLibrary}
      />
    </div>
  );
}

export default App;
