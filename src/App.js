// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




// let name = "Utkarsh Jindal";
function App() {

  const [mode, setMode] = useState('light'); //whether dark 

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000)
  }

  const removeBodyClasses=()=>
  {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');

      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("DarkMode has been Enabled", "success")
      document.title = "textutils-darkMode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("LightMode has been Enabled", "success")
      document.title = "textutils-lightMode";
    }
  }


  // <Routes>
  //           <Route path="/home" element={<HomePage/>} />
  // </Routes>

  return (
    <Router>
      {/* <Navbar title="UFFFFFFFFF" about="about text here"/> */}
      {/* <Navbar title="TERIIIIIII"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} /> */}
        {/* <About/> */}
        <Routes>
        {/* <Route exact path="/" element={<Home/>}/> */}
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/' element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
