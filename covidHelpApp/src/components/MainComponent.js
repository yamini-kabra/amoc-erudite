import React,{Component} from 'react';
import Home from './HomeComponent';
import Grocery from './GroceryComponent';
import Medicine from './MedicineComponent';
import FindDoc from './FindDoctorComponent';
import MentalHelp from './MentalSelf-helpComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch , Route , Redirect } from 'react-router-dom';
import {DOCTORS} from '../shared/doctors';
import {BOOKS} from '../shared/books';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state={
          doctors : DOCTORS,
          books : BOOKS
      };
    }

    render(){
        return(
            <div>
                <Header/>
            <Switch>
                <Route path='/home' component={() => <Home/>} />
                <Route path='/grocery' component={() => <Grocery/>} />
                <Route path='/medicine' component={() => <Medicine/>} />
                <Route path='/findDoc' component={() => <FindDoc doctors={this.state.doctors}/>} />
                <Route path='/mentalHelp' component={() => <MentalHelp books={this.state.books}/>} />
                <Route path='/contact' component={() => <Contact/>} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
            </div>            
        );
    }
}

export default Main;