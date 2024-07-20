import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="bg-black p-10 h-screen flex justify-center">
        <div className="bg-gray-500 p-10 h-fit w-fit flex-col justify-center rounded-2xl">
          <div className="font-extrabold text-xl text-right mb-3 text-gray-800">
            casio
          </div>
          <input
            className="bg-gray-300 text-gray-800 w-80 h-16 p-4 mb-8 text-3xl outline-none rounded shadow-inner shadow-black text-right font-bold placeholder-gray-800"
            type="text"
            readOnly
            value={value}
            placeholder="0"
          />
          <div className="bg-gray-600 p-4 rounded shadow-inner shadow-black">
            <div className="flex w-72">
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value="AC"
                onClick={(e) => setValue("")}
              />
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value="DEL"
                onClick={(e) => setValue(value.slice(0, -1))}
              />
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value="."
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value="/"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div className="flex w-72">
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value={7}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value={8}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value={9}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value="*"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div className="flex w-72">
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value={4}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value={5}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value={6}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value="-"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div className="flex w-72">
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value={1}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value={2}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value={3}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value="+"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div className="flex w-72">
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value="00"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                className="w-20 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value={0}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                className="w-44 h-16 m-2 rounded shadow-md shadow-black bg-gray-400 hover:scale-95"
                type="button"
                value="="
                onClick={(e) => setValue(eval(value))}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
