import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


class FindDoc extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const doctor = this.props.doctors.map((doctor) => {
            return (
                <div key={doctor.id} className="col-12">                    
                    <Media tag="li"  style={{backgroundColor:"#E4E4E4"}}>                        
                <Media left middle>
                    <Media object src={doctor.image} alt={doctor.name} height="140px" width="120px"/>                            
                </Media>
               
                <Media body className="ml-5" >
                    <Media heading>{doctor.name}</Media>
                    <p>{doctor.designation}</p>
                    <p>{doctor.description}</p>
                </Media>                       
                <Media right >
                    <Media heading>{doctor.contact}</Media>
                    <p><span className="fa fa-map-marker fa-lg"></span> {doctor.area} , Surat</p>
                    <p><span className="fa fa-phone fa-lg"></span> phone/video options</p>
                    <button><a href="mailto:confusion@food.net">Email</a></button>
                </Media>
            </Media>               
            <br />
                </div>
            );
        });
        return(
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Find A Doctor</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Doctors in Surat</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                {doctor}
            </div>
        </div>
        );        
    }
}

export default FindDoc;