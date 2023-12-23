import "./form.css";
import { useState } from "react";
import data from "./para.json";
import Paragraph from "./Paragraph";

export default function Form() {
  const [count, setCount] = useState(0);

  const inputValue = (event) => {
    if(event.target.value <= 0){
        setCount(0);
    }else{
        setCount(event.target.value);
    }
  }

  const [paragraphArray, setParagraphArray] = useState([]);
  const generateParagraphs = () => {
    if(count > 58){
        alert("Yoo! Hold up, that's way too many paragraphs. Enter a smaller number.")
    }
    setParagraphArray(
        data.filter((current, idx) => idx < count)
    );
  };

  return (
    <>
      <div className="container">
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <div className="form">
          <p>Paragraphs: </p>
          <input
            type="number"
            value={count}
            name="paragraph"
            id="paraCount"
            onChange={inputValue}
          />
          <button className="generate" onClick={generateParagraphs}>
            Generate
          </button>
        </div>
      </div>
      <div className="paragraphs">
        {
          /* Will dynamically generate paragraphs based on input */
          paragraphArray.map((currEle) => {
            return <Paragraph key={currEle.id} paragraph={currEle.paragraph} />;
          })
        }
      </div>
    </>
  );
}
