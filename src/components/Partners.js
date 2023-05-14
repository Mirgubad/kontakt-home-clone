import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../assets/css/partner.css";

const owlOptions={
  nav:true,
  loop:true,
  autoplay:true,
  items:7.5,
  button:false,
  autoplayHoverPause:true,
  dots: false,
  responsiveClass:true,
  responsive:{
      0:{
          items:2,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:6,
          nav:true,
          loop:false
      }
  }
}

export default function Partners() {
  return (
    <section id="partners">
      <div className="container"><h3>Partnyorlar</h3></div>
      <div className="container">
     <div className="partners-carousel">
     <OwlCarousel
          className="owl-theme"
        {...owlOptions}
        >
          <div className="item">
            <img alt="" src="https://kontakt.az/wp-content/uploads/2020/03/Meizu_png.webp" />
          </div>
          <div className="item">
            <img alt="" src="https://kontakt.az/wp-content/uploads/2020/04/1-1_png.webp" />
          </div>
          <div className="item">
            <img alt="" src="https://kontakt.az/wp-content/uploads/2020/04/3_png.webp" />
          </div>
          <div className="item">
            <img alt="" src="https://kontakt.az/wp-content/uploads/2020/04/2_png.webp" />
          </div>
          <div className="item">
            <img alt="" src="https://kontakt.az/wp-content/uploads/2020/04/4_png.webp" />
          </div>
          <div className="item">
            <img alt="" src="https://kontakt.az/wp-content/uploads/2021/09/Z_png.webp" />
          </div>
          <div className="item">
            <img alt="" src="https://kontakt.az/wp-content/uploads/2020/03/hp_png.webp" />
          </div>
          <div className="item">
            <img alt="" src="https://kontakt.az/wp-content/uploads/2022/09/1280px-PlayStation_logo_and_wordmark.svg-1_png.webp" />
          </div>
          <div className="item">
            <img alt=""  src="https://kontakt.az/wp-content/uploads/2020/03/Acer_png.webp" />
          </div>
        </OwlCarousel>
     </div>
      </div>
    </section>
  );
}
