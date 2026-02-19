import "./Form.css";

import { useEffect, useState } from "react";

function Form() {
  const [isValid, setIsValid] = useState(false);

  // Update validation whenever the form is clicked
  const handleFormChange = (e) => {
    const formData = new FormData(e.currentTarget);
    const q1 = formData.get("q1");
    const q2 = formData.get("q2");

    // Valid if both radio groups have a selection
    setIsValid(!!q1 && !!q2);
  };

  const handleSurveySubmit = (e) => {
    e.preventDefault();

    // Read all values at once
    const formData = new FormData(e.currentTarget);
    const data = {
      Q1: formData.get("q1"),
      Q2: formData.get("q2"),
      Q3: formData.get("q3"),
    };

    console.log("Survey Submitted:", data);
  };
  return (
    <form
      className="form"
      onSubmit={handleSurveySubmit}
      onChange={handleFormChange}
    >
      <h4 className="form__title">Form Title</h4>
      <fieldset className="form__container">
        {/* Question 1 */}
        <div className="form__question">
          <legend>
            1. Please select which one is more valuable to have when looking for
            a potential candiate:
          </legend>
          <label htmlFor="q1A">
            <input
              type="radio"
              id="q1A"
              name="q1"
              value="A candiate with the required skills and experience."
              // onChange={handleInputChange}
              // readOnly={console.log("readOnly activated!")}
              // onClick={console.log("onClick activated!")}
              // required
            />{" "}
            A candiate with the required skills and experience.
          </label>
          <label htmlFor="q1B">
            <input
              type="radio"
              id="q1B"
              name="q1"
              value="A candiate with the ability to adapt to new tech stacks."
              // required
            />{" "}
            A candiate with the ability to adapt to new tech stacks.
          </label>
        </div>
        {/* Question 2 */}
        <div className="form__question">
          <legend>
            2. Please select which one is more valuable to have when looking for
            a potential candiate:
          </legend>
          <label htmlFor="q2A">
            <input
              type="radio"
              id="q2A"
              name="q2"
              value="A candiate with the required skills and experience."
              // required
            />{" "}
            A candiate with the required skills and experience.
          </label>
          <label htmlFor="q2B">
            <input
              type="radio"
              id="q2B"
              name="q2"
              value="A candiate with the ability to adapt to new tech stacks."
              // required
            />{" "}
            A candiate with the ability to adapt to new tech stacks.
          </label>
        </div>
        {/* Text Input */}
        <div className="form__question">
          <legend>
            3. If you have any other advice, or tips, to help navigate or land a
            career in the tech field be describe here(optional):
          </legend>
          <label htmlFor="q3txt" className="form__question-text-label">
            <textarea
              id="q3txt"
              name="q3"
              className="form__question-text-input"
              minLength="3"
              maxLength="500"
              placeholder="The best way for candiate to standout is . . ."
            ></textarea>
          </label>
        </div>
      </fieldset>
      {/* submit button */}
      <div>
        <button
          type="submit"
          className="form__button-submit"
          disabled={!isValid}
        >
          {" "}
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
