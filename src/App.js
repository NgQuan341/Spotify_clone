import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";
import Player from "./components/Player";

function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handlePlaying = (id) =>{
    console.log(id);
    let s = DataSongs.find(song => song.id === id)
    setSong(s)
  }
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handlePlaying }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player">
          <DetailSong />
          <ListSong />
        </div>
          <Player/>
      </Songs.Provider>
    </div>
  );
}

export default App;
