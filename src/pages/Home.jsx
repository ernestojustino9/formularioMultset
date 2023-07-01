import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { useForm } from "../components/hooks/useForm";
import ReviewForm from "../components/ReviewForm";
import Thanks from "../components/Thanks";
import UserForm from "../components/UserForm";
import Steps from "../components/Steps";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

const Home = () => {
  const [data, setData] = useState(formTemplate);
  //
  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };
  //
  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <Thanks data={data} />,
  ];
  const {
    currentStep,
    currentComponent,
    changeStape,
    isFirstStep,
    isLastStep,
  } = useForm(formComponents);
  return (
    <div className="appH">
      <div className="headerApp">
        <h2>Deixe sua avaliacao</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulario abaixo para
          avaliar o produto
        </p>
      </div>
      {/*  */}
      <div className="form-container">
        <p>
          <Steps currentStep={currentStep} />
        </p>
        <form onSubmit={(e) => changeStape(currentStep + 1, e)}>
          {/*  */}
          <div className="inputs-container">{currentComponent}</div>
          {/*  */}
          <div className="actions">
            {/* nao permite voltar sem algo nao sendo criado */}
            {!isFirstStep && (
              <button
                type="button"
                onClick={() => changeStape(currentStep - 1)}
              >
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {/*  */}
            {!isLastStep ? (
              <button type="submit">
                <span>Avancar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
            {/*  */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
