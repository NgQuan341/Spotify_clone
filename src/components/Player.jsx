import { React, useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Songs } from "../Context";

const Player = () => {
  const { song } = useContext(Songs);
  const [played, setPlayed] = useState(true)
  const [playing, setPlaying] = useState(true)
  const [process, setProcess] = useState({
    timerun: '00:00',
    timetotal:'00:00',
    played:0
  })
  const handleTimeLoading = (e) =>{
      if(typeof e == 'object' && e !== null){
        let minutes = Math.floor(e.playedSeconds / 60)
        let seconds = Math.floor(e.playedSeconds) - minutes*60
        seconds < 10 ? seconds = `0${seconds}`:seconds=seconds;
        let minutes2 = Math.floor(e.loadedSeconds / 60)
        let seconds2 = Math.floor(e.loadedSeconds) - minutes2*60
        seconds2 < 10 ? seconds2 = `0${seconds2}`:seconds2=seconds2;
        let played = e.played*100
        setProcess({played:played,timetotal:`${minutes2}:${seconds2}`, timerun:`${minutes}:${seconds}`})
      }
  }
  useEffect(()=>{

  },[playing])
  
  return (
    <div className="h-24 bg-slate-900 pt-5">
      <div hidden>
        <ReactPlayer url={song.url} controls={true} playing={playing}
        onPlay={() =>setPlayed(false)} 
        onPause={()=>setPlayed(true)} 
        onProgress={e =>handleTimeLoading(e)}/>
      </div>
      <div className="buttons">
        <button id="backward-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-slate-400 hover:fill-white"
            viewBox="0 0 320 512"
          >
            <path d="M31.1 64.03c-17.67 0-31.1 14.33-31.1 32v319.9c0 17.67 14.33 32 32 32C49.67 447.1 64 433.6 64 415.1V96.03C64 78.36 49.67 64.03 31.1  64.03zM267.5 71.41l-192 159.1C67.82 237.8 64 246.9 64 256c0 9.094 3.82 18.18 11.44 24.62l192  159.1c20.63 17.12 52.51 2.75 52.51-24.62v-319.9C319.1 68.66 288.1 54.28 267.5 71.41z" />
          </svg>
        </button>
        <button id="play-button" hidden = {!played} onClick={()=>setPlaying(!playing)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-slate-400 hover:fill-white"
            viewBox="0 0 512 512"
          >
            <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z" />
          </svg>
        </button>
        <button id="pause-button" hidden = {played} onClick={()=>setPlaying(!playing)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-slate-400 hover:fill-white"
            viewBox="0 0 512 512"
          >
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM224 191.1v128C224 337.7 209.7 352 192 352S160 337.7 160 320V191.1C160 174.3 174.3 160 191.1 160S224 174.3 224 191.1zM352 191.1v128C352 337.7 337.7 352 320 352S288 337.7 288 320V191.1C288 174.3 302.3 160 319.1 160S352 174.3 352 191.1z" />
          </svg>
        </button>
        <button id="forward-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-slate-400 hover:fill-white"
            viewBox="0 0 320 512"
          >
            <path d="M287.1 447.1c17.67 0 31.1-14.33 31.1-32V96.03c0-17.67-14.33-32-32-32c-17.67 0-31.1 14.33-31.1 31.1v319.9C255.1 433.6 270.3 447.1 287.1 447.1zM52.51 440.6l192-159.1c7.625-6.436 11.43-15.53 11.43-24.62c0-9.094-3.809-18.18-11.43-24.62l-192-159.1C31.88 54.28 0 68.66 0 96.03v319.9C0 443.3 31.88 457.7 52.51 440.6z" />
          </svg>
        </button>
      </div>
      <div className="timeline px-2 flex">
        <span className="px-3 text-white">{process.timerun}</span>
        <input type="range" name="" id="" className="w-full" value={process.played}/>
        {/* <input type="range" name="" id="" className="w-full" value={volume}/> */}
        <span className="px-3 text-white">{process.timetotal}</span>
      </div>
    </div>
  );
};
export default Player;
