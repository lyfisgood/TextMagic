import './App.css';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
  <>
  <Router>
<Navbar title="TextMagic" AboutHome="Home" aboutText="About Us"/>
<div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Try TextMagic - word counter, character counter, remove extra spaces"/>
          </Route>
</Switch>
</div>
</Router>
</>
);
}

export default App;
