import React from "react";

export default function MainSlider() {
  return (
    <div
      id="carouselExampleIndicators1"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://kontakt.az/wp-content/uploads/2022/09/kombi-az-1.jpg"
            alt="First slide"
          />
        </div>{" "}
        <div className="carousel-item ">
          <img
            className="d-block w-100"
            src="https://kontakt.az/wp-content/uploads/2023/02/Artboard-1-copy@3x-scaled.jpg"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1@3x-scaled.webp"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://kontakt.az/wp-content/uploads/2023/02/4f1a4c62-0ed7-4bda-91c8-c66a37b10d0d_1_png.webp"
            alt="Third slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://kontakt.az/wp-content/uploads/2023/02/Macbook-Air_Valentines-Day-banner-aze_png.webp"
            alt="Third slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://kontakt.az/wp-content/uploads/2023/02/Galaxy-S23-Series-Pre-order-banner-aze-scaled.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators1"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators1"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
    </div>
  );
}
