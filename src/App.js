import { useRef } from "react";
import "./App.css";
import { Hover } from "./components/Hover";
import { useHover } from "./hooks/useHover";
import { useInput } from "./hooks/useInput";
import List from "./components/List";

function App() {
  const password = useInput("");
  const login = useInput("");
  const ref = useRef();
  const isHover = useHover(ref);

  return (
    <div>
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
