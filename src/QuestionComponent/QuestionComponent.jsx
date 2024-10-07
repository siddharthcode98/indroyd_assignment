import { useContext } from "react";
import SingleQuestion from "../SingleQuestion/SingleQuestion";
import { UserDetailsContext } from "../context";

// eslint-disable-next-line react/prop-types
export default function QuestionComponent({ listOfQuestions }) {
  const questions = listOfQuestions;
  //console.log(questions);
  const { number } = useContext(UserDetailsContext);
  return (
    <div>
      QuestionComponent
      <SingleQuestion questionDetails={questions[`${number}`]} />
    </div>
  );
}
