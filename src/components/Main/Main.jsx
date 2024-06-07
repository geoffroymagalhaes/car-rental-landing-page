// import component
import Form from "../Form/Form";

// import css sheet
import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="main-text">
        <h1>
          DE NOUVELLES ÉMOTIONS <br />
          COMMMENCENT ICI
        </h1>
        <p>
          Réservez un essai gratuitement en remplissant le formulaire et faites{" "}
          <br />
          connaissance avec l'univers Alfa Romeo.
        </p>
        {/* display form component */}
        <Form />
      </div>
    </main>
  );
};

export default Main;
