import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import homedata from '../../data/home.json';
import Typed from 'react-typed';
import axios from "axios";
import { Form, Button, Col, Card, Table, Overlay, Modal, ProgressBar } from 'react-bootstrap';
import DrawingPane from '../global-components/drawingPane'
import Navbar from '../global-components/navbar';
import Footer from '../global-components/footer';
import { Rings } from 'react-loader-spinner';
import {
    MDBInput
} from 'mdbreact';
import Grid from '@material-ui/core/Grid'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import Ingredients from '../recommendations-components/ingredients';

class Recommendation extends Component {
    constructor(props) {
        super(props);
        this.state = {

            selectedSkinType: "dryskin",
            ingredientCombo: {
                "dryskin": ["COMBO_01", "COMBO_02"],
                "oilyskin": ["COMBO_03"],
                "normalskin": ["COMBO_03"],
                "combination" : ["COMBO_04", "COMBO_05"]
            },
            comboIngredientList: {
                "COMBO_01": ["carrot", "lavender", "grape", "aloe-vera", "olive", "calendula"],
                "COMBO_02": ["virgin-coconut", "tumeric", "rice-bran"],
                "COMBO_03": ["arnica", "licorice", "neem", "tes-tree", "peppermint", "olive"],
                "COMBO_04": ["aloe-vera", "ashwagandha", "rice-bran"],
                "COMBO_05": ["aloe-vera", "almond", "moringa"]
            },
        };

        this.handleSkinType = this.handleSkinType.bind(this);
    }

    handleSkinType(event) {
        this.setState({
            selectedSkinType: event.target.value,
        }, () => {
            console.log(this.state.ingredientCombo[this.state.selectedSkinType]);
        })
    }


    render() {
        let getData = homedata.herov2
        let factsInfo = homedata.results
        let sectionHeadingInfo = factsInfo.sectionHeading
        const rows = this.state.results_title;

        return (
            <div className="pge">
                <Navbar />
                <br /><br /><br /><br /><br />

                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-10 offset-lg-2 offset-md-2 offset-sm-1">
                        <div className="section-title text-center mb60">
                            <h2>Recommendations</h2>
                            <hr className="lines" />
                            <p>{sectionHeadingInfo.desc}</p>
                        </div>
                    </div>
                </div>




                <Container>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Please Select your Skin Type</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={this.state.selectedSkinType}
                            onChange={this.handleSkinType}
                        >
                            <FormControlLabel value="oilyskin" control={<Radio />} label="Oily Skin" />
                            <FormControlLabel value="dryskin" control={<Radio />} label="Dry Skin" />
                            <FormControlLabel value="normalskin" control={<Radio />} label="Normal Skin" />
                            <FormControlLabel value="combination" control={<Radio />} label="Combination" />

                        </RadioGroup>
                    </FormControl>


                    {this.state.ingredientCombo[this.state.selectedSkinType].map((combo, index) => (
                        <div key={combo} style={{"margin-bottom":"120px"}}>
                            
                            <Ingredients ingredients={this.state.comboIngredientList[combo]} combo={combo} combination={index+1} />
                            
                        </div>



                    ))};



                </Container>

            </div>
        )
    }
}


export default Recommendation;
