import logo from "../assets/img/xepelin-logo-2.jpeg";

const Nav = () => {
  return (
    <div>
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
          <button
            class="btn"
            type="submit"
            style={{
              borderLeftColor: "#ffb166",
              borderRightColor: "#e23fc0",
              borderTopColor: "#f4432e",
              borderBottomColor: "#f4432e",
            }}
          >
            Sign in
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
