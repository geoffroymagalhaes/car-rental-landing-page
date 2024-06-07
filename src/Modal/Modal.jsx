// import css sheet
import "./Modal.css";

const Modal = ({ closeModal, city, handleSubmit }) => {
  return (
    <>
      <div onClick={closeModal} className="modalBackground"></div>
      <div className="modalContent">
        <div className="text-modal">
          <p>
            Confirmation de votre ville pour la récupération de votre véhicule :
          </p>
          <div className="city">{city}</div>{" "}
        </div>
        <div className="modal-button">
          <div onClick={closeModal} className="edit">
            MODIFIER
          </div>
          <div onClick={handleSubmit} className="submit">
            CONTINUER
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
