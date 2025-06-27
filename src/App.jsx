import { Routes, Route } from "react-router-dom";
import UnoLobby from "./components/UnoLobby";
import UnoGame from "./components/UnoGame";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UnoLobby />} />
      <Route path="/game/:roomId" element={<UnoGame />} />
    </Routes>
  );
}
