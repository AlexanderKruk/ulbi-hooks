import { useRef, useState } from "react";
import "./App.css";
import { Hover } from "./components/Hover";
import { useHover } from "./hooks/useHover";
import { useInput } from "./hooks/useInput";
import useDebounce from "./hooks/useDebounce";
import List from "./components/List";

function App() {
  const password = useInput("");
  const login = useInput("");
  const ref = useRef();
  const isHover = useHover(ref);
  const debouncedSearch = useDebounce(search, 500);

  const [value, setValue] = useState("");

  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const handlerSearch = (e) => {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={value} onChange={handlerSearch} />
      </div>
      <input {...login} placeholder="Login" />
      <input {...password} placeholder="Password" />
      <button
        onClick={() =>
          console.log("password: ", password.value, "login: ", login.value)
        }
      >
        Show
      </button>
      <Hover />
      <div
        ref={ref}
        style={{
          height: 300,
          width: 300,
          background: isHover ? "green" : "gold",
        }}
      >
        Hover
      </div>
      <List />
    </div>
  );
}

export default App;
