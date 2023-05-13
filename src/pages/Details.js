import React from "react";
import "../assets/css/product-details.css";
import "../assets/css/details-carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderBreadCrumb from "../components/HeaderBreadCrumb";
import AsNavFor from "../components/DetailsSlider";
import FavouritesBtn from "../components/FavouritesBtn";
import LiveAssistantBtn from "../components/LiveAssistantBtn";
import CompareBtnDetails from "../components/CompareBtnDetails";
import CreditCalculation from "../components/CreditCalculation";
import PaymentOption from "../components/PaymentOption";
import BuyBtn from "../components/BuyBtn";
import BuyByCashBtn from "../components/BuyByCashBtn";
import BuyByCreditBtn from "../components/BuyByCreditBtn";
import ReviewSection from "../components/ReviewSection";
import DetailsPopover from "../components/DetailsPopover";
import ItemColors from "../components/ItemColors";
import DailyDiscount from "../components/DailyDiscount";

export default function Details() {
  var colors = ["red", "black"];
  return (
    <section className="product-details">
      <HeaderBreadCrumb />
      <div className="container">
        <div id="product_details">
          <div class="product-headline">
            <div class="product-status">
              <p class="success">
                <img
                  class="skip_lazy"
                  src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/check.png"
                  alt=""
                />
                Məhsul mövcuddur{" "}
              </p>
              <p>
                <span>TM-DG-SBP-1105-SM-2143</span>
              </p>
            </div>
            <div class="product-feedback ">
              <LiveAssistantBtn />
              <FavouritesBtn />
              <CompareBtnDetails />
            </div>
          </div>

          <div className="product-info">
            <div className="product-img">
              <div className="details-img-top">
                <span class="no_fee">faizsiz</span>
                <span class="no_comission">komissiyasız</span>
                <span class="best_selling">top satılan</span>
              </div>
              <AsNavFor />
            </div>
            <div className="product-info-right">
              <div className="wrapper">
                <h3>OPPO A77s 8/128 GB Orange</h3>
                <div className="feature">
                  <ItemColors colors={colors} />
                  <DetailsPopover />
                </div>
                <div className="product_price">
                  <p>qiymət</p>
                  <p className="grid-price">
                    729.99 M{" "}
                    <span className="saled_price">
                      -60 <small>M</small>
                    </span>
                    <span>nağd alışda 669.99 M</span>
                  </p>
                </div>
              </div>
              <CreditCalculation />
              <PaymentOption />

              <div className="buy">
                <BuyBtn />
                <BuyByCashBtn />
                <BuyByCreditBtn />
              </div>
            </div>
          </div>
          <ReviewSection />
        </div>
      </div>
      <DailyDiscount title="Oxşar məhsullar" />
      <DailyDiscount title="Ən yaxşı sezon təklifləri" />
      <div id="lightboxOverlay"></div>
    </section>
  );
}
