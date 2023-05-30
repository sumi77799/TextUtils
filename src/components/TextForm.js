import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleclearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared", "success");
    };

    return (
        <>
            {/* <div className="container my-3" style={{color}}> */}
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}    
                        onChange={handleOnChange}   
                        style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                        id="exampleFormControlTextarea1"
                        rows="8"
                    ></textarea>

                    {/* <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="exampleFormControlTextarea1"
                        rows="8"
                    ></textarea> */}
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                {/* clear a text */}

                <button className="btn btn-primary mx-2" onClick={handleclearClick}>
                    Clear Text
                </button>
            </div>

            <div className="container my-3">
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((word) => word !== '').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((word) => word !== '').length} minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}
