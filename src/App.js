
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';
import Nabar from './Nabar';
import "./index.css"
import Home from "./Home"
import Addnewmovie from './Addnewmovie';
import MovieDetail from './MovieDetail';
import Notfound from './Notfound';


function App() {

  
  return (
    <Router>
        <div id="app-content">
        
          <Nabar/>
         <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              
              <Route path="/addMovie">
                <Addnewmovie/>
              </Route>
              
              <Route path="/movieDetail:id">
                <MovieDetail/>
              </Route>
             
              <Route path="*">
                <Notfound/>
              </Route>

              </Switch>
        </div>
    </Router>
  
  );
  
}

export default App;
