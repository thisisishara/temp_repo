import React, { Component } from 'react'

export default class ingredient extends Component {
    constructor(props) {
        super(props);
        this.state = {

            ingredientList: {
                "carrot": "Rich in antioxidants to protect skin against damage",
                "lavender": "Improves hair health, reduces acne & helps lighten the skin while reduces wrinkles",
                "grape": "Rich in Vitamin C & anti-oxidants. Revitalizes the skin, protects skin against ultra violet radiation",
                "aloe-vera": "Hydrates & refreshes skin, treating dryness",
                "olive": "Effectively removes makeup, protects & hydrates the most sensitive of skins",
                "calendula": "Relieves skin of flakiness & itchiness, aids in sustaining soothes & hydrated skin",
                "virgin-coconut": "Rich in nourishing fatty acids. Increases collagen production & intensely hydrates",
                "arnica": "Rich in anti-inflammatory properties. Promotes skin soothing, healing & relieves muscle pain",
                "licorice": "Rich in anti-inflammatory & anti-microbial properties. Promotes skin lightening & anti-ageing benefits",
                "neem": "Rich in anti-bacterial & anti-inflammatory properties. Soothes & cools skin irritations",
                "tes-tree": "Rich in anti-inflammatory properties. Soothes & relieves painful skin irritations. Reduce redness & swelling",
                "watercress": "Rich in Vitamin C. Increases collagen production & reduces cellulite & wrinkles",
                "peppermint": " Rich in antiseptic & antibacterial properties. Soothes skin irritations & inflammations caused by acne",
                "almond": "Rich in vitamin E, to nourish & soften skin",
                "moringa": "Rich in antibacterial & nourishing properties. Boosts collagen & minimizes skin imperfections",
                "tumeric": "Rich in anti-oxidants & anti-inflammatory properties. Revives skin dull skin & enhances skin radiance",
                "rice-bran": "Rich in anti-oxidants. Nourishes skin & protects skin from environmental damage",
                "ashwagandha": "Rich in antibacterial & antimicrobial properties to protect against infections",
                "ceylon-tea": "Packed with antioxidants. Protects against free radicals & premature aging effects",
                "bearberry": "A natural skin brightener. Evens out skin tones by eliminating age spots & acne scars",
                "spearmint": "Rich in antibacterial properties. Increases skin's resilience & elasticity",
                "clove": "A powerful antiaging ingredient. Reduces the appearance of fine lines & wrinkles & prevents sagginess of the skin",
                "jasmine": "Rich in antiseptic properties. Promotes healing, soothing & aids in total skin radiance",
                "kokum": "Rich in anti-oxidants & anti-inflammatory properties. Soothes & heals inflamed damaged skin",
                "frankincense": "Natural astringent. Treats skin imperfections & rejuvenates the skin",
                "patchouli": "Slows the ageing process, reduces the appearance of fine lines & wrinkles",
                "tamarind ": "Full of antioxidants, Vitamin C & A. Prevents the formation of free radicals & soothes skin irritations",
                "marigold ": "Rich in antiseptic and anti-inflammatory properties. Promotes healing & accelerates the regeneration of new cells",
                "sandalwood ": "Nourishes the skin, reduces skin scarring & evens out skin tones for total skin wellness",
                "eucalyptus ": "Rich in anti-inflammatory properties. Treats & prevents acne while boosting circulation",
                "lemongrass ": "Rich in anti-oxidant properties. Eliminates excess oil from the skin & enhances overall skin texture",
                "tangerine ": "Rich in Vitamin C. Stimulates collagen production & enhances skin youthfulness",
                "avocado ": "Deeply nourishes, softens & hydrates the skin. Smoothens skin & boosts skin's immunity",
                "wintergreen ": "Enriched with antiseptic properties. Protects skin from skin infections & fights against aging",
                "wheatgerm": "Rich in antioxidants & Vitamin E. Protect skin against free radicals, skin inflammations, dark spots",
                "rose ": "Rich in Vitamins, anti-oxidants & minerals. Treats dry skin, combats acne, redness & inflammations",
                "sweet-almond ": "Reduces puffiness & under-eye circles. Treats dry skin & reverses sun damage. Enhances overall skin health",
                "grapefruit ": "Natural astringent & rich in Vitamin C. Evens out skin tones & reduces the appearance of dark spots",
                "mandarin ": "Rich in Vitamin C & E. Significantly improves complexions & promotes flawless & blemish-free skin",
                "neroli ": "Rich in regenerative qualities & antiseptic properties. Soothes & treats acne & redness associated with breakouts",
                "cocoa ": "Assists skin healing at a cellular level, hydrates skin & improves blood circulation",
                "red-sandalwood ": "Effectively treats blemishes, rashes & acne. Removes tan & dullness while cooling the skin",
                "kay lime ": "Rich in anti-oxidants. Refreshes the skin & reduces signs of ageing & scars",
                "lemon ": "Enriched with natural Vitamin C. Reduces skin damaged & premature ageing of the skin",
                "mango ": "Rich in Vitamin A & C. Prevents premature ageing of skin & protects skin from sun damage"
            }

        };

    }
  render() {
    return (
        <div className="col col-2">
        <div className="card shadow-sm">
          {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
        <img src={`assets\\img\\ingredients\\${this.props.ingredient}.png`} alt="ingredient"/>
          <div className="card-body" height="30px">
          <h6 className="card-text">{this.props.ingredient}</h6>
            <p className="card-text">{this.state.ingredientList[this.props.ingredient]}</p>
            
          </div>
        </div>
      </div>
    )
  }
}
