import "./FormAnswer.css";

const FormAnswer = ({ answer, setAnswers }) => {
  return (
    <p
      onClick={() => {
        setAnswers(answer);
      }}
      className="answer"
    >
      {answer}
    </p>
  );
};

export default FormAnswer;
