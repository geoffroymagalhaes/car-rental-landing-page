import "./Form.css";
import { useState } from "react";
import axios from "axios";

import FormQuestion from "../../FormQuestion/FormQuestion";
import FormAnswer from "../../FormAnswer/FormAnswer";

const Form = () => {
  const [typeOfCar, setTypeOfCar] = useState("");
  const [buyOrLease, setBuyOrLease] = useState("");
  const [newOrUsed, setNewOrUsed] = useState("");
  const [leasingDuration, setLeasingDuration] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [showmodal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  console.log(typeOfCar);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://hooks.zapier.com/hooks/catch/16422019/37w62x0?em=geoffroymagalhaes23@gmail.com",
        {
          data: {
            type_modele: typeOfCar,
            achat_ou_leasing: buyOrLease,
            vehicule_neuf_ou_location: newOrUsed,
            duree_leasing: leasingDuration,
            nom: firstname,
            prenom: lastname,
            ville: city,
            telephone: phone,
          },
        }
      );
      //   if response good set submitted to true
      console.log(response);
      setShowModal(false);
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="form">
      {!typeOfCar && (
        <>
          <FormQuestion
            question={
              <>
                <span>Quel est le type de modèle que vous</span>
                <br />
                <span>souhaitez tester ?</span>
              </>
            }
          />
          <FormAnswer setAnswers={setTypeOfCar} answer="COMPACTE" />
          <FormAnswer setAnswers={setTypeOfCar} answer="SUV" />
          <FormAnswer setAnswers={setTypeOfCar} answer="ELECTRIQUE & HYBRIDE" />
          <FormAnswer setAnswers={setTypeOfCar} answer="SPORTIVE" />
        </>
      )}
      {typeOfCar && !buyOrLease && (
        <>
          <FormQuestion question="Vous êtes intéressé par ?" />
          <FormAnswer setAnswers={setBuyOrLease} answer="UN ACHAT" />
          <FormAnswer setAnswers={setBuyOrLease} answer="UN LEASING" />
        </>
      )}
      {buyOrLease === "UN ACHAT" && !newOrUsed && (
        <>
          <>
            <FormQuestion question="Pour Quel type de véhicule ?" />
            <FormAnswer setAnswers={setNewOrUsed} answer="NEUF" />
            <FormAnswer setAnswers={setNewOrUsed} answer="OCCASION" />
          </>
        </>
      )}
      {buyOrLease === "UN LEASING" && !leasingDuration && (
        <>
          <>
            <FormQuestion question="Pour Quelle durée ?" />
            <FormAnswer setAnswers={setLeasingDuration} answer="6 MOIS" />
            <FormAnswer setAnswers={setLeasingDuration} answer="12 MOIS" />
            <FormAnswer setAnswers={setLeasingDuration} answer="18 MOIS" />
            <FormAnswer setAnswers={setLeasingDuration} answer="24 MOIS" />
          </>
        </>
      )}
      {((buyOrLease === "UN ACHAT" && newOrUsed) ||
        (buyOrLease === "UN LEASING" && leasingDuration)) && (
        <>
          <FormQuestion question="Vos coordonnées :" />
        </>
      )}
    </section>
  );
};
export default Form;
