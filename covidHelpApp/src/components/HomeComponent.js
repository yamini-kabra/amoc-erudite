import React,{Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
        <div className="container">
            <div className="row justify-content-center">
                <br />
                <img src="/assets/images/home.jpeg" alt="home"/>                
            </div>            
        </div>
        );        
    }
}

export default Home;