import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import homedata from '../data/home.json'
import Typed from 'react-typed';
import Footer from './global-components/footer';
import Navbar from './global-components/navbar';
import Grid from '@material-ui/core/Grid'
import CarouselContainer from './global-components/slideshow'
import { withRouter } from "react-router";

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            show: false,
            Uploadfile: null,
            result: null,
            loader: false,
            imgPath: null,
            size: null,
            level: null,
            nipple: null,
            umame: null
        }
        this.signup = this.signup.bind(this);
    }

    signup(){
        this.props.history.push({
            pathname: '/pre',
            //search: '?query=',
           // state: { }
        })
    }

    render () {
    let getData = homedata.herov1
    return (
    <div>
         <Navbar />
         <br/> <br/> <br/> <br/>
         
         <CarouselContainer/>
         <section id="home" className="text-center hero-section-1">
        <br/><br/>

            <Container className="grid_btn">
           
            </Container>
            <br/><br/>
        </section>
       
        <Footer />
    </div>
    )
    }
}


export default withRouter(Home)
