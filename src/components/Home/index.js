import React from "react";

import { images } from "./images";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import logo from "../../assets/img/bingeLogo8.png";

//stylesheet
import "./homeStyle.css";

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
          zIndex: 1,
          position: "absolute",
          top: -50,
          left: "20%",
          marginLeft: "auto",
          marginRight: "auto",
          height: "auto",
          maxWidth: "60%"
        }}
      />

      <Gallery
        style={{
          background: "black",
          zIndex: 0,
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%"
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
    </div>
  );
}

export default Home;
