import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const images = [
  "https://preview.ibb.co/gxVppG/img1.jpg",
  "https://preview.ibb.co/iZ3Lww/img2.jpg",
  "https://preview.ibb.co/iQsPOb/img3.jpg",
  "https://preview.ibb.co/gFFdib/img4.jpg",
  "https://preview.ibb.co/hS5ppG/img5.jpg",
  "https://preview.ibb.co/goKtGw/img6.jpg",
  "https://preview.ibb.co/bSWjOb/img7.jpg",
  "https://preview.ibb.co/i2o9pG/img8.jpg"
];

function App() {
  const handler = e => {
    const opacity = 0.4;
    const current = document.querySelector("#current");
    const imgs = document.querySelectorAll(".imgs img");

    imgs.forEach(img => (img.style.opacity = 1));
    current.src = e.target.src;

    // add fadein class
    current.classList.add("fade-in");

    // remove fade-in class after .5s
    setTimeout(() => current.classList.remove("fade-in"), 500);
    e.target.style.opacity = opacity;
  };
  return (
    <div className="App">
      <div className="container">
        <div className="main-img">
          <img src={images[0]} id="current" alt="img 1" />
        </div>
        <div className="imgs">
          <img
            style={{ opacity: 0.4 }}
            onClick={e => handler(e)}
            src={images[0]}
            alt="img 1"
          />
          <img onClick={e => handler(e)} src={images[1]} alt="img 1" />
          <img onClick={e => handler(e)} src={images[2]} alt="img 1" />
          <img onClick={e => handler(e)} src={images[3]} alt="img 1" />
          <img onClick={e => handler(e)} src={images[4]} alt="img 1" />
          <img onClick={e => handler(e)} src={images[5]} alt="img 1" />
          <img onClick={e => handler(e)} src={images[6]} alt="img 1" />
          <img onClick={e => handler(e)} src={images[7]} alt="img 1" />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
