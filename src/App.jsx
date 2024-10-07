import { Route, Routes } from "react-router-dom";
import "./App.css";
import Qrcode from "./Qrcode/Qrcode";
import UserDetails from "./UserDetails/UserDetails";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/qrcode" element={<Qrcode />} />
        <Route exact path="/user-details" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
