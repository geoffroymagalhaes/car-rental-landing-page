import { useState } from "react";
import "./ContactDetails.css";
import axios from "axios"; // Make sure to import axios

const ContactDetails = ({
  setLastname,
  setFirstname,
  setCity,
  setPhone,
  setShowModal,
}) => {
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState("");

  const handlePhoneConvertion = (e) => {
    let formattedNumber = e.target.value.replace(/\D/g, "");
    if (formattedNumber.length === 10) {
      formattedNumber = `+33${formattedNumber.substring(1)}`;
    }
    setPhone(formattedNumber);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!/^\d*$/.test(zipcode)) {
      setError("Zipcode must be a number");
    } else if (zipcode.length < 5) {
      setError("Zipcode must be 5 digits long");
    } else {
      setError("");
      try {
        const { data } = await axios.get(
          `https://geo.api.gouv.fr/communes?codePostal=${zipcode}`
        );
        if (data.length > 0) {
          setCity(data[0].nom);
          setShowModal(true);
        } else {
          setError("Invalid zipcode");
        }
      } catch (error) {
        console.log(error);
        setError("Failed to fetch city data");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="fullname">
        <div>
          <label htmlFor="firstname"> PRÉNOM</label>
          <input
            placeholder="Écrire"
            type="text"
            id="firstname"
            name="firstname"
            size="22"
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname"> NOM</label>
          <input
            placeholder="Écrire"
            type="text"
            id="lastname"
            name="lastname"
            size="22"
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="number-details">
        <div>
          <label htmlFor="zipcode">CODE POSTAL</label>
          <input
            placeholder="75008"
            type="text"
            id="zipcode"
            name="zipcode"
            minLength="5"
            maxLength="5"
            size="15"
            onChange={(e) => setZipcode(e.target.value)}
            required
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div>
          <label htmlFor="phone">TELEPHONE</label>
          <input
            placeholder="06 XX XX XX XX"
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            required
            size="25"
            onChange={handlePhoneConvertion}
          />
        </div>
      </div>
      <div className="flex-submit">
        <input className="submit" type="submit" value="CONTINUER" />
      </div>
    </form>
  );
};

export default ContactDetails;
