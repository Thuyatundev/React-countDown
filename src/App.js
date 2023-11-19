import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, SetCount] = useState(10);
  const [Year, setYear] = useState('Happy New Year');
  useEffect(() => {
    if (count > 0) {
      const interval = setInterval(() => {
        SetCount(count - 1)
      }, 1000)//1 second

      if (count === 1) {
        setYear(Year)
      }

      return () => {
        clearInterval(interval)
      }
    }
  }, [count, Year])
  return (
    <div className="App">
      {count > 1 ? <h1>
        {count}
      </h1> :
        <h1 className='year'>{Year}</h1>
      }
    </div >
  );
}

export default App;
