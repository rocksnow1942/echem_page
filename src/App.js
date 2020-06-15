import React , {useState} from 'react';
import Button from 'react-bootstrap/Button'
import TestChart from './components/TestChart'
import Test from './components/Test'  
import './App.css';
import CreatableSelect from './components/Create'

console.log(Test.displayName)

function App() {
    const [clickCount, setClickCount] = useState(0)
    function click(e) {
      setClickCount(clickCount + 1)
    }
    let data = {
      datasets: [{
        data: [10, 20, 30]
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Red',
        'Yellow',
        'Blue'
      ]
    };

    let options = {
      backgroundColor: ['rgba(0.2,0.1,0.4,0.5)', 'red', 'yellow']
    }

    return (
      <div className='app'>
        <h1>React Electron Boilerplate {clickCount}</h1>
        <Button variant='primary' id='mybutton' onClick={click}>click me</Button>{' '}
        <TestChart count={clickCount}></TestChart>
        <Test children={'hello'}> </Test>
        <CreatableSelect></CreatableSelect>
      </div>
    )
  }



export default App;
