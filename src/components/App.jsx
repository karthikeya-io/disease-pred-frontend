import '../css/App.css';
import { useState } from 'react';
import MySearchComponent from './MySearchComponent';
import Result from './Result'

function App(props) {
  const [res, setres] = useState()
  const print = (e)=>{
    console.log(e)
    setres(e);
    // return (<>
    // <Result results={res}></Result>
    // </>
    // )
  };

  return (
    <div className="App">
      <MySearchComponent print = {print} ></MySearchComponent>
      {res && <Result results={res}></Result>}
    </div>
  );
}

export default App;
