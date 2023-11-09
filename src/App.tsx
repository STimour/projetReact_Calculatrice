import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("");
  const numbTable = ["1","2","3","4","5","6","7","8","9", "0", "00"]
  const signTable = ["+", "-", "*", "/", "."]

  const handleNumbClick = (Numb: string) => { 
    setCount(count + Numb);
  };

  const ac = () => {
    setCount("");
  };

  const egal = () => {
    try {
      const result = eval(count)
      setCount(result) 
    } catch (error) {
      setCount("Erreur")
     }
  };

  return (
    <div className="main">
      <div className="calculatrice">

        <h1>Calculette</h1>

        <div className="inputCal">
          <input type="text" value={count} placeholder='0'/>
        </div>

        <div className="divToutButtons">
            

            <div className='divSinges'>
                {signTable.map((Numb) =>(
                <button className='numSig' key={Numb} onClick={() => handleNumbClick(String(Numb))}>
                  {Numb}
                </button>
                ))}
                <button className='numSig' onClick={ac}>AC</button>
            </div>

            <div className="chiffreButtons">
              {numbTable.map((Numb) => (
                <button className='numbCal' key={Numb} onClick={() => handleNumbClick(String(Numb))}>
                  {Numb}
                </button>
              ))}
               <button className='numbCal' onClick={egal}>=</button>
            </div>

        </div>
      </div>
    </div>
  );
}

export default App
