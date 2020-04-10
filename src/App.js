import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory";
import Navbar from "./components/Navbar";
// import EmployeeContainer from "./components/EmployeeContainer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
        <Route exact path='/' component={Directory} />
          {/* <EmployeeContainer /> */}
        </Wrapper>
      </div>
    </Router>  
  );
}

export default App;