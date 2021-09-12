import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState("Enter the text and start working on it...");

    const handelOnChange = (event)=>{
        // console.log("Onchange");
        setText(event.target.value);
    }

    const upperCaseClick = ()=>{
        // console.log("Uppercase clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.setNewAlert("success","Converted to Upper case!");

    };
    const lowerCaseClick = ()=>{
        // console.log("lowercase clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.setNewAlert("success","Converted to lower case!");

    }
    const copyClick = (event) =>{
        let myText = document.getElementById("myTextarea");
        myText.select();
        navigator.clipboard.writeText(myText.value);
        props.setNewAlert("success","Text is copied!");

    }
    const delExtraSpacesClick = (event) =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.setNewAlert("success","Deleted extra spaces!");
    }
    const cutClick = (event) =>{
        // let myText = document.getElementById("myTextarea");
        // myText.select();
        // navigator.clipboard.writeText(myText.value)
        copyClick();
        clearClick();
        props.setNewAlert("success","Text is cut!");

    }
    const clearClick = (event) =>{
        setText("")
        props.setNewAlert("success","Text cleared!");
    }
    return (
    <div className="pb-3" style={{color:props.mode==="dark"?"black":"white"}}>
        <div className="container my-4" >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control border border-primary bg-{mode}" id="myTextarea" 
                style={{backgroundColor:props.mode==="dark"?"white":"#2a2b2c", color:props.mode==="dark"?"black":"white"}} 
                value={text} onChange={handelOnChange} rows="12"></textarea>
            </div>
            <div className="d-flex flex-md-row flex-column justify-content-center">
                <button className="mx-3 my-3 btn btn-outline-primary" onClick={upperCaseClick}>Convert all to UPPER CASE</button>
                <button className="mx-3 my-3 btn btn-outline-primary" onClick={lowerCaseClick}>Convert all to lower case</button>
                <button className="mx-3 my-3 btn btn-outline-primary" onClick={delExtraSpacesClick}>Delete extra spaces</button>
                <button className="mx-3 my-3 btn btn-outline-primary" onClick={cutClick}>Cut</button>
                <button className="mx-3 my-3 btn btn-outline-primary" onClick={copyClick}>Copy</button>
                <button className="mx-3 my-3 btn btn-outline-primary" onClick={clearClick}>Clear</button>
            </div>
        </div>
        <div className="container border border-primary bg-{mode}">
            <h2>Your Text analysis:</h2>
            Words: {text.length>0 ? (text[text.length-1]!==" "?text.split(" ").length:text.split(" ").length-1) : 0} <br />
            Characters: {text.length} 
            <h3>Preview:</h3>
            {text.length>0?text:"Enter some text to preview"}
        </div>
    </div>
    )
};

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
};
TextForm.defaultProps = {
     heading: "Heading"
};