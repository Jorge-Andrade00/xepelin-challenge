import React from "react";
import "../assets/styles/modal.css";
import { useState } from "react";
import { signIn, signUp } from "../data/ratesData";

function LogIn({ setOpenModal }) {
  const [emailInput, setEmailInput] = useState(true);
  const [passInput, setPassInput] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLogIn, setIsLogIn] = useState(true);
  const [form, setForm] = useState({ email: "", password: "" });
  return (
    <div className="modalBackground">
      <div className="modalContainer position-absolute top-50 start-50 translate-middle">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          {isLogIn ? <h1>Ingresa con tu cuenta!</h1> : <h1>Crea tu cuenta!</h1>}
        </div>
        <div className="body">
          <form>
            <div class="mb-3">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Correo
                </span>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => {
                    setEmailInput(!e.target.value.trim());
                    setForm({ ...form, email: e.target.value });
                  }}
                />
              </div>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                Contraseña
              </span>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                onChange={(e) => {
                  setPassInput(!e.target.value.trim());
                  setForm({ ...form, password: e.target.value });
                }}
              />
            </div>

            {loading ? (
              <div className="">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                {error && (
                  <div class="alert alert-danger" role="alert">
                    {isLogIn ? (
                      <>Usuario incorrecto</>
                    ) : (
                      <>Correo ya registrado</>
                    )}
                  </div>
                )}
                <button
                  class="btn btn-primary"
                  disabled={!emailInput && !passInput ? false : true}
                  onClick={async (e) => {
                    setLoading(true);
                    e.preventDefault();
                    if (isLogIn) {
                      if ((await signIn(form)) !== 200) {
                        setError(true);
                      } else {
                        setError(false);
                        window.location.reload(false);
                      }
                    }
                    if (!isLogIn) {
                      if ((await signUp(form)) !== 201) {
                        setError(true);
                      } else {
                        setError(false);
                        window.location.reload(false);
                      }
                    }

                    setLoading(false);
                  }}
                >
                  {isLogIn ? <>Ingresar</> : <>Registrar</>}
                </button>
              </>
            )}
          </form>
        </div>

        <div className="footer">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsLogIn(!isLogIn);
            }}
          >
            {isLogIn ? (
              <>Si eres nuevo, haz click aquí para registrarte</>
            ) : (
              <>Si ya estás registrado, haz click aquí</>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
