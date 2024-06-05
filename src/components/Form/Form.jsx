import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [typeOfCar, setTypeOfCar] = useState("");
  const [buyOrLease, setBuyOrLeas] = useState("");
  const [newOrUsed, setNewOrUsed] = useState("");
  const [leasingDuration, setLeasingDuration] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [showmodal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
  return <main></main>;
};
export default Form;
