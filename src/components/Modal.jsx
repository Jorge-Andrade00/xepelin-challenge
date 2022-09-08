import { useState } from "react";
import "../assets/styles/modal.css";
import { updateRates } from "../data/ratesData";

function Modal({ setOpenModal, selectedRate, setSelectedRate }) {
  const [emailInput, setEmailInput] = useState(false);
  const [rateInput, setRateInput] = useState(false);
  return (
    <div className="modalBackground">
      <div className="modalContainer position-absolute top-50 start-50 translate-middle">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
              setSelectedRate({});
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Editar la tasa: {selectedRate.opId}?</h1>
        </div>
        <div className="body">
          <form>
            <div class="mb-3">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Email
                </span>
                <input
                  type="text"
                  class="form-control"
                  value={selectedRate.email}
                  onChange={(e) => {
                    setEmailInput(!e.target.value.trim());
                    setSelectedRate({ ...selectedRate, email: e.target.value });
                  }}
                />
              </div>
            </div>
            <div class="mb-3">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Tasa
                </span>
                <input
                  type="number"
                  class="form-control"
                  value={selectedRate.rate}
                  step={0.1}
                  min={0.1}
                  onChange={(e) => {
                    setRateInput(!e.target.value.trim());
                    setSelectedRate({ ...selectedRate, rate: e.target.value });
                  }}
                />
              </div>
            </div>
            <button
              class="btn btn-primary"
              disabled={!emailInput && !rateInput ? false : true}
              onClick={async () => {
                await updateRates(selectedRate);
              }}
            >
              Editar
            </button>
          </form>
        </div>

        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
              setSelectedRate({});
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
