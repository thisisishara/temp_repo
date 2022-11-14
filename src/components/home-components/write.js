import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import homedata from '../../data/home.json';
import Typed from 'react-typed';
import axios from "axios";
import {Form,Button, Col,Card,Table, Overlay,Modal, ProgressBar} from 'react-bootstrap';
import DrawingPane from '../global-components/drawingPane'
import Navbar from '../global-components/navbar';
import Footer from '../global-components/footer';
import { Rings } from 'react-loader-spinner';
import {
  MDBInput 
} from 'mdbreact';
import Grid from '@material-ui/core/Grid'

class Write extends Component {
    constructor(props){
        super(props);
        this.state={
            show: false,
            title: null,
            modelShow: false,
            msg: null,
            results_link : [],
            show: false,
            loader:false,
            content:null,
            results_title:[],
            results_content: [],
            results_percentage: [],
            products_name: ['Natural Moisturizing Factors + HA','Niacinamide 10% + Zinc 1%',
          'Hyaluronic Acid 2% + B5','Glycolic Acid 7% Toning Solution','"Buffet" + Copper Peptides 1%','100% Organic Cold-Pressed Rose Hip Seed Oil','Squalane Cleanser','Azelaic Acid Suspension 10%','Lactic Acid 5% + HA','Multi-Peptide Lash and Brow Serum','Caffeine Solution 5% + EGCG','AHA 30% + BHA 2% Peeling Solution','Granactive Retinoid 5% in Squalane','Argireline Solution 10%','Granactive Retinoid 2% Emulsion'],
            img_name: ['p1.jpg','p2.jpeg','p3.jpg','p4.jpg','p5.jpg','p6.jpg','p7.jpg','p8.jpg','p9.jpg','p10.jpg','p11.jpg','p12.jpeg','p13.jpg','p14.jpg','p15.jpg',]
        };
     
        this.load = this.load.bind(this);
        this.clearResult = this.clearResult.bind(this);
        this.getContent = this.getContent.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.getTitle = this.getTitle.bind(this);
    }


    load(){
        this.setState({loader:true})
        this.setState({show:false})

        const data = new FormData();
        data.append('title', this.state.title);
        data.append('content', this.state.content);
    
        let currentComponent = this;
    
        axios({
            url: 'http://localhost:5000/getResults',
            method: "GET",
            data:data
        }).then((response) => {
            console.log(response.data)
            currentComponent.setState({results_title:response.data["titles"]})
            currentComponent.setState({results_link:response.data["links"]})
            currentComponent.setState({results_content:response.data["content"]})
            currentComponent.setState({results_percentage:response.data["percentage"]})
            currentComponent.setState({loader:false})
            currentComponent.setState({show:true})
        });
    }
    
  closeModal() {
    this.setState({modelShow:false});
  }

  clearResult() {
   // sessionStorage.setItem('class', null);
   // sessionStorage.setItem('score', null);
   // sessionStorage.setItem('skill', null);
    this.setState({show:false})

  }

  getTitle (e) {
    this.setState({title:e.target.value});
  }

  getContent (e){
    this.setState({content:e.target.value})
  }


