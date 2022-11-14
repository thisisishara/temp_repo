import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { withRouter } from "react-router";

class Navbar2 extends Component {

    constructor( props ) {
        super(props);
        this.state = {addClass: 'Say hello' }
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
                    <h2><img src="/assets/img/logo.jpg" className="rotate1" alt="logo" height="50px"></img> SIPSARA</h2>
                   
                    </a>
            
                    <div>
                        <Button className="nav_link10" onClick={this.home}>HOME</Button>
                    </div>
           
                      
                    <button className="navbar-toggler pull-right" type="button" data-toggle="collapse" data-target="#navbarCodeply">
                        <i className="icofont-navigation-menu"></i>
                    </button>
                
                  
                </div>
            </nav>
            </div>
        )
    }
}


export default withRouter(Navbar2)