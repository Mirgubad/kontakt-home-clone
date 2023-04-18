import React from 'react'
import { Link } from 'react-router-dom'
import Countdown from './CountDown'
export default function MiniSlider() {
  return (
    <div
    id="carouselExampleIndicators2"
    className="carousel slide"
    data-ride="carousel">
    <ol className="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators2"
        data-slide-to="0"
        className="active"
      ></li>
      <li
        data-target="#carouselExampleIndicators2"
        data-slide-to="1"
      ></li>
      <li
        data-target="#carouselExampleIndicators2"
        data-slide-to="2"
      ></li>
    </ol>
    <div className="carousel-right-container">
      <h5>Kontakt Sevindirir</h5>
      <Countdown />
      <div className="carousel-inner carousel-inner-right">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-SBP-1105-SM-2177_fb0fe46be560964ec391377cd0fb50f0_w_png.webp"
            alt="First slide"
          />
          <h6>Samsung galaxy Note 21 2023 new model</h6>
          <div className="carousel-item-info">
            <div className="carousel-item-info_left">
              <span className="old_price">
                59.99<span className="azn_span">M</span>
              </span>
              <span className="current_price">
                39.99<span className="azn_span">M</span>
              </span>
            </div>
            <div className="carousel-item-info_right">
              <button className="add-to-basket">Səbətə at</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-KOT-1114-NB-1132_996b0ee98108335c7417e52da72c6b76_w_png.webp"
            alt="Second slide"
          />
          <h6>Acer Notebook 4gb 512gb SSD 2022 model</h6>
          <div className="carousel-item-info">
            <div className="carousel-item-info_left">
              <span className="old_price">
                59.99<span className="azn_span">M</span>
              </span>
              <span className="current_price">
                39.99<span className="azn_span">M</span>
              </span>
            </div>
            <div className="carousel-item-info_right">
              <button className="add-to-basket">Səbətə at</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://kontakt.az/wp-content/uploads/gallery-tum/TM-TK-QNT-1143-SF-0032_2ba5995dd25c38660b25555c5670661a_w.jpg"
            alt="Third slide"
          />
          <h6>Süfrə - Sarvagelli Buta minimal 160 x 220 sm</h6>
          <div className="carousel-item-info">
            <div className="carousel-item-info_left">
              <span className="old_price">
                59.99<span className="azn_span">M</span>
              </span>
              <span className="current_price">
                39.99<span className="azn_span">M</span>
              </span>
            </div>
            <div className="carousel-item-info_right">
              <button className="add-to-basket">Səbətə at</button>
            </div>
          </div>
        </div>
      </div>
      <div className="sale-bottom">
        <span className="see-all-sale">
          <Link>Bütün təklifləri gör</Link>
        </span>
      </div>
    </div>

    <a
      className="carousel-control-prev"
      href="#carouselExampleIndicators2"
      role="button"
      data-slide="prev"
    >
      <span
        className="carousel-control-prev-icon"
        aria-hidden="true"
      ></span>
      <span className="sr-only"></span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleIndicators2"
      role="button"
      data-slide="next"
    >
      <span
        className="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
      <span className="sr-only"></span>
    </a>
  </div>
  )
}
