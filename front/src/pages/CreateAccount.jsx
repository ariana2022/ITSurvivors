import React, { useRef } from "react";
import "../styles/CreateAccount.css";

const CreateAccount = () => {
  const form = useRef(null);

  const login = () => {
    document.getElementById("login").href = "Login.jsx";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

    const data = {
      username: formData.get("name"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      password: formData.get("password"),
      confPassword: formData.get("confirm-password"),
    };
    console.log(data);
  };
  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">Crear Cuenta</h1>
        <form action="/" className="form" ref={form}>
          <div>
            <label for="name" className="label">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="input input-name"
            />
            <label for="name" className="label">
              Apellidos
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Apellidos"
              className="input input-name"
            />
            <label for="email" className="label">
              Correo electronico
            </label>
            <input
              type="text"
              name="email"
              placeholder="ejemplo@ejemplo.com"
              className="input input-email"
            />
            <label for="password" className="label">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              className="input input-password"
            />
            <label for="password" className="label">
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="confirm-password"
              placeholder="*********"
              className="input input-password"
            />
          </div>
          <button
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Crear
          </button>
        </form>
        <button
          className="secondary-button signup-button"
          onClick={() => login}
        >
          Ya tengo cuenta
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
