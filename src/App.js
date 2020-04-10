import React from 'react';
import Navbar from "./components/Navbar";
import EmployeeContainer from "./components/EmployeeContainer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <EmployeeContainer />
      </Wrapper>
    </div>
    
  );
}

export default App;