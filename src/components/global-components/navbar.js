import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { withRouter } from "react-router";

class Navbar extends Component {

    constructor( props ) {
        super(props);
        this.state = {addClass: 'Say hello' }
        this.signup = this.signup.bind(this);
        this.signin = this.signin.bind(this);
        this.logout = this.logout.bind(this);
        this.home = this.home.bind(this);
    }

    componentDidMount() {
       window.addEventListener('scroll', this.handleScroll.bind(this));
        
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll () {
        let lastScrollY = window.scrollY

       if( lastScrollY >= 60 ) {

         this.setState((state, props) => ({ 
            addClass: 'nav-sticky' 
        }) );

       } else {

        this.setState((state, props) => ({
            addClass: ''
        }));

       }
        
    }

    signup(){
        this.props.history.push({
            pathname: '/pre',
            //search: '?query=',
           // state: {}
        })
    }

    signin(){
        this.props.history.push({
            pathname: '/login',
            //search: '?query=',
           // state: { }
        })
    }

    logout(){
        sessionStorage.clear();
        this.props.history.push({
            pathname: '/',
            //search: '?query=',
           // state: { }
        })
    }

    home(){
        this.props.history.push({
            pathname: '/',
            //search: '?query=',
           // state: { }
        })
    }

    render() {
        
        return (
            <div>
            <nav className={`${this.state.addClass} navbar navbar-inverse navbar-expand-lg header-nav fixed-top header`}>
                
            <div className="container">
                    <a className="navbar-brand logo" href={`${process.env.PUBLIC_URL}/`}>
                    <h2><img src="/assets/img/logo.jpg" className="" alt="logo" height="80px"></img> Name</h2>
                   
                    </a>
                    {sessionStorage.getItem('userName') == null?
                    <div>
                    <Button className="nav_link1" onClick={this.signup}>SIGNUP</Button>
                    <Button className="nav_link10" onClick={this.signin}>LOGIN</Button>
                    </div>
                    :null}
                      
                      {sessionStorage.getItem('userName') != null?
                    <div>
                    <Button className="nav_link10" onClick={this.home}>HOME</Button>
                    <Button className="nav_link10" onClick={this.logout}>LOG OUT</Button>
                    </div>
                    :null}
                      
                    <button className="navbar-toggler pull-right" type="button" data-toggle="collapse" data-target="#navbarCodeply">
                        <i className="icofont-navigation-menu"></i>
                    </button>
                
                  
                </div>
            </nav>
            </div>
        )
    }
}


export default withRouter(Navbar)