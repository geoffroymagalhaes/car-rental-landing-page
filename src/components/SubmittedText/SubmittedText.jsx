// import css sheet
import "./SubmittedText.css";

const SubmittedText = () => {
  return (
    <div>
      <div className="bookingtext">
        <h1>Votre réservation a bien été prise en compte.</h1>
        <h1>
          Vous serez contacté dans{" "}
          <span className="underline">un delai de 48H.</span>{" "}
        </h1>
      </div>

      <div className="thanks">
        <h1>L'équipe Alfa Romeo, vous remercie.</h1>
      </div>
    </div>
  );
};

export default SubmittedText;
