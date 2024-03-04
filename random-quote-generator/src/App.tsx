import { useState } from 'react';
import './App.css';
import client from '../app.service';
import { FaQuoteLeft, FaQuoteRight, FaSave } from 'react-icons/fa';

interface Quotes {
  content: string;
  author: string;
}
const quotes = await client.fetchQuotesData();

const randomQuote = (): Quotes => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

function App() {

const [quote, setQuote] = useState<Quotes>(randomQuote());

  return (
    <div id="quote-card">
      <div className="content">
        <h2 id="text"><FaQuoteLeft size ='25' style={{ marginRight: "10px" }}></FaQuoteLeft>
        {quote.content} <FaQuoteRight size ='25' style={{ marginLeft: "10px" }}></FaQuoteRight></h2>
        <h4 id="author">- {quote.author}</h4>
      </div>
    </div>
  )
}

export default App
