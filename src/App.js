import Home from "./components/Home";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import './App.css'


function App() {
  return (
    <div className="App">
      <header id='header'>
        <Header/>
        </header>
        <main>
        <Home/>
        </main>
       
    </div>
  );
}

export default App;
