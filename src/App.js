import "./App.css";
import Navbar from "./components/Navbar";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player">
          <DetailSong />
          <ListSong />
        </div>
    </div>
  );
}

export default App;
