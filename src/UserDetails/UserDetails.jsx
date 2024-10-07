import { useContext, useState } from "react";
import { UserDetailsContext } from "../context";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function UserDetails() {
  const { updateListOfUsers } = useContext(UserDetailsContext);

  const [nameObj, setNameObj] = useState({ name: "", username: "" });
  const navigate = useNavigate();

  const updateUsername = (e) => {
    e.preventDefault();
    console.log(nameObj);
    //update the context of the players
    updateListOfUsers((prevState) => [
      ...prevState,
      {
        id: uuidv4(),
        playerUsername: nameObj.username,
        playername: nameObj.name,
      },
    ]);
    //updating the input fields to empty string after the state is updated
    setNameObj({ name: "", username: "" });
    //navogating to home page
    navigate("/");
  };

  return (
    <div className="bg-KBC-Background-Image h-screen w-full  flex flex-col justify-center bg-contain p-3">
      <div className="bg-gradient-to-r from-kbc-color1 to-kbc-color2 h-[300px] flex flex-col justify-center rounded-md shadow-md  text-cyan-50 gap-3 p-2">
        <h1 className="text-center font-bold text-lg ">Enter your Details</h1>
        <form
          className="flex flex-col  gap-3 "
          onSubmit={(e) => updateUsername(e)}
        >
          <div className=" flex flex-col p-2 rounded-md gap-2 ">
            <label id="name">Name</label>
            <input
              htmlFor="name"
              placeholder="Enter Your Name"
              className=" bg-kbc-color1 p-1  border-kbc-color2 border-2"
              value={nameObj.name}
              onChange={(e) => setNameObj({ ...nameObj, name: e.target.value })}
            />
          </div>
          <div className=" flex flex-col p-2 rounded-md  gap-2">
            <label id="username">Username</label>
            <input
              htmlFor="username"
              placeholder="Enter Your Username"
              className=" bg-kbc-color1 p-1 border-kbc-color2 border-2"
              value={nameObj.username}
              onChange={(e) =>
                setNameObj({ ...nameObj, username: e.target.value })
              }
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-kbc-color2 text-white p-2 rounded-md"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
