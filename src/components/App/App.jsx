import React, { useEffect, useRef, useState } from "react";
import { initExperience } from "../../Script.js";
import "./App.css";

import { getSurveys } from "../../utils/api.js";

import Form from "../Form/Form.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    initExperience(canvasRef.current);

    // no gui no need for cleanup
    // This runs once when the component enters the page
    // const cleanup = initExperience(canvasRef.current)

    // return () => {
    //   // This runs when the component leaves the page
    //   cleanup()
    // }
  }, []);

  // useEffect(() => {
  //   getSurveys()
  //     .then(console.log("Connected to Backend!"))
  //     .catch((e) => {
  //       console.error(e.message);
  //     });
  // }, []);

  return (
    <div className="page">
      <h1 className="page-title">Employees Survey!</h1>
      <Form></Form>
      <Footer></Footer>
      <canvas ref={canvasRef} className="webgl" />
    </div>
  );
}

export default App;
