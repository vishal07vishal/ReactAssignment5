import logo from './logo.svg';
import './App.css';
import Normal from './Normal';

import { PureComponent } from 'react';

function App() {
  return (
    <div className="App">
      <h1 className="head">Higher Order Component</h1>
      Example
      <Normal/>
      {/* <PureComponent/> */}
      
      <br/><br/>
      <hr/>
    </div>
  );
}

export default App;
