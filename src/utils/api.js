const baseUrl = "http://localhost:5174";

// const baseUrl =
//   process.env.NODE_ENV === "production"
//     ? ""
//     : "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status} + ${res.message}`);
  }
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

function getSurvey() {
  return request(`${baseUrl}/surveys/get`);
}

function postSurvey(data) {
  return request(`${baseUrl}/surveys`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      q1: data.Q1,
      q2: data.Q2,
      q3: data.Q3,
    }),
  });
}

export { getSurvey, postSurvey };
