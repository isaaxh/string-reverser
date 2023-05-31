import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [inputString, setInputString] = useState<string>();
  const [output, setOutput] = useState<string>();
  const [stringArray, setStringArray] = useState<string[] | undefined>([]);

  const reverseString = (strArr: string[] | undefined) => {
    const strReversed: string[] = [];

    strArr?.forEach((item) => {
      strReversed.unshift(item);
    });

    displayOutput(strReversed);
  };

  const displayOutput = (strArr: string[]) => {
    const finalStr = strArr.join(" ");

    setOutput(finalStr);
  };

  const handleBtnClick = (inputText: string | undefined) => {
    const newArray = inputText?.split(" ");
    setStringArray(newArray);
  };

  useEffect(() => {
    reverseString(stringArray);
  }, [stringArray]);

  return (
    <div className='container'>
      <div className='question-container'>
        <h1 className='title'>Reverse the String</h1>
        <div className='input-container'>
          <input
            className='input-text'
            type='text'
            onChange={(e) => setInputString(e.target.value)}
            placeholder='Enter a text'
          />
        </div>
      </div>
      <div className='output-container'>
        <h1 className='title'>Output</h1>
        <div className='output'>{output}</div>
      </div>
      <div className='btn-container'>
        <button
          className='btn-reverse'
          type='button'
          onClick={() => handleBtnClick(inputString)}
        >
          Reverse String
        </button>
      </div>
    </div>
  );
};

export default App;
