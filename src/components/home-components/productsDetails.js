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
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

class ProductsDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            show: false,
            title: null,
            modelShow: false,
            msg: null,
            reviews : [],
            star : [],
            show: false,
            loader:false,
            text: null,
            no_data: false,
            wait: false,
            productType:["Cosmetic","Drug","Drug", "Cosmetic","Drug","Cosmetic & Drug","Cosmetic","Drug","Drug"],
            products_name: ['Natural Moisturizing Factors + HA','Niacinamide 10% + Zinc 1%',
            'Hyaluronic Acid 2% + B5','Glycolic Acid 7% Toning Solution','"Buffet" + Copper Peptides 1%','100% Organic Cold-Pressed Rose Hip Seed Oil','Squalane Cleanser','Azelaic Acid Suspension 10%','Lactic Acid 5% + HA'],
            des: ['Natural Moisturizing Factors + HA is a moisturizer that works with your skin to support its natural hydration barrier. By using a collection of ingredients that appear naturally in your skin—such as amino acids, fatty acids, triglycerides, urea, ceramides, phospholipids, glycerine, saccharides, sodium PCA, and hyaluronic acid—this cream keeps the outer layer of your skin protected and well-hydrated, without feeling greasy. Plus, it provides both immediate and lasting effects, as it works to significantly improve skin barrier function with regular use.', 
                'Our Niacinamide 10% + Zinc 1% formula is a water-based serum that boosts skin brightness, improves skin smoothness and reinforces the skin barrier over time. It contains a high 10% concentration of Niacinamide (vitamin b3) and zinc PCA. Note: Niacinamide and Zinc PCA is not a treatment for acne. For persistent acne-related conditions, we recommend speaking to your health care provider regarding treatment options. This formulation can be used alongside acne treatments if desired for added visible skin benefits.', 
                'Hyaluronic Acid 2% + B5 is a water-based formula combining low-, medium- and high-molecular-weight hyaluronic acid molecules and a next-generation HA crosspolymer to support hydration to multiple layers of your skin. It also targets the appearance of wrinkles and textural irregularities. Plus, it uses pro-vitamin B5 to enhance hydration at the outer layers, resulting in smoother, plumper skin.', 
                'Glycolic Acid 7% Toning Solution is an exfoliant targeted at the surface of the skin. It helps improve skin clarity, balance uneven skin tone, and correct texture over time. This formula contains a Tasmanian Pepperberry derivative of plant origin which varies in colour seasonally and this colour variation may be apparent in the formula from time to time. This formula should not be used on sensitive, peeling or compromised skin. Please refer to additional sun protection note and other warnings in provided directions. This pH of this formula is approximately 3.6. Glycolic Acid has a pKa of 3.6 and pKa is the most important aspect to consider in formulating with acids. pKa implies acid availability. When pKa is close to pH, there is an ideal balance between salt and acidity, maximizing effectiveness of the acid and reducing irritation.', 
                "“Buffet” + Copper Peptides 1% is a universal formula which utilizes multiple skin support technologies that target multiple signs of aging at once. The formula incorporates six well-studied peptide technologies, skin-friendly amino acids, and multiple hyaluronic acids. For those looking for an all-in-one solution for skin care, “Buffet” + Copper Peptides 1% helps to improve the appearance of fine and dynamic lines and supports your skin’s overall elasticity, smoothness and firmness. And because this advanced serum contains direct copper peptides, it also targets signs of aging that are typically associated with oxidative stress, resulting in radiant, healthier-looking skin. Note: The peptide technologies found within this formula include Matrixyl 3000, Matrixyl Synthe'6, SYN®-AKE, Argirelox, Relistase, and Copper tripeptide.(References are made to third-party trademarks in this description. SYN™ is a trademark of DSM, Matrixyl™ synthe'6™ and Matrixyl™ 3000 are trademarks of Sederma Inc., and ARGIRELOX™ is a trademark of Lipotec S.A.U. Neither The Ordinary nor DECIEM is affiliated with these trademarks or their owners.)", 
                '100% Organic Cold-Pressed Rosehip Seed Oil naturally hydrates skin to help address signs of aging by brightening and balancing uneven skin tone, supporting skin elasticity, and promoting supple, more radiant-looking skin. It’s made of 100% organic rosehip seed oil that is cold-pressed to retain its potency and is gentle enough for daily use. Our Rose Hip Seed Oil is completely unrefined and imparts a natural scent partly due to its high omega fatty acid content. This scent is not an indication of rancidity.', 
                'Squalane Cleanser is formulated to clean skin by removing makeup and dirt. This cleanser also supports your skin’s moisture barrier through hydration. Its skin-cleansing properties harness plant-derived squalane, a well-studied moisturizing agent, alongside lipophilic esters that will leave your skin feeling smooth and soft while dissolving makeup. The formula is non-comedogenic and soap-free so it’s gentle enough for daily use, suitable for all skin types, and suitable to combine with our other products.', 
                'Azelaic Acid Suspension 10% is a cream-like formula that brightens skin tone and visibly improves skin texture due to a high concentration of azelaic acid—a natural and effective antioxidant found in grains. It has a lower irritation potential than other direct acids, which means it’s gentle enough for daily use as part of your skincare regimen.', 
                'Lactic Acid 5% + HA is a mild alpha hydroxy acid solution that offers gentle yet effective exfoliation targeted at the skin’s surface. It is supported with purified Tasmanian pepperberry extract , which has been shown to reduce irritation and sensitivity that can be associated with acid use. This water-based serum is ideal for dry and sensitive skin. This pH of this formula is approximately 3.8. Lactic Acid has a pKa of 3.8 and pKa is the most important aspect to consider in formulating with acids. pKa implies acid availability. When pKa is close to pH, there is an ideal balance between salt and acidity, maximizing effectiveness of the acid and reducing irritation'],
            targets: ['Dryness',
                    ['Visible Shine, Signs of Congestion, Textural Irregularities, Dullness, Dryness'],
                    'Dryness',
                    'Uneven Skin Tone, Textural Irregularities, Dullness',
                    "Crow's feet, Signs of Aging",
                    'Signs of Aging, Dullness, Dryness',
                    'Cleansing, Dryness',
                    'Uneven Skin Tone, Look of Redness, Textural Irregularities, Dullness',
                    'Uneven Skin Tone, Textural Irregularities, Dullness'],
            features: ['T1.jpg', 'T2.jpg', 'T3.jpg', 'T4.jpg', 'T5.jpg', 'T6.jpg', 'T7.jpg', 'T8.jpg', 'T9.jpg'],
            show_des: true,
            show_rev: false,
            pn: []
        };
     
        this.clearResult = this.clearResult.bind(this);
        this.addComment = this.addComment.bind(this);
        this.add = this.add.bind(this);
        this.close = this.close.bind(this);
        this.description = this.description.bind(this);
        this.reviews = this.reviews.bind(this);
    }

    componentDidMount(){
        var myData = [this.props.match.params.id];
 
        let currentComponent = this;
    
        axios.get('http://127.0.0.1:5000/getResults', {
            params: {
                pid: myData[0]
            }
        }).then((response) => {
            console.log(response.data)
            if(response.data == "0"){
                currentComponent.setState({no_data:true})
            }else{
                currentComponent.setState({reviews:response.data["reviews"]})
                currentComponent.setState({star:response.data["stars"]})
                currentComponent.setState({pn:response.data["pn"]})
                currentComponent.setState({no_data:false})
            }
        });
    }
    
    
  add() {
    var myData = [this.props.match.params.id,this.state.text];
 
    let currentComponent = this;
    this.setState({wait:true})

    axios.get('http://127.0.0.1:5000/review', {
        params: {
            pid: myData[0],
            review: myData[1]
        }
    }).then((response) => {
        console.log(response.data)
        this.setState({modelShow:false});
        window.location.reload(true);
    });
   
  }

  clearResult() {
   // sessionStorage.setItem('class', null);
   // sessionStorage.setItem('score', null);
   // sessionStorage.setItem('skill', null);
    this.setState({show:false})

  }

  close () {
    this.setState({modelShow:false});
  }

  addComment (){
    this.setState({modelShow:true})
  }

  description(){
    this.setState({show_rev:false})
    this.setState({show_des:true})
  }

  reviews(){
    this.setState({show_des:false})
    this.setState({show_rev:true})
  }

  handleChange = (event) => {
    this.setState({text:event.target.value})    
  } 

    render () {
      let getData = homedata.herov2
      let factsInfo = homedata.results
      let sectionHeadingInfo = factsInfo.sectionHeading
      const rows = this.state.reviews;

        return (
            <div className="pge">
                <Navbar/>
                <br/><br/><br/><br/><br/>
                <br/><br/><br/>
            <Container className="grid_btn">
      
            <Row>
                <Col>
                  
                    <Col md={4}>
                     <div class="zoom-img">
                        <img className="product" src={"/assets/img/products/"+this.props.match.params.iname} alt="logo"></img>
                     </div>
                    </Col>
                    
                </Col>
        
               
                    <Col md={7} className="pdetails">
                        <h3>{this.state.products_name[this.props.match.params.id]}</h3>
                        <p>{this.props.match.params.price}</p>
                        <br/>
                        <h5>Targets</h5>
                        <ul>
                            <li> {this.state.targets[this.props.match.params.id]}</li>
                        </ul>
                        <hr></hr>
                        <h5>Cosmetic Type</h5>
                        <ul>
                            <li> {this.state.productType[this.props.match.params.id]}</li>
                        </ul>
                        <hr/>
                        <br></br>
                        <img src={"/assets/img/products/"+this.state.features[this.props.match.params.id]} alt="features"></img>
                        <hr></hr>
                        <br/>
                    </Col>
                    

              </Row>
                <br/><br/>
              <Row>
                <Col>
                <button class='btn btn-outline-secondary'><Link onClick={this.description} className='des_link'> DESCRIPTION </Link></button>
                </Col>
                <Col>
                <button class='btn btn-outline-secondary'><Link onClick={this.reviews} className='rev_link'> REVIEWS  </Link></button>
                </Col>
              </Row>
              <Row>
              {
                this.state.show_des == true && this.state.show_rev == false?
                <div>
                    <br></br><p><b>{this.state.des[this.props.match.params.id]}</b></p>
                </div>
                :null}

                 {
                this.state.show_rev == true && this.state.show_des == false?
                <div className="reviews"><br></br>
                    {
                    this.state.no_data == false?
                    <div>
                    {
                          rows.map((q,i) =>(
                
                            <div className='stars'>
                                <Row >
                                    <Col md={6}>
                                        <p className='uname'>User{i}</p>
                                        <p>{q}</p>
                                        {
                                        this.state.pn[i] == 1?
                                        <i class="fa fa-smile-o" aria-hidden="true" style={{fontSize: "30px",color:"green"}}></i>
                                        :null}
                                        {
                                        this.state.pn[i] == 0?
                                        <i class="fa fa-frown-o" aria-hidden="true" style={{fontSize: "30px",color:"red"}}></i>
                                        :null}
                                    </Col>
                                    <Col md={5}>
                                        <div>
                                            Moisturizing          <Rating className="star1" name="read-only" value={this.state.star[i][0]} readOnly /><br/>
                                            Preventing rough skin <Rating className="star3" name="read-only" value={this.state.star[i][1]} readOnly /><br/>
                                            whitening care        <Rating className="star4" name="read-only" value={this.state.star[i][2]} readOnly />
                                        </div>
                                    </Col>
                                </Row>
                                <div class="hr1"><hr /></div>
                               
                            </div>

                        ))
                    }
                </div>
                :null}

                {
                    this.state.no_data == true?
                    <div>
                        <h6>Be the first to comment</h6>
                    </div>
                    :null}
            <Button className="btn comment_btn" onClick={this.addComment}><i className="fa fa-comments " aria-hidden="true" ></i> ADD COMMENT</Button>
                </div>
                :null}
              </Row>
            </Container>
                <br/><br/>
                <Footer/>

                <Modal show={this.state.modelShow}>
                            <Modal.Header className="model_hdr">Add Comment</Modal.Header>
                            <Modal.Body>
                                <Table responsive hover>
                                    <tbody>
                                       
                                        <tr className="unread">
                                        <td>
                                        <h6 className="mb-1"></h6>
                                          {
                                            this.state.wait == false?
                                                <MDBInput
                                                type="textarea"
                                                label="Type your review about this product"
                                                rows="10"
                                                icon="pencil-alt"
                                                onChange={this.handleChange}
                                                className="comment"
                                                />
                                            :null}

                                            {
                                            this.state.wait == true?
                                            <div>
                                            <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
                                            <h5>Posting...</h5>
                                            <Rings
                                                type="Circles"
                                                color="#00BFFF"
                                                height={100}
                                                width={100}
                                            />
                                            </div>
                                        </div>
                                            :null}
                                        </td>
                                        </tr>
                                      
                                      
                                    </tbody>
                                </Table>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className="btn_submit" onClick={this.add}>Submit</Button>
                                <Button className="btn_close" onClick={this.close}>Close</Button>
                            </Modal.Footer>
            </Modal>
            </div>
    )
    }
}


export default ProductsDetails

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

// export default function BasicRating() {
//   const [value, setValue] = React.useState<number | null>(2);

//   return (
//     <Box
//       sx={{
//         '& > legend': { mt: 2 },
//       }}
//     >
//       <Typography component="legend">Controlled</Typography>
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       />
//       <Typography component="legend">Read only</Typography>
//       <Rating name="read-only" value={value} readOnly />
//       <Typography component="legend">Disabled</Typography>
//       <Rating name="disabled" value={value} disabled />
//       <Typography component="legend">No rating given</Typography>
//       <Rating name="no-value" value={null} />
//     </Box>
//   );
// }
