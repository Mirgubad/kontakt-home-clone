import React from "react";
import "../assets/css/product-details.css";
import "../assets/css/details-carousel.css";
import HeaderBreadCrumb from "../components/HeaderBreadCrumb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AsNavFor from "../components/DetailsSlider";
import SeasonSale from "../components/SeasonSale";
import SimilarProducts from "../components/SimilarProducts";
import { Link } from "react-router-dom";

export default function Details() {
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
              <button
                type="button"
                onclick="window.location.href='https://kontakt.az/video-meslehetci/?vcpid=1306164'"
                class=" select-item-vco"
                data-id="1306164"
                data-reserve-id="1306164"
                data-mid="TM-DG-SBP-1105-SM-2143"
                data-price="599.99"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="white"></rect>
                  <path
                    d="M12.4139 18H1.58607C0.711799 18 0 17.1821 0 16.1775V7.82249C0 6.8179 0.711799 6 1.58607 6H12.4139C13.2882 6 14 6.8179 14 7.82249V16.1775C14 17.1821 13.289 18 12.4139 18ZM1.58607 7.51134C1.43907 7.51134 1.31528 7.65358 1.31528 7.82249V16.1775C1.31528 16.3464 1.43907 16.4887 1.58607 16.4887H12.4139C12.5609 16.4887 12.6847 16.3464 12.6847 16.1775V7.82249C12.6847 7.65358 12.5609 7.51134 12.4139 7.51134H1.58607Z"
                    fill="#323232"
                  ></path>
                  <path
                    d="M22.3817 18C22.3067 18 22.2325 17.9858 22.1615 17.9582L15.4507 15.3363C15.1808 15.2305 15 14.9442 15 14.6224V9.66037C15 9.34741 15.1713 9.06735 15.4302 8.95533L22.141 6.05068C22.2175 6.01778 22.2996 6 22.3817 6C23.2737 6 24 6.81796 24 7.82263V16.1783C24 17.182 23.2737 18 22.3817 18ZM16.342 14.0845L22.4607 16.4752C22.5735 16.4361 22.658 16.3152 22.658 16.1774V7.82174C22.658 7.6866 22.5775 7.56924 22.4686 7.52656L16.342 10.1787V14.0845Z"
                    fill="#323232"
                  ></path>
                  <path
                    d="M4.2 11.4C4.86274 11.4 5.4 10.8627 5.4 10.2C5.4 9.53726 4.86274 9 4.2 9C3.53726 9 3 9.53726 3 10.2C3 10.8627 3.53726 11.4 4.2 11.4Z"
                    fill="#FF003C"
                  ></path>
                </svg>
                <span>Canlı Video Məsləhətçi</span>
                <span class="vcomob">Video Məsləhətçi</span>
              </button>
              <button
                type="button"
                class="feedback-action feaheart select-item"
                data-id="1306164"
                data-reserve-id="1306164"
                data-mid="TM-DG-SBP-1105-SM-2143"
                data-price="599.99"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="white"></rect>
                  <path
                    d="M11.9995 22C11.7381 22 11.4766 21.9532 11.228 21.8604C4.91019 19.4892 1 13.3619 1 9.04564C1 7.00964 1.61226 5.24548 2.76958 3.94416C3.88454 2.69061 5.40368 2 7.04712 2C9.39766 2 10.7363 3.22142 11.5392 4.14069C11.6589 4.27753 11.8228 4.35283 12.0005 4.35283C12.1782 4.35283 12.343 4.27753 12.4626 4.14069C13.2646 3.22233 14.6033 2 16.9538 2C18.5972 2 20.1155 2.69061 21.2304 3.94325C22.3887 5.24456 23 7.00872 23 9.04472C23 10.481 22.57 12.1084 21.7561 13.7513C21.5646 14.1379 21.0951 14.2968 20.7075 14.1049C20.3199 13.9139 20.1615 13.4455 20.353 13.0589C21.0509 11.651 21.4348 10.2248 21.4348 9.04381C21.4348 5.44384 19.18 3.55937 16.9529 3.55937C15.6142 3.55937 14.6235 4.03967 13.6421 5.16466C13.2268 5.64037 12.6284 5.91312 12.0005 5.91312C11.3725 5.91312 10.7741 5.64037 10.3589 5.16466C9.37556 4.04151 8.38581 3.56121 7.04712 3.56121C4.81996 3.56121 2.56518 5.44476 2.56518 9.04564C2.56518 10.8741 3.4647 13.1819 4.97188 15.2179C6.70739 17.5634 9.12513 19.4029 11.7795 20.3993C11.9213 20.4526 12.0787 20.4526 12.2205 20.3993C13.9661 19.7445 15.5709 18.7582 16.9906 17.4688C17.3101 17.1786 17.8054 17.2016 18.0964 17.5202C18.3873 17.8389 18.3643 18.333 18.0448 18.6232C16.4778 20.0457 14.7045 21.1349 12.772 21.8604C12.5225 21.9532 12.261 22 11.9995 22Z"
                    fill="#1D1D1B"
                  ></path>
                </svg>{" "}
                <span class="vcomob">Seçilmişlər</span>
              </button>
              <button
                type="button"
                class="feedback-action feascale compare-button"
                data-id="1306164"
                data-reserve-id="1306164"
                data-mid="TM-DG-SBP-1105-SM-2143"
                data-price="599.99"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_53_606)">
                    <rect width="24" height="24" fill="white"></rect>
                    <path
                      d="M9.63593 15.4195H0.651704C0.433424 15.4195 0.230348 15.311 0.108719 15.1287C-0.0118234 14.9475 -0.0335427 14.7175 0.0500769 14.5168L4.14852 4.75231C4.24735 4.51794 4.47323 4.36169 4.72734 4.35301C4.98255 4.34325 5.2182 4.48539 5.33223 4.71217L10.2191 14.4766C10.3201 14.6784 10.3092 14.9182 10.1909 15.1103C10.0725 15.3023 9.86181 15.4195 9.63593 15.4195ZM1.63125 14.1175H8.58145L4.80119 6.56436L1.63125 14.1175Z"
                      fill="#1D1E1C"
                    ></path>
                    <path
                      d="M5.14315 19.8819C2.30768 19.8819 0 17.7291 0 15.0827C0 14.7235 0.292126 14.4316 0.651581 14.4316C1.01104 14.4316 1.30316 14.7235 1.30316 15.0827C1.30316 17.0108 3.02551 18.5798 5.14315 18.5798C7.26079 18.5798 8.98314 17.0108 8.98314 15.0827C8.98314 14.7235 9.27526 14.4316 9.63472 14.4316C9.99417 14.4316 10.2863 14.7235 10.2863 15.0827C10.2874 17.7291 7.9797 19.8819 5.14315 19.8819Z"
                      fill="#1D1E1C"
                    ></path>
                    <path
                      d="M18.8568 19.8819C16.0202 19.8819 13.7136 17.7291 13.7136 15.0827C13.7136 14.7235 14.0057 14.4316 14.3652 14.4316C14.7247 14.4316 15.0168 14.7235 15.0168 15.0827C15.0168 17.0108 16.7391 18.5798 18.8568 18.5798C20.9744 18.5798 22.6968 17.0108 22.6968 15.0827C22.6968 14.7235 22.9889 14.4316 23.3483 14.4316C23.7078 14.4316 23.9999 14.7235 23.9999 15.0827C23.9999 17.7291 21.6922 19.8819 18.8568 19.8819Z"
                      fill="#1D1E1C"
                    ></path>
                    <path
                      d="M23.3483 15.4193H14.3641C14.1458 15.4193 13.9427 15.3108 13.8211 15.1285C13.7006 14.9473 13.6789 14.7173 13.7625 14.5166L17.8609 4.75213C17.9597 4.51776 18.1856 4.36151 18.4397 4.35283C18.6939 4.34524 18.9306 4.48521 19.0446 4.71199L23.9304 14.4764C24.0314 14.6782 24.0205 14.918 23.9022 15.1101C23.7838 15.3022 23.5742 15.4193 23.3483 15.4193ZM15.3436 14.1173H22.2938L18.5136 6.56418L15.3436 14.1173Z"
                      fill="#1D1E1C"
                    ></path>
                    <path
                      d="M20.5119 5.65461H2.85837C2.49891 5.65461 2.20679 5.36273 2.20679 5.00357C2.20679 4.64442 2.49891 4.35254 2.85837 4.35254H20.5119C20.8713 4.35254 21.1635 4.64442 21.1635 5.00357C21.1635 5.36273 20.8713 5.65461 20.5119 5.65461Z"
                      fill="#FF003C"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_53_606">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>{" "}
                <span class="vcomob">Müqayisə</span>
              </button>
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
                  <div className="color">
                    <p>Rəng:</p>
                    <button className="black" title="Black"></button>
                    <button className="red" title="Red"></button>
                  </div>
                  <div className="label_popovers">
                    <Link>
                      <img
                        class="lazy loaded"
                        src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/icons/nagd.png"
                        data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/icons/nagd.png"
                        alt=""
                        data-was-processed="true"
                      />
                    </Link>
                    <Link>
                      <img
                        class="lazy loaded"
                        src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/icons/kart.png"
                        data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/icons/kart.png"
                        alt=""
                        data-was-processed="true"
                      />
                    </Link>
                    <Link>
                      <img
                        class="lazy loaded"
                        src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/icons/online.png"
                        data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/icons/online.png"
                        alt=""
                        data-was-processed="true"
                      />
                    </Link>
                    <Link>
                      <img
                        class="lazy loaded"
                        src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/icons/qapida.png"
                        data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/icons/qapida.png"
                        alt=""
                        data-was-processed="true"
                      />
                    </Link>
                    <Link>
                      <img
                        class="lazy loaded"
                        src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/2021/taksit_az.png"
                        data-src="https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/2021/taksit_az.png"
                        alt=""
                        data-was-processed="true"
                      />
                    </Link>
                  </div>
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
              <div className="credit-calculation">
                <div className="title">
                  <p>Kredit Kalkulyatoru</p>
                  <div className="title-right">
                    <img
                    alt=""
                      class="lazy loaded"
                      src="https://kontakt.az/wp-content/uploads/2022/09/birbank.png"
                      data-src="https://kontakt.az/wp-content/uploads/2022/09/birbank.png"
                      data-was-processed="true"
                    />
                    <p>
                      18 ay 37.23 M-<smal>dan</smal>
                    </p>
                  </div>
                </div>
              </div>
              <div className="payment-option">
                <div className="range-section">
                  <div className="range-tooltip">
                    <span>18 ay</span>
                  </div>
                  <div className="range-container">
                    <span className="bar">
                      <span className="fill"></span>
                    </span>
                    <input type="range" min="6" max="18" step="3"  />
                  </div>
                  <ul>
                    <li>
                      <p>6</p>
                    </li>
                    <li>
                      <p>9</p>
                    </li>
                    <li>
                      <p>12</p>
                    </li>
                    <li>
                      <p>15</p>
                    </li>
                    <li>
                      <p>18</p>
                    </li>
                  </ul>
                </div>
                <div className="payment-info">
                  <ul>
                    <li>
                      <p>0%</p>
                    </li>
                    <li>
                      <p>İlkin ödəniş 0 M</p>
                    </li>
                    <li>
                      <p>Aylıq ödəniş 43.7 M</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="buy">
                <button> Bir kliklə al </button>
                <button> Nağd al </button>
                <button> Hissə - hissə al </button>
              </div>
            </div>
          </div>

          <section id="review-tabs">
         
          <div className="tabs">
              <ul
                className="nav nav-tabs round-edge-tab"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item nav-item-first nav-item-zero">
                  <Link
                    className="nav-link active"
                    id="first-tab"
                    data-toggle="tab"
                    href="#first"
                    role="tab"
                    aria-controls="first"
                    aria-selected="true"
                  >
                    {" "}
                    Xüsusiyyətlər
                  </Link>
                </li>
                <li className="nav-item nav-item-second">
                  <Link
                    className="nav-link"
                    id="second-tab"
                    data-toggle="tab"
                    href="#second"
                    role="tab"
                    aria-controls="second"
                    aria-selected="false"
                  >
                    {" "}
                    İstifadəçi rəyləri
                  </Link>
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade active show"
              id="first"
              role="tabpanel"
              aria-labelledby="first-tab"
            >
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 pr-0">
                  <ul class="features-review-tabs submenuItems_params">
                    <li class="gray-line">Ekran</li>
                    <li>Daxili yaddaş</li>
                    <li class="gray-line">Operativ yaddaş</li>
                    <li>Əsas kamera</li>
                    <li class="gray-line">Ön kamera</li>
                    <li>Nüvə sayı</li>
                    <li class="gray-line">SIM kartların sayı</li>
                    <li>SIM kartın növü</li>
                    <li class="gray-line">Prosessorun adı</li>
                    <li>Prosessor tezliyi</li>
                    <li class="gray-line">Əməliyyat sistemi</li>
                    <li>Əməliyyat sistemin versiyası</li>
                    <li class="gray-line">3G</li>
                    <li>4G</li>
                    <li class="gray-line">NFC</li>
                    <li>Prosessorun növü</li>
                    <li class="gray-line">Şəbəkə</li>
                    <li>Displey növü</li>
                    <li class="gray-line">Simsiz enerji</li>
                    <li>İnfraqırmızı port</li>
                    <li class="gray-line">Göz tanıma funksiyası</li>
                    <li>Suyadavamlılıq</li>
                    <li class="gray-line">Tozkeçirməzlik</li>
                    <li>Zərbəyədavamlılıq</li>
                    <li class="gray-line">Üz tanıma</li>
                    <li>Sürətli enerji yığma</li>
                    <li class="gray-line">Ön fləş</li>
                    <li>Qorunma dərəcəsi</li>
                    <li class="gray-line">Ölçülər</li>
                    <li>Ekran rənglərinin sayı</li>
                    <li class="gray-line">Yaddaş kartı dəstəyi</li>
                    <li>Barometr</li>
                    <li class="gray-line">Giroskop</li>
                    <li>İşıq sensoru</li>
                    <li class="gray-line">Yaxınlaşdırma sensoru</li>
                    <li>Optik sabitləşmə</li>
                    <li class="gray-line">Video formatı</li>
                    <li>Bluetooth versiyası</li>
                    <li class="gray-line">Avtofokus əsas kamera</li>
                    <li>Avtofokus ön kamera</li>
                    <li class="gray-line">Video icazəsi və kadr tezliyi</li>
                    <li>Video asta çəkiliş</li>
                    <li class="gray-line">Rəng</li>
                    <li>Enerji toplama növü</li>
                    <li class="gray-line">LED bildiriş göstəricisi</li>
                    <li>Qulaqlıq interfeysi</li>
                    <li class="gray-line">Batareya növü</li>
                    <li>Çıxarıla bilən batareya</li>
                    <li class="gray-line">Akselerometr</li>
                    <li>Enerji yığma gücü</li>
                    <li class="gray-line">Batareyanın həcmi</li>
                    <li>İstehsal ili</li>
                    <li class="gray-line">Barmaq izi oxuyucusu</li>
                    <li>Korpusun materialı</li>
                    <li class="gray-line">Görüntü imkanı</li>
                    <li>Çəki</li>
                    <li class="gray-line">Seriya</li>
                    <li>İstehsalçı</li>{" "}
                  </ul>
                </div>
                <div class="col-lg-8 col-md-6 col-sm-12 pl-0">
                  <ul class="features-review-tabs submenuItems_params">
                    <li class="gray-line">6.56"</li>
                    <li>128 GB</li>
                    <li class="gray-line">8 GB</li>
                    <li>50 MP + 2 MP</li>
                    <li class="gray-line">8 MP</li>
                    <li>8</li>
                    <li class="gray-line">2</li>
                    <li>Nano SIM</li>
                    <li class="gray-line">Qualcomm</li>
                    <li>2.4 GHz</li>
                    <li class="gray-line">Android</li>
                    <li>Android 12</li>
                    <li class="gray-line">Var</li>
                    <li>Var</li>
                    <li class="gray-line">Var</li>
                    <li>Qualcomm SM6225 Snapdragon 680 4G (6 nm)</li>
                    <li class="gray-line">4G</li>
                    <li>IPS LCD</li>
                    <li class="gray-line">Yox</li>
                    <li>Yox</li>
                    <li class="gray-line">Yox</li>
                    <li>Yox</li>
                    <li class="gray-line">Var</li>
                    <li>Yox</li>
                    <li class="gray-line">Var</li>
                    <li>Var</li>
                    <li class="gray-line">Yox</li>
                    <li>IP54</li>
                    <li class="gray-line">163.8 × 75 × 8 mm</li>
                    <li>16 mln</li>
                    <li class="gray-line">Var</li>
                    <li>Yox</li>
                    <li class="gray-line">Yox</li>
                    <li>Yox</li>
                    <li class="gray-line">Var</li>
                    <li>Yox</li>
                    <li class="gray-line">1080p</li>
                    <li>5.0</li>
                    <li class="gray-line">Var</li>
                    <li>Yox</li>
                    <li class="gray-line">1080p, 30 kadr/s</li>
                    <li>Yox</li>
                    <li class="gray-line">Black</li>
                    <li>USB Type-C</li>
                    <li class="gray-line">Yox</li>
                    <li>3.5 mm (mini jack)</li>
                    <li class="gray-line">Li-Po</li>
                    <li>Yox</li>
                    <li class="gray-line">Var</li>
                    <li>33 Vt</li>
                    <li class="gray-line">5000 mAh</li>
                    <li>2022</li>
                    <li class="gray-line">Korpusda</li>
                    <li>Plastik</li>
                    <li class="gray-line">720 × 1612</li>
                    <li>190 q</li>
                    <li class="gray-line">OPPO A77S</li>
                    <li>OPPO</li>{" "}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SimilarProducts />
      <SeasonSale />
    </section>
  );
}
