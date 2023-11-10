import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("");
  
  const numbTable = ["1","2","3","4","5","6","7","8","9", "0"]
  const signTable = ["+", "-", "%", "x", "/", "."]

  const handleNumbClick = (Numb: string) => { 
    setCount(count + Numb);
    if(count[0] === '0' && count[1] != "."){
      setCount(count + "." + Numb)  
    }else if(count[1] === '.'){
      setCount(count + Numb)
    }    
  }

  const ac = () => {
    setCount("");
  }

  const backSpace = () => {
    setCount(count.slice(0, count.length - 1))
  }

  const egal = () => {
    const [drt, gch] = ""
    if(count.includes("/")){
      const [drt, gch] = count.split("/")
      console.log(drt)
      console.log(gch);
    }else if(count.includes("x")){
      const [drt, gch] = count.split("x")
      console.log(drt)
    console.log(gch);
    }else if(count.includes("-")){
      const [drt, gch] = count.split("-")
      console.log(drt)
    console.log(gch);
    }else if(count.includes("+")){
      const [drt, gch] = count.split("+")
      console.log(drt)
    console.log(gch);
    }
    //try {
    //  const result = eval(count)
    //  setCount(result) 
    //  result === 0 ? setCount(result + '.') : setCount(result)
//
    //} catch (error) {
    //  setCount("Erreur")
    // }    
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
                <button className='numSig' onClick={backSpace}>C</button>
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
