import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5 ">
              <div className="mb-5 flex-center position-relative">
                <a className="tw-ic position-absolute top-50 start-50 translate-middle">
                  <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x ">
                    {" "}
                  </i>
                </a>
                <a className="li-ic position-absolute top-0 start-0 translate-middle">
                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="li-ic position-absolute top-100 start-100 translate-middle">
                  <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a href="/"> Jorgito.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
