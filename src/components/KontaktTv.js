import React from "react";
import "../assets/css/kontakt-tv.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

const owlOptions={
  nav:false,
  loop:true,
  autoplay:true,
  items:4,
  button:false,
  autoplayHoverPause:true,
  dots:false
}
export default function KontaktTv() {
  return (
    <section id="kontaktTv">
    <div className="container">
  <div className="kontaktTv-header">
  <img class="lazy loaded" style={{width:"67px",height:"58px"}} src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/kontakt-tv.png" data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/kontakt-tv.png" alt="" data-was-processed="true"/>
   <h4>Kontakt TV</h4>   
  </div>
    <OwlCarousel
        className="owl-theme"
      {...owlOptions}
      >
        <div className="item-video">
          <div className="vdo-container">
            <Link
              data-fancybox
              href="https://www.youtube.com/watch?v=KaRqqQsRoiw&ab_channel=KontaktHome"
            >
              <div className="play">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 415.346 415.346"
                  style={{ enableBackground: "new 0 0 415.346 415.346" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697
c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
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
              <div className="play">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 415.346 415.346"
                  style={{ enableBackground: "new 0 0 415.346 415.346" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697
c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
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
              <div className="play">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 415.346 415.346"
                  style={{ enableBackground: "new 0 0 415.346 415.346" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697
c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
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
              <div className="play">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 415.346 415.346"
                  style={{ enableBackground: "new 0 0 415.346 415.346" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697
c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
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
