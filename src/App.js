import "./App.css";
import { useInput } from "./hooks/useInput";

function App() {
  const password = useInput("");
  const login = useInput("");

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
    </div>
  );
}

export default App;
