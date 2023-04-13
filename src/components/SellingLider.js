import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../assets/css/selling-lider.css";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Samsung galaxy a2211 2019",
    img: "https://kontakt.az/wp-content/uploads/2023/01/New-Project-2023-01-16T104601.959.png",
    old_price: "456.99M",
    price: "399.99M",
    fee: true,
    comission: false,
    display:"6.6",
    storage:"128GB",
    ram:"8GB"
  },
  {
    id: 2,
    title: "Blackview A100 6/128 GB Grey",
    img: "https://kontakt.az/wp-content/uploads/2023/01/New-Project-2023-01-16T104601.959.png",
    old_price: "456.99M",
    price: "399.99M",
    fee: true,
    comission: true,
    display:"4.6",
    storage:"256GB",
    ram:"16GB"
  },
  {
    id: 3,
    title: "Samsung Galaxy A33 DS (SM-A336) 128 GB 5G Blue",
    img: "https://kontakt.az/wp-content/uploads/2022/07/Galaxy-A33-Blue-1_png.webp",
    old_price: "546.99M",
    price: "499.99M",
    fee: true,
    comission: true,
    display:"7.0",
    storage:"128GB",
    ram:"32GB"
  },
  {
    id: 4,
    title: "Televizor LG LED 32LM550BPLB",
    img: "https://kontakt.az/wp-content/uploads/2021/11/new_project_-_2022-06-17t215705.736_1__png.webp",
    old_price: "1456.99M",
    price: "1399.99M",
    fee: true,
    comission: false,
    display:"1200",
    storage:"128GB",
    ram:"8GB"
  },
  {
    id: 5,
    title: "Televizor Sony KD-32W830K",
    img: "https://kontakt.az/wp-content/uploads/2022/10/New-Project-2022-10-12T105805.084_png.webp",
    old_price: "2456.99M",
    price: "2399.99M",
    fee: false,
    comission: true,
    display:"800",
    storage:"28GB",
    ram:"8GB"
  },
];

const owlOptions={
  nav:false,
  loop:true,
  autoplay:true,
  items:4.5,
  button:false,
  autoplayHoverPause:true
}

export default function SellingLider() {
  return (
    <section id="sellingLider">
      <div className="container">
        <div className="selling-lider-head">
          <h3 className="special_header">Satış Lideri</h3>
          <nav>
            <ul class="nav nav-tabs round-edge-tab">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#mobil-telefonlar"
                  data-toggle="tab"
                >
                  Smartfon
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#tv-audio-video" data-toggle="tab">
                  Televizor
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#komputerler" data-toggle="tab">
                  Noutbuk
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#kombiveradiatorlar"
                  data-toggle="tab"
                >
                  Kombi
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#smartsaatlar" data-toggle="tab">
                  Smartsaat
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#qulaqliqlar-umumi"
                  data-toggle="tab"
                >
                  Qulaqlıqlar
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#soyuducu" data-toggle="tab">
                  Soyuducu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#paltaryuyan" data-toggle="tab">
                  Paltaryuyan
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#tozsoran" data-toggle="tab">
                  Tozsoran
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#plansetler" data-toggle="tab">
                  Planşet
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#qabyuyan" data-toggle="tab">
                  Qabyuyan
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#utu" data-toggle="tab">
                  Ütü
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#fenhava" data-toggle="tab">
                  Fen
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#etceken" data-toggle="tab">
                  Ətçəkən
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#blender" data-toggle="tab">
                  Blender
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#mikrodalgali-soba"
                  data-toggle="tab"
                >
                  Mikrodalğalı soba
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#mebel" data-toggle="tab">
                  Mebel
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#tekstil" data-toggle="tab">
                  Tekstil
                </a>
              </li>{" "}
            </ul>
          </nav>
        </div>

        <OwlCarousel
          className="owl-theme"
         {...owlOptions}
        >
          {products.map((product) => (
            <div className="item" key={product.id}>
              <div className="item-top-right">
                <span style={{display:product.fee?"block":"none"}} className="no_fee">faizsiz</span>
                <span style={{display:product.comission?"block":"none"}} className="no_comission">komissiyasız</span>
              </div>
             <Link to="/details">
             <div className="item-center">
                <img src={product.img} />
                <h6>{product.title}</h6>
                <div className="owl-item-bottom">
                  <div>
                    <span className="old_price">{product.old_price}</span>
                    <span className="current_price">{product.price}</span>
                  </div>
                  <div>
                    <button className="add-to-basket">Səbətə at</button>
                  </div>
                </div>
              </div>
             </Link>
             <div className="bottom-features" data-id={product.id}>
                <ul>
                  <li>
                    <span>Ekran </span><span>{product.display}</span>
                  </li>
                  <li>
                    <span>Daxili yaddaş </span><span>{product.storage}</span>
                  </li>
                  <li>
                    <span>Operativ yaddaş </span><span>{product.ram}</span>
                  </li>
                </ul>
                <div className="action">
                  <button className="compare_btn" data-id={product.id}>
                    <i class="fa fa-balance-scale"></i>
                    Müqayisə et
                  </button>
                  <button className="add-to-favourite_btn" data-id={product.id}>
                    <i class="far fa-heart"></i>
                    Seçilmiş et
                  </button>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
        {/* <div className="daily-discount-bottom">
          <h6 className="see-all-sale">
            <a>Bütün təklifləri gör</a>
          </h6>
        </div> */}
      </div>
    </section>
  );
}
