import "./Modal.css";
const Modal = ({ closeModal, city }) => {
  return (
    <>
      <div onClick={closeModal} className="modalBackground"></div>
      <div className="modalContent">
        <p>
          Confirmation de votre ville pour la récupération de votre véhicule :
        </p>
        <div className="city">{city}</div>
        <div onClick={closeModal} className="">
          MODIFIER
        </div>
        <div className="submit">CONTINUER</div>
      </div>
    </>
  );
};
export default Modal;
