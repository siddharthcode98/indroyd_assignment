import { useContext, useEffect, useState } from "react";
import QuestionComponent from "../QuestionComponent/QuestionComponent";
import PlayersComponent from "../PlayersComponent/PlayersComponent";
import { UserDetailsContext } from "../context";
import { Bars } from "react-loading-icons";


export default function GameArea() {
  const [questionsList, setQuestion] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { listOfUsers } = useContext(UserDetailsContext);

  useEffect(() => {
    try {
      const getQuestions = async () => {
        const response = await fetch(
          "https://the-trivia-api.com/v2/questions/"
        );
        const questions = await response.json();
        const modifiedQuestionList = questions.map((item) => {
          return {
            question: item.question.text,
            correctAnswer: item.correctAnswer,
            options: [...item.incorrectAnswers, item.correctAnswer],
          };
        });
        setQuestion(modifiedQuestionList);
        setLoading(!isLoading);
      };
      getQuestions();
    } catch (error) {
      console.log(error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      GameArea
      {isLoading ? (
        <Bars />
      ) : (
        <div>
          <QuestionComponent listOfQuestions={questionsList} />
          <PlayersComponent players={listOfUsers} />
        </div>
      )}
    </div>
  );
}
