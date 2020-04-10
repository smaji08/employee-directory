import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import SearchForm from "../SearchForm";
import EmpTable from "../EmpTable";

class EmployeeContainer extends Component {
    state = {
        search: "",
        result: []
    };

    componentDidMount(){
        this.searchEmployees();
    };

    searchEmployees = () => {
        API.search()
            .then(res => {
                if(res.data.results.length === 0){
                throw new Error("No results found");
                }
                if(res.data.status === "error"){
                throw new Error(res.data.message);
                }
                this.setState({ result :res.data.results })
            })
            .catch(err => console.log(err))
    };

    
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };
        
    render() {
        let filteredData =[];
        if(!this.state.search) {
            filteredData = this.state.result;
        }
        else{
            const lowercasedFilter = this.state.search.toLowerCase();
            filteredData = this.state.result.filter(emp => { 
            let fullName = emp.name.first + " " + emp.name.last 
            return (fullName).toLowerCase().indexOf(lowercasedFilter) >= 0 });
        }
    
        return (
            <Container >
                <Row style={{marginTop:"10px"}}>
                    <Col size="md-12">
                        <SearchForm
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <EmpTable 
                            data={filteredData}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EmployeeContainer;