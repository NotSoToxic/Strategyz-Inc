import React from "react";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import ibmlogo from '../components/assets/logos/IBM.jpg'
// import hexalogo from '../components/assets/logos/Hexaware.png'
// import harjai from '../components/assets/logos/harjai.png'
// import fabhotels from '../components/assets/logos/Fabhotels_Logo.png'
// import frankfinn from '../components/assets/logos/frankfinn.png'
// import tumbledry from '../components/assets/logos/tumbledry.png'

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//     slidesToSlide: 1 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              {/* <p>{props.data ? props.data.paragraph2 : "loading..."}</p> */}
              <p><a className="aboutstrategyz" href="/strategyzinfo">About STRATEGYZ →</a></p>
            </div>
            
          </div>
        </div>
      </div>
       {/* <div className="carousel">
        <p className="clienth">OUR CLIENTS</p>
        <hr className="client"></hr>
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
        <div><img src={ibmlogo}></img></div>
        <div><img src={hexalogo}></img></div>
        <div><img src={harjai}></img></div>
        <div><img src={fabhotels}></img></div>
        <div><img src={frankfinn}></img></div>
        <div><img src={tumbledry}></img></div>
        <div><img src=""></img></div>
        </Carousel>
      </div>  */}
    </div>
  );
};
