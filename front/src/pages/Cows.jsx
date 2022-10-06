import React from "react";

export const Cows = () => {
  return (
    <div className="Cows">
      <div className="Cows-container">
        <h1 className="title">Registro de Tambo</h1>
        <form action="/" className="form">
          <div>
            <label for="code" className="label">
              Codigo
            </label>
            <input type="text" name="code" className="input input-name" />
          </div>
        </form>
      </div>
    </div>
  );
};
