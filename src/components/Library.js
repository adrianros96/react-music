import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, currentSong, statusLibrary }) => {
  return (
    <div className={`library ${statusLibrary ? "active-library" : ""} `}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
            song={song}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
