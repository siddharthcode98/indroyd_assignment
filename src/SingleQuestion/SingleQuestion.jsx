import { useContext } from "react";
import { UserDetailsContext } from "../context";

// eslint-disable-next-line react/prop-types
export default function SingleQuestion({ questionDetails }) {
  const details = questionDetails;
  const { question, correctAnswer, options } = details;
  const { setQuestionNumber } = useContext(UserDetailsContext);
  const handleQuestion = (e) => {
    if (correctAnswer === e.target.value) {
      console.log("answer is correct");
    } else {
      console.log("answer is wrong");
    }
    setTimeout(() => {
      setQuestionNumber(Math.floor(Math.random() * 10));
    }, 2000);
  };
  return (
    <div>
      <div>
        <fieldset onChange={(e) => handleQuestion(e)}>
          <legend>{question}</legend>
          <div>
            <span>
              <input type="radio" name="option" value={options[0]} />
              <label>{options[0]}</label>;
            </span>
            <span>
              <input type="radio" name="option" value={options[1]} />
              <label>{options[1]}</label>;
            </span>
            <span>
              <input type="radio" name="option" value={options[2]} />
              <label>{options[2]}</label>;
            </span>
            <span>
              <input type="radio" name="option" value={options[3]} />
              <label>{options[3]}</label>;
            </span>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
