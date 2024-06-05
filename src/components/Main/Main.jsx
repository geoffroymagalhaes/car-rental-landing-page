import "./Main.css";
import Form from "../Form/Form";

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
        <Form />
      </div>
    </main>
  );
};

export default Main;
