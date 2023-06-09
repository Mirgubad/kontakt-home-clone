import React from "react";
import "../assets/css/kontakt-tv.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import VideoPlayBtn from "./VideoPlayBtn";

const owlOptions = {
  nav: false,
  loop: true,
  autoplay: true,
  items: 4,
  button: false,
  autoplayHoverPause: true,
  dots: false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
};
export default function KontaktTv() {
  return (
    <section id="kontaktTv">
      <div className="container">
        <div className="kontaktTv-header">
          <img
            class="lazy loaded"
            style={{ width: "67px", height: "58px" }}
            src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/kontakt-tv.png"
            data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/kontakt-tv.png"
            alt=""
            data-was-processed="true"
          />
          <h4>Kontakt TV</h4>
        </div>
        <OwlCarousel className="owl-theme" {...owlOptions}>
          <div className="item-video">
            <div className="vdo-container">
              <Link
                data-fancybox
                href="https://www.youtube.com/watch?v=KaRqqQsRoiw&ab_channel=KontaktHome"
              >
                <VideoPlayBtn />
                <img
                  data-qazy="true"
                  src="https://img.youtube.com/vi/KaRqqQsRoiw/mqdefault.jpg"
                  alt=""
                />
              </Link>
            </div>
            <p className="title">Ağıllı evinin idarəsi öz əlindədir!</p>
          </div>

          <div className="item-video">
            <div className="vdo-container">
              <Link
                data-fancybox
                href="https://www.youtube.com/watch?v=fSg-pVFdCdQ&ab_channel=KontaktHome"
              >
                <VideoPlayBtn />
                <img
                  data-qazy="true"
                  src="https://img.youtube.com/vi/fSg-pVFdCdQ/mqdefault.jpg"
                  alt=""
                />
              </Link>
            </div>
            <p className="title">Sony WH-1000XM5</p>
          </div>

          <div className="item-video">
            <div className="vdo-container">
              <Link
                data-fancybox
                href="https://www.youtube.com/watch?v=lU4rmm3Lamw&t=17s&ab_channel=KontaktHome"
              >
                <VideoPlayBtn />
                <img
                  data-qazy="true"
                  src="https://img.youtube.com/vi/lU4rmm3Lamw/mqdefault.jpg"
                  alt=""
                />
              </Link>
            </div>
            <p className="title">Yeni Samsung Galaxy S23 seriyası gəldi!</p>
          </div>

          <div className="item-video">
            <div className="vdo-container">
              <Link
                data-fancybox
                href="https://www.youtube.com/watch?v=xov3fOpsgk0&ab_channel=KontaktHome"
              >
                <VideoPlayBtn />
                <img
                  data-qazy="true"
                  src="https://img.youtube.com/vi/xov3fOpsgk0/mqdefault.jpg"
                  alt=""
                />
              </Link>
            </div>
            <p className="title">Kontakt Home-dan Huawei Nova Y70</p>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
}
