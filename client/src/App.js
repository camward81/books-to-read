import React, { useState, useEffect } from "react";
import axios from "axios";
//styles
import styles from "./styles/app.scss";
//components
import Form from "./components/Form";
import Library from "./components/Library";
import ReadBooks from "./components/ReadBooks";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

function App() {
  //state
  const id = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [library, setLibrary] = useState("");
  const [inputError, setInputError] = useState("");
  const [menu, setMenu] = useState(false);
  const [read, setRead] = useState("");

  useEffect(() => {
    document.getElementById("title").focus();
    axios
      .get("http://localhost:3001/library")
      .then((response) => {
        setLibrary(response.data);
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/readbooks")
      .then((response) => {
        setRead(response.data);
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  //add to DB (books)
  const addToDB = () => {
    axios
      .post("http://localhost:3001/create", {
        title: title,
        author: author,
      })
      .then((error, result) => {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
        }
      });
  };

  //Get from DB (books)
  const getFromDB = () => {
    axios.get("http://localhost:3001/library").then((response) => {
      setLibrary(response.data);
      console.log(response.data);
    });
  };

  //Remove from DB (books)
  const removeFromDB = ({ id }) => {
    axios.delete(`http://localhost:3001/delete/${id}`);
    getFromDB();
    window.location.reload();
  };

  //add to DB (read_books)
  const addToRead = ({ title, author }) => {
    axios
      .post("http://localhost:3001/add", {
        title: title,
        author: author,
      })
      .then((error, result) => {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
        }
      });
  };

  //Get from DB (read_books)
  const getReadBooks = () => {
    axios.get("http://localhost:3001/readbooks").then((response) => {
      setRead(response.data);
      console.log(response.data);
    });
  };

  //Remove from DB (read_books)
  const removeFromRead = ({ id }) => {
    axios.delete(`http://localhost:3001/readremove/${id}`);
    getReadBooks();
    window.location.reload();
  };

  //add to read_books handler
  const addReadHandler = ({ title, author, id }) => {
    removeFromDB({ id });
    addToRead({ title, author });
    getReadBooks();
    window.location.reload();
  };

  //form handler
  const submitBook = (e) => {
    e.preventDefault();
    if (title !== "" && author !== "") {
      addToDB();
      getFromDB();
      //Reset Inputs
      window.location.reload();
    } else {
      setInputError("Please enter title/author.");
    }
  };

  //toggle menu
  const toggle = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="App" styles={styles} library={library} read={read}>
      <ReadBooks
        menu={menu}
        toggle={toggle}
        title={title}
        author={author}
        read={read}
        id={id}
        removeFromRead={removeFromRead}
      />
      <div className="header">
        <FontAwesomeIcon icon={faBookOpen} className="icon" />
        <h1>Books to Read</h1>
      </div>
      <Form
        setTitle={setTitle}
        setAuthor={setAuthor}
        submitBook={submitBook}
        inputError={inputError}
      />
      <Library
        library={library}
        title={title}
        author={author}
        key={id}
        id={id}
        removeFromDB={removeFromDB}
        addReadHandler={addReadHandler}
      />
    </div>
  );
}

export default App;
