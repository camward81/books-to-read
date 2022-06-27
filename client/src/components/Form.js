import React from "react";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const Form = ({ setTitle, setAuthor, submitBook, inputError }) => {
  return (
    <div>
      <form>
        <div className="title-container">
          <label htmlFor="title">Add Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="author-container">
          <label htmlFor="author">Add Author:</label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <button type="submit" onClick={submitBook}>
          <FontAwesomeIcon icon={faBookOpen} className="icon" />
        </button>
      </form>
      {inputError !== "" ? (
        <div className="input-error">
          <p>{inputError}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
