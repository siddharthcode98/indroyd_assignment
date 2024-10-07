import { Route, Routes } from "react-router-dom";
import "./App.css";
import Qrcode from "./Qrcode/Qrcode";
import UserDetails from "./UserDetails/UserDetails";
import PlayerDetails from "./context";
import GameArea from "./GameArea/GameArea";

function App() {
  return (
    <PlayerDetails>
      <Routes>
        <Route exact path="/qrcode" element={<Qrcode />} />
        <Route exact path="/user-details" element={<UserDetails />} />
        <Route exact path="/" element={<GameArea />} />
      </Routes>
    </PlayerDetails>
  );
}

export default App;
