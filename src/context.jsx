/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

export const UserDetailsContext = createContext();

// eslint-disable-next-line react/prop-types
export default function PlayerDetails({ children }) {
  const [listOfUsers, updateListOfUsers] = useState([
    { id: 1, playerUsername: "demoPlayer1", playername: "player1" },
    { id: 2, playerUsername: "demoPlayer2", playername: "player2" },
  ]);
  const [number, setQuestionNumber] = useState(0);
  return (
    <UserDetailsContext.Provider
      value={{ listOfUsers, updateListOfUsers, number, setQuestionNumber }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
}
