import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
//import image3 from '../images/3.jpg';

const getStart = () => {

}

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="col-sm-12">
            <Link to="/write" className="btn  get_btn"> View Products</Link>
            <br/>
            <br/>
            <Link to="/recommendation" className="btn  get_btn">Recommendations</Link>
            {/* <button className="get_btn" onClick={getStart}><i className="fa fa-cog" aria-hidden="true"></i> Get Started</button> */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="col-sm-12">
        <Link to="/write" className="btn  get_btn"> View Products</Link>
            <br/>
            <br/>
            <Link to="/recommendation" className="btn  get_btn">Recommendations</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="col-sm-12">
        <Link to="/write" className="btn  get_btn"> View Products</Link>
            <br/>
            <br/>
            <Link to="/recommendation" className="btn  get_btn">Recommendations</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  )
}

export default CarouselContainer;