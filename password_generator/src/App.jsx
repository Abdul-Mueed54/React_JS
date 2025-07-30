import { useState, useCallback, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [numallowed, setnumallowed] = useState("false");
  const [charallowed, setcharallowed] = useState("flase");
  const [length, setlength] = useState(8);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numallowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&*()_+-=[];',./{}|:~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numallowed, charallowed, setpassword]);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numallowed, charallowed, passwordGenerator]);
  return (
    <div className="w-full h-screen" style={{ backgroundColor: "black" }}>
      <h1 className="flex flex-wrap justify-center text-white py-25 text-4xl font-bold">
        PASSWORD GENERATOR
      </h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 hover:bg-blue-800 text-white px-3 py-0.5
           rounded-r-md transition-all"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numallowed}
              id="numberInput"
              onChange={() => {
                setnumallowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                setcharallowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
