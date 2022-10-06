import React from "react";
import "../styles/Tambo.css";

const Tambo = () => {
  return (
    <div className="Tambo">
      <div className="Tambo-container">
        <h1 className="title">Registro de Tambo</h1>
        <form action="/" className="form">
          <div>
            <label for="code" className="label">
              Codigo
            </label>
            <input type="text" name="code" className="input input-name" />
            <label for="location" className="label">
              Ubicacion
            </label>
            <input type="text" name="location" className="input input-name" />
            <label for="cows-list" className="label-cows">
              Lista de vacas
            </label>
            <a href="./cows">Lista de Bavas </a>
            <hr />

            <label for="cap-production" className="label">
              Capital de produccion
            </label>
            <input
              type="number"
              name="cap-production"
              className="input input-name"
            />
            <label for="production" className="label">
              Produccion
            </label>
            <input
              type="double"
              name="production"
              className="input input-name"
            />
            <label for="total" className="label">
              Total de Produccion
            </label>
            <p>Total</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tambo;
