import React from "react";
// import "./style.css";
import Container from "../Container";

function Navbar() {
    return (
        <Container fluid="true">
                <h2>Employee Directory</h2>
               Click on carrots to filter by heading or use the search box to narrow your results
        </Container>
    //     <div className="container-fluid">
    //           <h2>Employee Directory</h2>
    //           Click on carrots to filter by heading or use the search box to narrow your results
    //   </div>
    );
}

export default Navbar;