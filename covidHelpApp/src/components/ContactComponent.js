import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem , Form , FormGroup , Input , Label , Col} from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email : '',
            subject : '',
            message : ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name= target.name;
        this.setState({[name] : value});
    }

    handleSubmit(event){
        console.log("Current State is " + JSON.stringify(this.state));
        alert("Current State is " + JSON.stringify(this.state));
        event.preventDefault();
    }
    render(){
        return(
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>You can Contact us!</h3>
                </div>
                <div className="col-12 col-md-10">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="name" md={2}> Name : </Label>
                            <Col md={10}>
                                <Input type="text" id="name" name="name" placeholder="Your Name"
                                 value={this.state.name} onChange={this.state.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}> Email : </Label>
                            <Col md={10}>
                                <Input type="text" id="email" name="email" placeholder="Your Email"
                                 value={this.state.email} onChange={this.state.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="subject" md={2}> Subject : </Label>
                            <Col md={10}>
                                <Input type="text" id="subject" name="subject" placeholder="Your Subject"
                                 value={this.state.subject} onChange={this.state.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={2}> Message : </Label>
                            <Col md={10}>
                                <Input type="textarea" id="message" name="message" placeholder="Your Message" rows="6"
                                 value={this.state.message} onChange={this.state.handleInputChange} />
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
            </div>
        );        
    }
}

export default Contact;