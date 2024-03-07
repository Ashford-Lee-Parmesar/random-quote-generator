import { useRef, useState } from 'react';
import './App.css';
import client from '../app.service';
import { FaQuoteLeft, FaQuoteRight, FaSave } from 'react-icons/fa';
import html2canvas from 'html2canvas';

interface Quotes {
  content: string;
  author: string;
}

//api data
const quotes = await client.fetchQuotesData();

//generate random quote from api
const randomQuote = (): Quotes => {
  return quotes[Math.floor(Math.random() * quotes.length)]
  
}

//generate random color
const randomColor = (): string => {
  const r = Math.floor(Math.random() * 250)
  const g = Math.floor(Math.random() * 250)  
  const b = Math.floor(Math.random() * 250)  

  return `rgb(${r}, ${g}, ${b})`;

}

function App() {

const [quote, setQuote] = useState<Quotes>(randomQuote());
const [colour, setColour ] = useState<string>(randomColor());

const elementRef = useRef(null)

//save div as .png img
const saveImg = async () => {
  if (elementRef.current) {
    const canvas = await html2canvas(elementRef.current);
    const link = document.createElement('a');
    link.download = `${quote.author}-quote.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }
} 

//generate new quote
const generateNewQuote = () => {
  window.location.reload();
}


  return (
    <div className='page'>
      <div id="nav-bar">
        <div className="item1" style={{color:colour}}>
         <h4>RANDOM QUOTES GENERATOR</h4>
        </div>
        <div className="item2" >
          <a href="#" onClick={generateNewQuote} style={{color:colour}}><h4>GENERATE NEW QUOTE</h4></a>
        </div>
        <div className="item3">
          <div className="buttons">
            <a href="#" onClick={saveImg}>
              <FaSave style={{marginRight: "10px", color:colour}}></FaSave>
            </a>
          </div>
        </div>
      </div>
      <div className="background"ref={elementRef}>
        <div id="quote-card" style={{backgroundColor: colour}} >
          <div className="content">
            <h2 id="text"><FaQuoteLeft size ='25' style={{ marginRight: "10px" }}></FaQuoteLeft>
            {quote.content} <FaQuoteRight size ='25' style={{ marginLeft: "10px" }}></FaQuoteRight></h2>
            <h4 id="author">- {quote.author}</h4>
          </div>
        </div>
      </div>
      <div className="buttons">
      </div>
    </div>
  )
}

export default App
