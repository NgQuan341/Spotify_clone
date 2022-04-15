import React, { useContext, useState } from "react";
import { Songs } from "../Context";

const ListSong = () => {
  const { DataSongs, handlePlaying, song } = useContext(Songs);
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((s, index) => {
            return (
              <tr
                key={index}
                className={`bg-slate-800 h-12 text-gray-500 hover:text-gray-300 hover:bg-gray-500 ${
                  song.id === s.id ? "text-cyan-300 bg-gray-500" : ""
                }`}
                onClick={() => handlePlaying(s.id)}
              >
                <td className="text-center">{index + 1}</td>
                <td className="text-left">{s.name}</td>
                <td className="text-center">{s.author}</td>
                <td className="text-center">
                  <a href={s.url} className="fa fa-download"></a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ListSong;
