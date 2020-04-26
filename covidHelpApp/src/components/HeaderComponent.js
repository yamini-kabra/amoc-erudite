import React , {Component } from 'react';
import {Navbar, NavbarBrand , Nav , NavbarToggler , Collapse ,NavItem ,Jumbotron ,
Modal , ModalBody , Button , ModalHeader , Form, FormGroup, Input, Label, Dropdown ,
 DropdownItem ,DropdownToggle , DropdownMenu , UncontrolledDropdown} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props) {
        super(props);
  
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
        this.toggleDrop1 = this.toggleDrop1.bind(this);
        this.toggleDrop2 = this.toggleDrop2.bind(this);
        this.state = {
          isNavOpen: false,
          isModalOpen : false,
          setDropdownOpen1 : false,
          setDropdownOpen2 : false
        };
      }
      //const [dropdownOpen, setDropdownOpen] = useState(false);
      //const toggle = () => setDropdownOpen(prevState => !prevState);

      toggleDrop1(){
          this.setState({
              setDropdownOpen1 :!this.state.setDropdownOpen1
          });
      }
      toggleDrop2(){
        this.setState({
            setDropdownOpen2 :!this.state.setDropdownOpen2
        });
    }
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal(){
          this.setState({
              isModalOpen : !this.state.isModalOpen
          });
      }

      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }      

    render() {
        return(
            <React.Fragment>
            <Navbar dark expand="md">
              <div className="container" style={{color: '#FF5581'}}>
                  <NavbarToggler onClick={this.toggleNav}/>
               
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar >
                    <NavItem>
                        <NavLink className="nav-link" to="/home"> Home
                        </NavLink>
                    </NavItem>                   
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret> Shop</DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            <NavLink className="nav-link" to='/grocery' > Grocery</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                            <NavLink className="nav-link" to='/medicine'> Medicine</NavLink>
                            </DropdownItem>                
                        </DropdownMenu>                        
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret> HealthCare</DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            <NavLink className="nav-link" to='/findDoc' > Find A Doctor</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                            <NavLink className="nav-link" to='/mentalHelp'> Mental Self-Help</NavLink>
                            </DropdownItem>                
                        </DropdownMenu>
                    </UncontrolledDropdown>               
                    <NavItem>
                        <NavLink className="nav-link" to="/contact"> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                         <Button onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                    </NavItem>
                </Nav>
                </Collapse>                
              </div>
            </Navbar>
            <Jumbotron>
                 <div className="container">
                     <div className="row row-header">
                         <div className="col-12 col-sm-6">
                             <h1>Covid-19 Help App</h1>
                             <p>We are here to help</p>
                         </div>
                     </div>
                 </div>
             </Jumbotron>
             <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                 <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                 <ModalBody>
                 <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                 </ModalBody>
             </Modal>
          </React.Fragment>
        );
    }
}

export default Header;