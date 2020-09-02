import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.sass';
import {Footer, Header} from './components/Comunes/comunes'
import Routes from './routes/routes'

function App() {
  return ( 
    <>
      <BrowserRouter>
        <Header/>
        <div className="container-principal">
          <Routes/>
        </div>
        <Footer/>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;