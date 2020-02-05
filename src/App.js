import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [valueTxt, setValueTxt] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = () =>{
    const newArr = valueTxt.split(",")
    let sum = 0
    newArr.forEach(element => {
      sum += parseInt(element)
    });
    let average = sum / newArr.length

    const uniqueArr = Array.from(new Set(newArr))
    let mode = {
      value : 0,
      arrLength : 0
    }

    for (let i = 0; i < uniqueArr.length; i++) {
      const arr = newArr.filter(function(row){
        return parseInt(row) === parseInt(uniqueArr[i])
      })

      let value = (arr.length > mode.arrLength ? parseInt(uniqueArr[i]) : mode.value)
      let arrMode = (arr.length > mode.arrLength ? arr.length : mode.arrLength)

      mode = {
        value : value,
        arrLength : arrMode
      }
    }

    setResult((average === mode.value ? 1 : 0))

  } 
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="col-md-4 offset-md-4">
            <input type="text" placeholder="ex : 5,4,2,1" className="form-control" onChange={(e) => setValueTxt(e.target.value)} value={valueTxt} />
            <button type="button" className="btn btn-primary mt-3" onClick={() => handleSubmit()}>Submit</button>

            <h3 className="mt-4">Result : {result} </h3>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
