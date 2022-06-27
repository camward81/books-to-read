import React from "react";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Book = ({ title, author, id, removeFromDB, addReadHandler }) => {
  return (
    <div>
      <div className="book">
        <h1>{title}</h1>
        <h2>{author}</h2>
        <div className="hidden">
          <div
            className="hidden-1"
            onClick={() => addReadHandler({ title, author, id })}
          >
            <FontAwesomeIcon icon={faCheck} className="check-icon" />
            <div className="triangle"></div>
            <div className="add">
              <p>Mark as Read</p>
            </div>
          </div>
          <div className="hidden-2" onClick={() => removeFromDB({ id })}>
            <p className="line-1"></p>
            <p className="line-2"></p>
            <div className="triangle"></div>
            <div className="delete">
              <p>Remove</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
