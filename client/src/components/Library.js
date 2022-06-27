import React from "react";
import Book from "../components/Book";

const Library = ({ library, removeFromDB, addReadHandler }) => {
  return (
    <div>
      <div className="library">
        {library
          ? library.map((book) => (
              <Book
                title={book.title}
                author={book.author}
                key={book.id}
                id={book.id}
                removeFromDB={removeFromDB}
                addReadHandler={addReadHandler}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default Library;
