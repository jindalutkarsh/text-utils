import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    // setText('You have clicked handleUpClick')
    props.showAlert("Converted To UpperCase", "success");
  };

  const handleLowClick = () => {
    console.log("Lowercase button was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To lowerCase", "success");
    // setText('You have clicked handleUpClick')
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Clear Ho gya :-)", "success");
  };

  const handleCopyClick = () => {
    // let text = document.getElementById("mybox");
    // text.select();
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard (Press windows + v)", "success");
  };

  const handleOnChange = (event) => {
    console.log("handleOnChange button was clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText('New Text');

  // let previewText = "Enter something in textArea to preview it";

  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: `${props.mode === "light" ? "white" : "grey"}`,
              color: `${props.mode === "light" ? "black" : "white"}`,
              caretColor: `${props.mode === "light" ? "black" : "white"}`,
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to upperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to lowerCase
        </button>
        <button disabled={text.length===0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words & {text.length} characters
        </p>
        <p>
          {text.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length * 0.008}{" "}
          Minutes Reading time
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