    render () {
      let getData = homedata.herov2
      let factsInfo = homedata.results
      let sectionHeadingInfo = factsInfo.sectionHeading
        const rows = this.state.results_title;

        return (
            <div className="pge">
                <Navbar/>
                <br/><br/><br/><br/><br/>

                <div className="row">
                 <div className="col-lg-8 col-md-8 col-sm-10 offset-lg-2 offset-md-2 offset-sm-1">
                     <div className="section-title text-center mb60">
                         <h2>Products</h2>
                         <hr className="lines"/>
                         <p>{sectionHeadingInfo.desc}</p>
                     </div>
                 </div>
             </div>
              
                <Container className="grid_btn">
       <Row className="align-items-center">
           <Grid container style={{margin_top:'-500px'}}>
      
           <Grid item xs={3} className='grid_btn2'>
              <a href={"#pd/0/"+this.state.img_name[0]+"/Rs. 6,500.00"}><img src={"/assets/img/products/"+this.state.img_name[0]} className="" alt="logo" height="200px"></img></a>  
              <p>{this.state.products_name[0]}</p>
           </Grid>
           <Grid item xs={1}> </Grid>
           <Grid item xs={3} className='grid_btn2'>
              <a href={"#pd/1/"+this.state.img_name[1]+"/Rs. 7,250.00"}><img src={"/assets/img/products/"+this.state.img_name[1]} className="" alt="logo" height="200px"></img></a>  
              <p>{this.state.products_name[1]}</p>
           </Grid>
           <Grid item xs={1}> </Grid>
           <Grid item xs={3} className='grid_btn2'>
              <a href={"#pd/2/"+this.state.img_name[2]+"/Rs. 5,500.00"}><img src={"/assets/img/products/"+this.state.img_name[2]} className="" alt="logo" height="200px"></img></a>  
              <p>{this.state.products_name[2]}</p>
           </Grid>
           </Grid>
       </Row>
       <Row className="align-items-center">
           <Grid container style={{margin_top:'-500px'}}>
          
           <Grid item xs={3} className='grid_btn2'>
              <a href={"#pd/3/"+this.state.img_name[3]+"/Rs. 7,000.00"}><img src={"/assets/img/products/"+this.state.img_name[3]} className="" alt="logo" height="200px"></img></a>  
              <p>{this.state.products_name[3]}</p>
           </Grid>
           <Grid item xs={1}>  </Grid>
           <Grid item xs={3} className='grid_btn2'>
              <a href={"#pd/4/"+this.state.img_name[4]+"/Rs. 6,300.00"}><img src={"/assets/img/products/"+this.state.img_name[4]} className="" alt="logo" height="200px"></img></a>  
              <p>{this.state.products_name[4]}</p>
           </Grid>
           <Grid item xs={1}>  </Grid>
           <Grid item xs={3} className='grid_btn2'>
              <a href={"#pd/5/"+this.state.img_name[5]+"/Rs. 4,750.00"}><img src={"/assets/img/products/"+this.state.img_name[5]} className="" alt="logo" height="200px"></img></a>  
              <p>{this.state.products_name[5]}</p>
           </Grid>
           </Grid>
       </Row>
       <Row className="align-items-center">
           <Grid container style={{margin_top:'-500px'}}>
      
           <Grid item xs={3} className='grid_btn2'>
              <a href={"#pd/6/"+this.state.img_name[6]+"/Rs. 11,400.00"}><img src={"/assets/img/products/"+this.state.img_name[6]} className="" alt="logo" height="200px"></img></a>  
              <p>{this.state.products_name[6]}</p>
           </Grid>
           <Grid item xs={1}> </Grid>
           <Grid item xs={3} className='grid_btn2'>
              <a href={"#pd/7/"+this.state.img_name[7]+"/Rs. 7,500.00"}><img src={"/assets/img/products/"+this.state.img_name[7]} className="" alt="logo" height="200px"></img></a>  
              <p>{this.state.products_name[7]}</p>
           </Grid>
           <Grid item xs={1}> </Grid>
           <Grid item xs={3} className='grid_btn2'>
              <a href={"#pd/8/"+this.state.img_name[8]+"/Rs. 6,500.00"}><img src={"/assets/img/products/"+this.state.img_name[8]} className="" alt="logo" height="200px"></img></a>  
              <p>{this.state.products_name[8]}</p>
           </Grid>
           </Grid>
       </Row>
       <Row className="align-items-center">
           <Grid container style={{margin_top:'-500px'}}>
      
           <Grid item xs={3} className='grid_btn2'>
              <a href={"#pd/9/"+this.state.img_name[9]+"/Rs. 5,365.00"}><img src={"/assets/img/products/"+this.state.img_name[9]} className="" alt="logo" height="200px"></img></a>  
              <p>{this.state.products_name[9]}</p>
           </Grid>
           <Grid item xs={1}> </Grid>
           <Grid item xs={3} className='grid_btn2'>
              <a href={"#pd/10/"+this.state.img_name[10]+"/Rs. 2,275.00"}><img src={"/assets/img/products/"+this.state.img_name[10]} className="" alt="logo" height="200px"></img></a>  
              <p>{this.state.products_name[10]}</p>
           </Grid>
           <Grid item xs={1}> </Grid>
           <Grid item xs={3} className='grid_btn2'>
              <a href={"#pd/11/"+this.state.img_name[11]+"/Rs. 2960.00"}><img src={"/assets/img/products/"+this.state.img_name[11]} className="" alt="logo" height="200px"></img></a>  
              <p>{this.state.products_name[11]}</p>
           </Grid>
           </Grid>
       </Row>
       <Row className="align-items-center">
           <Grid container style={{margin_top:'-500px'}}>
      
           <Grid item xs={3} className='grid_btn2'>
              <a href={"#pd/12/"+this.state.img_name[12]+"/Rs. 5,365.00"}><img src={"/assets/img/products/"+this.state.img_name[12]} className="" alt="logo" height="200px"></img></a>  
              <p>{this.state.products_name[12]}</p>
           </Grid>
           <Grid item xs={1}> </Grid>
           <Grid item xs={3} className='grid_btn2'>
              <a href={"#pd/13/"+this.state.img_name[13]+"/Rs. 3,145.00"}><img src={"/assets/img/products/"+this.state.img_name[13]} className="" alt="logo" height="200px"></img></a>  
              <p>{this.state.products_name[13]}</p>
           </Grid>
           <Grid item xs={1}> </Grid>
           <Grid item xs={3} className='grid_btn2'>
              <a href={"#pd/14/"+this.state.img_name[14]+"/Rs. 3,885.00"}><img src={"/assets/img/products/"+this.state.img_name[14]} className="" alt="logo" height="200px"></img></a>  
              <p>{this.state.products_name[14]}</p>
           </Grid>
           </Grid>
       </Row>
       </Container>
                <br/><br/>
                <Footer/>
                <Modal show={this.state.modelShow}>
                            <Modal.Header className="model_hdr">Results</Modal.Header>
                            <Modal.Body>
                                <Table responsive hover>
                                    <tbody>
                                       
                                        <tr className="unread">
                                        <td>
                                        <h6 className="mb-1"></h6>
                                      
                                        <p className="m-0" style={{fontSize:'20px'}}><strong>{this.state.msg}</strong></p><br/>
                                        
                                        </td>
                                        </tr>
                                      
                                      
                                    </tbody>
                                </Table>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.closeModal}>Close</Button>
                            </Modal.Footer>
            </Modal>
            </div>
    )
    }
}


export default Write
