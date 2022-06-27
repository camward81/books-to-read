import React from "react";

const ReadB = ({ title, author, id, removeFromRead }) => {
  return (
    <div className="read-book">
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <div className="hidden-2" onClick={() => removeFromRead({ id })}>
        <p className="line-1"></p>
        <p className="line-2"></p>
      </div>
    </div>
  );
};

export default ReadB;
