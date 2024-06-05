import "./FormAnswer.css";

const FormAnswer = ({ answer, setTypeOfCar }) => {
  return (
    <p
      onClick={() => {
        setTypeOfCar(answer);
      }}
      className="answer"
    >
      {answer}
    </p>
  );
};

export default FormAnswer;
