import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import BugsList from "./components/bugs-list.component";
import EditBugs from "./components/edit-bugs.component";
import CreateBugs from "./components/create-bugs.component";
import CreateProjects from "./components/create-projects.component";
function App(){
    return (
      <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={BugsList} />
      <Route path="/edit/:id" component={EditBugs} />
      <Route path="/create" component={CreateBugs} />
      <Route path="/user" component={CreateProjects} />
      </div>
    </Router>
    );
}


export default App;
