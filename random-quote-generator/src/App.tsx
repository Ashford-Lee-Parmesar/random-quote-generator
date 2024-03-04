import { useEffect ,useState } from 'react';
import './App.css';
import {fetchData} from '../app.service.ts'
function App() {

   const [data, setData] = useState('');

  const fetchQuotes = async () => {
    const result = await fetchData();
    setData(JSON.stringify(result));
  }

  useEffect(()=> {
    fetchQuotes()
  }, []);

  return (
    <>
      <h1>{data}</h1>
    </>
  )
}

export default App
