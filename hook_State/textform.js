//import React from "react";
 //State k iye imort krna hai -->> {usestate}
 //Todo: mandatory step 
import React, {useState} from "react";
                // imp
                                  //imp
export default function Textform(props) {


    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText) // imp
    }                      //imp concept
    const handleOnChange = (event)=>{
        // console.log("On change");
      //imp concept
        setText(event.target.value)
    }
//State k liye
//Todo: mandatory step 
    //change                      //change
const [text, setText] = useState('enter text here');

//text = "new text"; //wrong way to change the state
//setText = "new text";//correct way to change state

    return (
    <div>
        <h1>{props.test}</h1>
      <form>
        <div className="form-group my-3">
          <label htmlFor="mybox">Type Here</label>
                                              // change      //change                
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        </form>                             //change
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}
