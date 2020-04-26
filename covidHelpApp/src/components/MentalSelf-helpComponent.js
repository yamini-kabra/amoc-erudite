import React,{Component, useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg,CardText,CardTitle,CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import Example from './carousel';
import Example1 from './carousel1';

class MentalHelp extends Component{ 
    constructor(props){
        super(props);

    }
    render(){
        const book = this.props.books.map((book) =>{
            return(
                <div key={book.id} className="col-12 col-md m-1 align-items-center">
                    <Card>
            <CardImg src={book.image} alt={book.name} />
            <CardBody>
            <CardTitle>{book.name}</CardTitle>
            <CardSubtitle>{book.author}</CardSubtitle>
            <CardText>{book.level}</CardText>
            </CardBody>
            </Card>
                </div>                
            );
        });
        return(       
            
        <div className="container" style={{backgroundColor:"#E4E4E4"}}>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Mental Self-Help</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row justify-content-center" >
                <Example />               
            </div>
            <div className="row">
                <div className="col-12">
                <h1 style={{color:"#FF5581"}}>Sleep Therapy</h1>
                <hr />
                </div>
                <div className="col-12 ">
                <h1 style={{color:"#FF5581"}}>BiblioTherapy</h1>
                <div className="row justify-content-center"  >
                <Example1 /></div>
                <br />
                <h2>Books Recommended by Us</h2>
                <div className="row align-items-start ">{book}</div>
                </div>
            </div>
        </div>
        );        
    }
}

export default MentalHelp;