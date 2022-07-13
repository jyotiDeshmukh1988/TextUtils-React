import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log(text);
    const newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleClClick = () => {
    console.log(text);
    const newtext = '';
    setText(newtext);
    props.showAlert("Text Cleared!", "success");
  }
  const handleCwClick = () => {
    console.log(text);
    const newtext = (text + '').replace(/^(.)|\s(.)/g, function ($1) {
      return $1.toUpperCase();});
    setText(newtext);
  }
  const handleLpClick = () => {
    console.log(text);
    const newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  }
  const handleCopy = () => {
    var text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }
  const handleExtraSpaces = () => {
    let newtext = text.split(/[  ]+/);
    console.log(newtext);
    setText(newtext.join(' '));
    props.showAlert("Extra spaces removed!", "success");
  }
  const [text,setText] = useState('');
  //text ="new text"; // wrong way to change the state
 // setText("new text"); // correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLpClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCwClick}>Captitalize Words</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Select All</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
