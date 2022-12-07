import '../css/App.css';
import { useState } from 'react';
import MySearchComponent from './MySearchComponent';
import Result from './Result'
import Graph from './Graph';

function App(props) {
  const [data, setdata] = useState()

  const [res, setres] = useState()
  const print = (e)=>{
    console.log(e)
    setres(e);
  };
  

  return (
    <div className="App">
      <MySearchComponent print = {print} ></MySearchComponent>
      {res && <Result results={res} fun ={setdata}></Result>}
      {data && <Graph data={data}/>}
    </div>
  );
}

export default App;
