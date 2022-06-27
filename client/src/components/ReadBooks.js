import React from "react";
import ReadB from "../components/ReadB";

const ReadBooks = ({ menu, toggle, title, author, read, removeFromRead }) => {
  return (
    <div>
      <div className="read-header" onClick={toggle}>
        <div className="hamburger">
          <div className="top"></div>
          <div className="middle"></div>
          <div className="bottom"></div>
        </div>
        {/* <h4>Books I've Read</h4> */}
      </div>
      {menu ? (
        <div
          className="read-container"
          id="read-container"
          title={title}
          author={author}
        >
          <h1>Books I've Read</h1>
          {read
            ? read.map((book) => (
                <ReadB
                  title={book.title}
                  author={book.author}
                  id={book.id}
                  key={book.id}
                  removeFromRead={removeFromRead}
                />
              ))
            : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ReadBooks;
