import "./App.css";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Register from "./Pages/Register.jsx";
import Player from "./Pages/Player.jsx";
import { auth } from "./firebase/firebase.js";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User Authenticated");
        setUser(user);
        console.log(user)
      } else {
        navigate("/login");
        console.log("User Not Authenticated");
        setUser(null);
      }
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (user && location.pathname === "/login") {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/login" element={<Register />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
}

export default App;
