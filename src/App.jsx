import './App.css';
import Main from './Main';
import store from './features/store';
import { Provider } from 'react-redux';
import { useState } from 'react';
import Task2 from './task2/Task2';
import store2 from './task2/reducers/store2';
function App() {
const [toggle,setToggle]=useState(true)
if(toggle)
 return (<Provider store={store}><div className='col wave'><button className="btn" onClick={()=>setToggle(false)}>Click Here Toggle To Task B</button><Main/></div></Provider>)
else
 return(<Provider store={store2}><div className='col wave'><button className="btn" onClick={()=>setToggle(true)}>Click Here Toggle To Task A</button><Task2/></div></Provider>)

}

export default App;
