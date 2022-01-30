import React from "react";
 

export default function Textform(props) {
  return (
    <div>
        <h1>{props.test}</h1>
      <form>
        <div className="form-group my-3">
          <label htmlFor="mybox">Type Here</label>
          <textarea className="form-control" id="mybox" rows="10"></textarea>
        </div>
        </form>
        <div className="btn btn-primary">Convert to Uppercase</div>
    </div>
  );
}
