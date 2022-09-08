import Nav from "./components/Nav";
import Body from "./components/Body";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState({ exists: false });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser({ ...user, exists: true });
    }
  }, []);

  return (
    <div>
      <Nav user={user} />
      <Body user={user} />
    </div>
  );
}

export default App;
