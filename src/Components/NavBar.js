import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import '../App.css'


export class NavBar extends Component {
    render() {
        return (
            <div>
                {/* <Navbar className="nav_bg" variant="dark">
    <div className="container">
    <Navbar.Brand href="/"><h3>Shakib</h3></Navbar.Brand>
    <Nav className="ml-auto">
    <Nav.Link >About</Nav.Link>
    <Nav.Link onClick={this.props.skillHandler}>Skills</Nav.Link>
    <Nav.Link onClick={this.props.Projecthandler}>Project</Nav.Link>
    <Nav.Link >Contact me</Nav.Link>
    
    </Nav>
    </div>
  </Navbar>                 */}

                <Navbar  className="nav_bg" expand="sm">
                    <Navbar.Brand style={{color:'white'}} href="/">Shakib</Navbar.Brand>
                    <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" style={{color:'white'}} >
                            <Nav.Link style={{color:'white'}}>About</Nav.Link>
                            <Nav.Link style={{color:'white'}} onClick={this.props.skillHandler}>Skills</Nav.Link>
                            <Nav.Link style={{color:'white'}} onClick={this.props.Projecthandler}>Project</Nav.Link>
                            <Nav.Link style={{color:'white'}} onClick={this.props.aboutHandler}>Contact me</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
