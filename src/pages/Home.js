import React from "react";

//import MenuAppBar from "./components/MenuAppBar";
import LocationForm from "../components/LocationForm";
//import Gallery from "../components/Gallery";

import { images } from "../components/images";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import logo from "../assets/img/bingeLogo.png";

//stylesheet
import "./stylesheets/homeStyle.css";

//material kit
import Navbar from "../components/NavbarTop.js";

function Home() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 4) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div>
      <img
        src={logo}
        style={{
          zIndex: 2,
          position: "absolute",
          top: 0,
          left: 400,
          height: 1000
        }}
      />
      <Navbar />

      <Gallery
        style={{
          background: "black",
          zIndex: 0,
          position: "absolute",
          top: 0,
          left: 0,
          height: 1000
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(image => (
          <GalleryImage objectFit="cover" key={image} src={image} />
        ))}
      </Gallery>
      <div
        style={{
          zIndex: 1,
          position: "relative",
          top: -100,
          left: 350,
          width: 1100
        }}
      ></div>
      <LocationForm />
    </div>
  );
}

export default Home;

// const MainPage = () => {
//   return (
//     <div class="container">
//       <Gallery class="gallery-comp" />
//       <LocationForm class="form-comp" />
//     </div>
//   );
// };

// export default MainPage;

{
  /* <div className="container">
      <LocationForm className="form-bg" />
    </div> */
}

{
  /* <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="./assets/img/examples/bg.jpg"
              alt="First slide"
            ></img>
          </div>

          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="img/characterImg/batman.jpg"
              alt="Second slide"
            ></img>
          </div>

          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="img/characterImg/joker.jpg"
              alt="Third slide"
            ></img>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> */
}
