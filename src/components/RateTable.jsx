import { useEffect, useState } from "react";
import { getRates } from "../data/ratesData";
import Modal from "./Modal";

const RateTable = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const [rates, setRates] = useState([]);
  const [selectedRate, setSelectedRate] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function dataHandler() {
      const { data } = await getRates();

      setRates(data);
      setLoading(false);
    }

    dataHandler();
  }, []);

  const selectRate = (id) => {
    setSelectedRate(rates.find((rate) => rate.opId === id));
  };

  return (
    <div>
      {modalOpen && (
        <Modal
          setOpenModal={setModalOpen}
          selectedRate={selectedRate}
          setSelectedRate={setSelectedRate}
        />
      )}
      <table class="table">
        {loading ? (
          <div className="position-absolute top-50 start-50 translate-middle">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Tasa</th>
                <th scope="col">Email</th>
                {user.exists && <th scope="col">Accion</th>}
              </tr>
            </thead>
            <tbody>
              {rates.map((elem) => {
                return (
                  <tr>
                    <th scope="row">{elem.opId}</th>
                    <td>{elem.rate}</td>
                    <td>{elem.email}</td>
                    {user.exists && (
                      <td>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => {
                            selectRate(elem.opId);
                            setModalOpen(true);
                          }}
                        >
                          Editar
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
};

export default RateTable;
