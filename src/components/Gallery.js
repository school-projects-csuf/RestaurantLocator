import React from "react";
// import ReactDOM from "react-dom";
import { images } from "./images";
import { Gallery, GalleryImage } from "react-gesture-gallery";

function BackGallery() {
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
    <Gallery
      style={{
        background: "black"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="fit" key={image} src={image} />
      ))}
    </Gallery>
  );
}

export default BackGallery;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
