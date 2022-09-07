import axios from "axios";

export async function getRates() {
  return axios.get(`${process.env.REACT_APP_RATES_API}action=getRates`);
}

export async function updateRates(data) {
  await axios.post(
    `${process.env.REACT_APP_RATES_API}action=updateRates`,
    {
      rate: data.rate,
      email: data.email,
      column: data.column,
    },
    {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  );
}
