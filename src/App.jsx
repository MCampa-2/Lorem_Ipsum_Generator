import { useState } from "react";
import text from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [textValue, setText] = useState([]);

  const handleChange = (e) =>{
    setCount(e.target.value);
  }
 
  const handleSubmit = (e) =>{
    e.preventDefault();
    const amount = parseInt(count);
    setText(text.slice(0,amount));

  }

 
  return(
    <div style={{margin: "20px", textAlign: "center"}} className="container">
      <h1>Lorem Ipsum Generator</h1>
    <form className="form" onSubmit={handleSubmit}>
      <label className="lorem-form-label" htmlFor="number">Enter Number</label>
      <input onChange={handleChange} className="lorem-form-input" type="number" name="count" id="count" min={1} max={8} value={count}></input>
      <button type="submit" className="btn">Submit</button>
    </form>
    {textValue.map((par)=>{
      return(
        <p style={{textAlign: "center"}} className="text" key={par.id}>{par}</p>
      )
    })}
    </div>
  )
};
export default App;
