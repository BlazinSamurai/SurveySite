import "./Form.css";

function Form() {
  return (
    <form className="form">
      <h4 className="form__title">Form Title</h4>
      <fieldset className="form__container">
        {/* Question 1 */}
        <div className="form__question">
          <legend>
            1. Please select which one is more valuable to have when looking for
            a potential candiate:
          </legend>
          <label htmlFor="A">
            <input
              type="radio"
              id="A"
              name="questionOne"
              value="A candiate with the required skills and experience."
              required
            />{" "}
            A candiate with the required skills and experience.
          </label>
          <label htmlFor="B">
            <input
              type="radio"
              id="B"
              name="questionOne"
              value="A candiate with the ability to adapt to new tech stacks."
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
          <label htmlFor="A">
            <input
              type="radio"
              id="A"
              name="questionTwo"
              value="A candiate with the required skills and experience."
              required
            />{" "}
            A candiate with the required skills and experience.
          </label>
          <label htmlFor="B">
            <input
              type="radio"
              id="B"
              name="questionTwo"
              value="A candiate with the ability to adapt to new tech stacks."
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
          <label htmlFor="other" className="form__question-text-label">
            {/* <input
              type="text"
              id="other"
              name="questionThree"
              className="form__question-text-input"
              minLength="3"
              maxLength="500"
              placeholder="It really help when a candiate has the following . . . "
            /> */}
            <textarea
              id="other"
              name="questionThree"
              className="form__question-text-input"
              placeholder="The best way for candiate to standout is . . ."
            ></textarea>
          </label>
        </div>
      </fieldset>
      {/* submit button */}
      <div>
        <button type="submit" className="form__button-submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
