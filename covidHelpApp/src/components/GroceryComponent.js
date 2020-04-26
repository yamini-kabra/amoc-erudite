import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

class Grocery extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="container" >
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Grocery</BreadcrumbItem>
                </Breadcrumb>
            </div>
            </div>        
        );        
    }
}

export default Grocery;