import logo from "../assets/img/xepelin-logo-2.jpeg";
import { useState } from "react";
import LogIn from "./LogIn";
import { exit } from "../data/ratesData";

const Nav = ({ user }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {modalOpen && <LogIn setOpenModal={setModalOpen} />}
      <nav className="navbar">
        <div>
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="xepelin-logo"
              width="215"
              height="101"
              class="d-inline-block align-text-top"
            />
          </a>
        </div>
        <div
          class="d-flex"
          style={{
            marginRight: 30,
          }}
        >
          {user.exists ? (
            <button
              onClick={() => {
                exit();
                window.location.reload(false);
              }}
              class="btn"
              type="submit"
              style={{
                borderLeftColor: "#ffb166",
                borderRightColor: "#e23fc0",
                borderTopColor: "#f4432e",
                borderBottomColor: "#f4432e",
              }}
            >
              Salir
            </button>
          ) : (
            <button
              onClick={() => setModalOpen(true)}
              class="btn"
              type="submit"
              style={{
                borderLeftColor: "#ffb166",
                borderRightColor: "#e23fc0",
                borderTopColor: "#f4432e",
                borderBottomColor: "#f4432e",
              }}
            >
              Ingresar
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
