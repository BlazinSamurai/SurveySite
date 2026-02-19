const baseUrl = process.env.NODE_ENV === "http://localhost:5173";

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

export const getSurveys  = () => {
  return request(`${baseUrl}/surveys`);
}

// export default getSurveys