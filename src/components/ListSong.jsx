import React, { useContext } from "react";

export default function ListSong() {
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white">
          <th className="w-[10%]">#</th>
          <th className="text-left">Title</th>
          <th className="w-[10%]">Author</th>
          <th className="w-[10%]">
            <i className="fa fa-download"></i>
          </th>
        </thead>
        <tbody>
          <tr
            key="1"
            className="bg-slate-800 h-12 text-gray-500 hover:text-gray-300 hover:bg-gray-400"
          >
            <td className="text-center">id</td>
            <td className="text-left">name</td>
            <td className="text-center">author</td>
            <td className="text-center">
              <a href="url" className="fa fa-download"></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
