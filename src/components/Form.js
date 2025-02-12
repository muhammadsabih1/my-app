import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");

  const handleUpClick = (event) => {
    event.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = (event) => {
    event.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClClick = (event) => {
    event.preventDefault();
    let newText = "";
    setText(newText);
    props.showAlert("Cleared!", "success");
  };

  const handleCoClick = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpaces = (event) => {
    event.preventDefault();
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces have been removed!", "success");
  };

  const handleReverseString = (event) => {
    event.preventDefault();
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("String has been successfully reversed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={props.mode === 'dark'?{color: 'white'}:{color: 'black'}}>
        <h1>Enter the text to be analyzed below</h1>
        <br />
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          rows="3"
          cols="50"
          style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'black'}}
        ></textarea>
        <br />
        <br />
        <br />
        <button className="btn btn-primary mx-1" onClick={handleClClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCoClick}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleReverseString}>
          Reverse text
        </button>
      </div>
      <br />
      <div className="container" style={props.mode === 'dark'?{color: 'white'}:{color: 'black'}}>
        <h1>Text Analysis</h1>
        <p>
          <b>{text.split(" ").length}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> minutes read
        </p>
      </div>
    </>
  );
}
