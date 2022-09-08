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

  await emailHandler(data);
}

async function emailHandler(data) {
  const { opId: idOp, email, rate: tasa } = data;
  await axios.post(
    process.env.REACT_APP_XPELIN_API,
    {
      idOp,
      email,
      tasa,
    },
    {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  );
}

export async function signIn(user) {
  const { data } = await axios.get(
    `${process.env.REACT_APP_USERS_API}action=getUser&email=${user.email}&password=${user.password}`
  );

  if (data.status === 200) {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: user.email, password: user.password })
    );
  }

  return data.status;
}

export async function signUp(user) {
  const { data } = await axios.post(
    `${process.env.REACT_APP_USERS_API}action=createUser`,
    {
      email: user.email,
      password: user.password,
    },
    {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  );

  if (data.status === 201) {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: user.email, password: user.password })
    );
  }

  return data.status;
}
export function exit() {
  localStorage.removeItem("user");
}
