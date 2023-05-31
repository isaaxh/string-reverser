import { useState } from "react";
import "./App.css";

const App = () => {
  const [output, setOutput] = useState();
  return (
    <div className='container'>
      <div className='question-container'>
        <h1 className='title'>Reverse the String</h1>
        <div className='input-container'>
          <input className='input-text' type='text' />
        </div>
      </div>
      <div className='output-container'>
        <h1 className='title'>Output</h1>
        <div className='output'>hello</div>
      </div>
      <div className='btn-container'>
        <button className='btn-reverse' type='button' onClick={() => {}}>
          Reverse String
        </button>
      </div>
    </div>
  );
};

export default App;
