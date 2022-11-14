import React, { Component } from 'react'
import Ingredient from '../recommendations-components/ingredient';
import "./ingredients.css";

export default class ingredients extends Component {
    constructor(props) {
        super(props);
        this.state = {


            comboProduct: {
                "COMBO_01": ["product_01", "Skin Sleep Bio Cellulose Facial Treatment Masque", "Moisturizer"],
                "COMBO_02": ["product_02", "Virgin Coconut – Night Repair Face Treatment Oil", "Moisturizer"],
                "COMBO_03": ["product_03", "Neem & Tea Tree – Refining Natural Exfoliator", "Facial Exfoliator"],
                "COMBO_04": ["product_04", "Skin Destress – Ashwagandha Advanced Anti-Pollution Day Face Essence", "Day Serum & Treatments"],
                "COMBO_05": ["product_05", "White Rose – Ultra Light Comforting Facial Moisturiser ", "Moisturizer"]
            }


        };

        //  this.handleSkinType = this.handleSkinType.bind(this);
    }

    render() {
        return (
            <div class="container">
                <h5>
                    {`combination ${this.props.combination}`}
                </h5>

                <div class="row row-cols-6 row-cols-sm-6 row-cols-md-6 g-3">
                    {this.props.ingredients.map((ingredient, index) => (

                        <Ingredient key={ingredient} ingredient={ingredient} />


                    ))};


                </div>
                <div>
                    <div className="product-box row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">

                            <h3 className="mb-0">{this.state.comboProduct[this.props.combo][1]}</h3>

                            <p className="card-text mb-auto">{this.state.comboProduct[this.props.combo][2]}</p>


                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img width="150px" src={`assets\\img\\recommending_products\\${this.state.comboProduct[this.props.combo][0]}.jpg`} alt="product" />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
