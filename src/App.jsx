import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'tachyons/css/tachyons.min.css';
import About from './About';
import './styles.css';




 const App=()=> {
  return (
    <Router>
      <div>
        <nav className=" bg-gray-800 justify-between">
          <main className="flex flex items-center bg-auto">
					<h1 className=" hover-light-purple animate-pulse font-mono i text-5xl px-10 text-green-600 ">Temps</h1>
            <div>
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-10 py-2 rounded-md text-base font-mono  " to="/">Home</Link>
            </div>
            <div className="">
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-10 py-2 rounded-md text-base font-mono  " to="/Forecast">Forecast</Link>
            </div>
          </main>
        </nav>
        <Switch>
          <Route path="/Forecast">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


const Home=()=> {
  return (<main className="tc  i">
	        <h1 className="font-mono hover-blue text-white toys" >Hi!</h1>
	         <p  className=" toy text-white align-middle font-mono text-center hover-blue">Welcome to Temps, an small weather forecasting web app <br/> Go to Forecast Page to see Today's Weather report</p>
	        </main>);
}



export default App;

