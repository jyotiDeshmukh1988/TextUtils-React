//import logo from './logo.svg';
import './App.css';
/*import About from './components/About';*/
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
/*import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';*/

function App() {
  const [mode,setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return ( 
   // <Router>  
   <>
    {<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>}
    {/*<Navbar/>*/}
    <Alert alert={alert}/> 
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
    {/*<Routes>
      <Route exact path="/about" element={<About/>} />
    </Routes> 
    <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>} />
    </Routes> */
    }
    </div>
    {/*<div className="container my-3">
    <About></About>
    </div>*/}
   </>
   //</Router>
  );
  
}

export default App;
