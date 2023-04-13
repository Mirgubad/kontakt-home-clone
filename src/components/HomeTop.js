import { useState } from "react";
import "../assets/css/sidebar-menu.css";
import Countdown from "./CountDown";

const HomeTop = () => {
  const firstIconStyle = { width: "22px", maxHeight: "30px" };
  const secondIconStyle = { display: "none", width: "22px", maxHeight: "30px" };

  
  return (
    <div id="homeTop">
      <div className="container">
        <div className="product-menu">
          <ul className="sidebar-menu">
            <li>
              <a>
                <div className="icon">
                  <img
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Telefon.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Telefon.png"
                    data-was-processed="true"
                  />
                  <img
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Telefon.png"
                  />
                </div>
                <span className="title">Smartfonlar</span>
              </a>
              <div class="menu-open ">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/"
                      >
                        <span>Smartfonlar</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/"
                      >
                        <span>Apple</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=iPhone+14+Pro"
                      >
                        iPhone 14 Pro
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=iPhone+14+Pro+Max"
                      >
                        iPhone 14 Pro Max
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=iPhone+14+Plus"
                      >
                        iPhone 14 Plus
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=iPhone+14"
                      >
                        iPhone 14
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=iPhone+13+Pro"
                      >
                        iPhone 13 Pro
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=iPhone+11"
                      >
                        iPhone 11
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/samsung-mobil-telefonlar/"
                      >
                        <span>Samsung</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/samsung-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Samsung+Galaxy+A13"
                      >
                        Samsung Galaxy A13
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/samsung-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Samsung+Galaxy+A33"
                      >
                        Samsung Galaxy A33
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_istehsalci%5B%5D=Samsung&amp;fphone_seriya%5B%5D=Samsung+Galaxy+A53"
                      >
                        Samsung Galaxy A53
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Samsung+Galaxy+S23"
                      >
                        Samsung Galaxy S23
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Samsung+Galaxy+Z+Fold+4"
                      >
                        Samsung Galaxy Z Fold
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/xiaomi-mobil-telefonlar/"
                      >
                        <span>Xiaomi</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/xiaomi-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Xiaomi+Redmi+10A"
                      >
                        Xiaomi Redmi 10A
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/xiaomi-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Xiaomi+Redmi+10C"
                      >
                        Xiaomi Redmi 10C
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/xiaomi-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Xiaomi+Poco+M5"
                      >
                        Xiaomi Poco M5
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Xiaomi+Poco+X4+GT"
                      >
                        Xiaomi Poco X4 GT
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/xiaomi-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Xiaomi+12+Lite"
                      >
                        Xiaomi 12 Lite
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/"
                      >
                        <span>Smartfonlar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/"
                      >
                        Apple
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/oppo/"
                      >
                        OPPO
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/samsung-mobil-telefonlar/"
                      >
                        Samsung
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/xiaomi-mobil-telefonlar/"
                      >
                        Xiaomi
                      </a>

                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/huawei-mobil-telefonlar/"
                      >
                        Huawei
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/realme/"
                      >
                        Realme
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/oneplus-mobil-telefonlar/"
                      >
                        OnePlus
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/blackview/"
                      >
                        Blackview
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/honor-mobil-telefonlar/"
                      >
                        Honor
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/infinix/"
                      >
                        Infinix
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/nothing/"
                      >
                        Nothing
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/tcl-smartfonlar/"
                      >
                        TCL
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/asus-smartfon/"
                      >
                        Asus
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/vivo-mobil-telefonlar/"
                      >
                        Vivo
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/motorola/"
                      >
                        Motorola
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ru/telefony-i-planshety/mobilnie-smartfoni/nokia-ru/"
                      >
                        Nokia
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/google/"
                      >
                        Google
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/tecno/"
                      >
                        Tecno
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/qulaqliqlar-umumi/"
                      >
                        <span>Qulaqlıqlar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/qulaqliqlar/"
                      >
                        Simli
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/qulaqliqlar-bluetooth/"
                      >
                        Simsiz
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/qulaqliqlar-umumi/qulaqliqlar-bluetooth/?fqn=&amp;fqx=&amp;fqulaqliqlar_qosulma_novu%5B%5D=TWS+%28tam+simsiz%29"
                      >
                        TWS (tam simsiz)
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/"
                      >
                        <span>Aksesuarlar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/powerbank/"
                      >
                        Power Bank
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/adapterler/"
                      >
                        Adapterlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/aksesuarlar-telefonlar/simsiz-adapterler/"
                      >
                        Simsiz adapterlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/enerjitoplayicinaqiller/"
                      >
                        USB naqillər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/qoruyucuortuk/"
                      >
                        Smartfon üçün örtüklər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/qulaqliq-qablari/"
                      >
                        Qulaqlıq üçün örtüklər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/aksesuarlar-telefonlar/qoruyuccu-shushe/"
                      >
                        Qoruyucu şüşələr
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/microsdkart/"
                      >
                        Micro SD kartlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/tutacag/"
                      >
                        Telefon üçün tutacaqlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/selfie/"
                      >
                        Selfi çubuqları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/aksesuarlar-telefonlar/magsafe-aksessuarlari/"
                      >
                        MagSafe aksessuarları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/aksesuarlar-telefonlar/smartfonlar-ucun-qadcetler/"
                      >
                        Smartfonlar üçün qadjetlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/aksesuarlar-telefonlar/acarliq/"
                      >
                        Açarlıqlar
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/ev-ofis/"
                      >
                        <span>Ev və ofis telefonları</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/audio-video/portativakustika/"
                      >
                        <span>Portativ akustikalar</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/plansetler/"
                      >
                        <span>Planşetlər</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/duymeli-telefonlar/"
                      >
                        <span>Düyməli telefonlar</span>
                      </a>
                    </div>
                  </li>
                  <li class="datt3">
                    <a href="https://kontakt.az/telefonlar/mobil-telefonlar/oppo/">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-11@3x-1-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-11@3x-1-scaled.webp"
                        data-was-processed="true"
                      />
                    </a>
                    <a href="https://kontakt.az/?s=blackview+a95">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-13@3x-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-13@3x-scaled.webp"
                        data-was-processed="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a>
                <div className="icon">
                  <img
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Saat.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Saat.png"
                    data-was-processed="true"
                  />
                  <img
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Saat.png"
                  />
                </div>
                <span className="title">Smart qadjetlər</span>
              </a>
              <div class="menu-open ">
                <ul>
                  <li class="">
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/smartwatch/"
                      >
                        <span>Smart saatlar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smartsaatlar/apple-smartsaatlar/"
                      >
                        Apple
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smartsaatlar/samsung-smartsaatlar/"
                      >
                        Samsung
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smartsaatlar/huawei-smartsaatlar/"
                      >
                        Huawei
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smartsaatlar/xiaomi-smartsaatlar/"
                      >
                        Xiaomi
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smartsaatlar/kieslect/"
                      >
                        Kieslect
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smartsaatlar/blackview-smartsaat/"
                      >
                        Blackview
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smartsaatlar/gelius/"
                      >
                        Gelius
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smart-qolbaglar/"
                      >
                        <span>Smart qolbaqlar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smart-qolbaglar/xiaomi-smartqolbaglar/"
                      >
                        Xiaomi
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smart-qolbaglar/huawei-smartqolbaglar/"
                      >
                        Huawei
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smart-qolbaglar/blackview-smartqolbaq/"
                      >
                        Blackview qol
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/usaq-saatlari/"
                      >
                        <span>Uşaq smart saatları</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/usaq-saatlari/canyon-usaq-saatlari/"
                      >
                        Canyon
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/aksesuar-saatlar/"
                      >
                        <span>Smart saat üçün aksesuarlar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/aksesuar-saatlar/apple-band/"
                      >
                        Apple Band
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/qulaqliqlar-bluetooth/"
                      >
                        <span>Qulaqlıqlar (Bluetooth)</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/"
                      >
                        <span>Nəqliyyat</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/segway/"
                      >
                        Hoverboard
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/mopedler/"
                      >
                        Mopedlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/elektroskeyt/"
                      >
                        Elektroskeytlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/giroskuter/"
                      >
                        Elektrosamokatlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/elektro-rolik/"
                      >
                        Elektro roliklər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/elektromobil/"
                      >
                        Elektromobillər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/moped-ucun-aksesuarlar/"
                      >
                        Moped üçün aksesuarlar
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/"
                      >
                        <span>Ağıllı ev</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/xiaomi-mi-home/"
                      >
                        Xiaomi Mi home
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/elsmart/"
                      >
                        Elsmart
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/tv-audio-video/audio-video/smart-akustika/"
                      >
                        Smart akustika
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/domofon/"
                      >
                        Domofonlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/alternativ-enerjili-ishiqlar/"
                      >
                        Alternativ enerjili işıqları
                      </a>
                    </div>
                  </li>
                  <li class="">
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/saatlar/"
                      >
                        <span>Qol saatları</span>
                      </a>
                    </div>
                  </li>
                  <li class="datt3">
                    <a href="https://kontakt.az/apple-watch-8-45-mm/">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-4@3x-6-1-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-4@3x-6-1-scaled.webp"
                        data-was-processed="true"
                      />
                    </a>
                    <a href="https://kontakt.az/?s=band+7+pro">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-3@3x-7-1-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-3@3x-7-1-scaled.webp"
                        data-was-processed="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a>
                <div className="icon">
                  <img
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Komputer.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Komputer.png"
                    data-was-processed="true"
                  />
                  <img
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Komputer.png"
                  />
                </div>
                <span className="title">Notbuklar,PK,planşetlər</span>
              </a>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/notebook/"
                      >
                        <span>Notbuklar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_kateqoriya%5B%5D=Ev+v%C9%99+i%C5%9F"
                      >
                        Ev və iş
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_kateqoriya%5B%5D=Oyun"
                      >
                        Oyun
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_kateqoriya%5B%5D=Ultrabuk"
                      >
                        Ultrabuklar
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/notebook/"
                      >
                        <span>Notbuklar brend üzrə</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=Apple"
                      >
                        Apple
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=MSI"
                      >
                        MSI
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=HP"
                      >
                        HP
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=Acer"
                      >
                        Acer
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=HUAWEI"
                      >
                        HUAWEI
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=Lenovo"
                      >
                        Lenovo
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=Asus"
                      >
                        Asus
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=Dell"
                      >
                        Dell
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/kompyuterler/"
                      >
                        <span>Kompyuterlər</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/monobloklar/"
                      >
                        Monobloklar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/sistem-bloku/"
                      >
                        Sistem blokları
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/monitor/"
                      >
                        <span>Monitorlar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/monitorlar/?fqn=&amp;fqx=&amp;fmonitor_producer%5B%5D=Apple"
                      >
                        Apple
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/monitorlar/?fqn=&amp;fqx=&amp;fmonitor_producer%5B%5D=HP"
                      >
                        HP
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/monitorlar/?fqn=&amp;fqx=&amp;fmonitor_producer%5B%5D=Asus"
                      >
                        Asus
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/monitorlar/?fqn=&amp;fqx=&amp;fmonitor_producer%5B%5D=Dell"
                      >
                        Dell
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/komputer-printer-aksesuarlari/"
                      >
                        <span>Kompüter hissələri</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputeraksesuarlari/soyutmasistemi/"
                      >
                        Soyutma sistemləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/komputer-printer-aksesuarlari/videokartlar/"
                      >
                        Videokartlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/komputer-printer-aksesuarlari/ana-plata/"
                      >
                        Ana platalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/komputer-printer-aksesuarlari/prosessor/"
                      >
                        Prosessorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/komputer-printer-aksesuarlari/sistem-bloklari-ucun-keysles/"
                      >
                        Sistem bloku üçün keyslər
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/plansetler/"
                      >
                        <span>Planşetlər</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/plansetler/?fqn=&amp;fqx=&amp;fphone_istehsalci%5B%5D=Apple"
                      >
                        Apple
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/plansetler/?fqn=&amp;fqx=&amp;fphone_istehsalci%5B%5D=Samsung"
                      >
                        Samsung
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/plansetler/?fqn=&amp;fqx=&amp;fphone_istehsalci%5B%5D=HUAWEI"
                      >
                        HUAWEI
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/plansetler/?fqn=&amp;fqx=&amp;fphone_istehsalci%5B%5D=Xiaomi"
                      >
                        Xiaomi
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/plansetler/?fqn=&amp;fqx=&amp;fphone_istehsalci%5B%5D=Blackview"
                      >
                        Blackview
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/plansetler/?fqn=&amp;fqx=&amp;fphone_istehsalci%5B%5D=TCL"
                      >
                        TCL
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/yaddash/"
                      >
                        <span>Yaddaş</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/yaddash/xaricitoplayicilar/"
                      >
                        Xarici və daxili toplayıcılar (HDD/SSD)
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputeraksesuarlari/usbtoplayici/"
                      >
                        USB toplayıcılar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputeraksesuarlari/sdkart/"
                      >
                        SD kartlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/microsdkart/"
                      >
                        Micro SD kartlar
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/"
                      >
                        <span>Oyun aksesuarları</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-klaviaturalari/"
                      >
                        Klaviaturalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-mouslari/"
                      >
                        Mouse
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-joystikleri/"
                      >
                        Joystiklər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-qulaqliqlari/"
                      >
                        Qulaqlıqlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-mikrofonlari/"
                      >
                        Mikrofonlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-eynekleri/"
                      >
                        Eynəklər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-mousepadlari/"
                      >
                        Mousepad
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-kreslolari/"
                      >
                        Kreslolar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-cantalari/"
                      >
                        Çantalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-masasi-az/"
                      >
                        Oyun masası
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/gamepad-tutacagi-az/"
                      >
                        Gamepad tutacağı
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/wifi-ve-shebeke-avadanliqlari/"
                      >
                        <span>Wifi və şəbəkə avadanlıqları</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/wifi-ve-shebeke-avadanliqlari/modem/"
                      >
                        Modemlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/wifi-ve-shebeke-avadanliqlari/ruter/"
                      >
                        Routerlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/wifi-ve-shebeke-avadanliqlari/guclendirici/"
                      >
                        Wi-Fi gücləndiriciləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/wifi-ve-shebeke-avadanliqlari/usb-wifi/"
                      >
                        Wi-Fi adapterlər
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/elektron-kitab/"
                      >
                        <span>Elektron kitablar</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/resm-plansheti/"
                      >
                        <span>Rəsm üçün planşetlər</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/printer/"
                      >
                        <span>Printerlər</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/komputeraksesuarlari/"
                      >
                        <span>Kompüter aksessuarları</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/planshet-ucun-aksesuarlar/"
                      >
                        <span>Planşet üçün aksesuarlar</span>
                      </a>
                    </div>
                  </li>
                  <li class="datt3">
                    <a href="https://kontakt.az/lenovo-idepad-1-14-81vu00d6us/">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-17@3x-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-17@3x-scaled.webp"
                        data-was-processed="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a>
                <div className="icon">
                  <img
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/soyuducu.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/soyuducu.png"
                    data-was-processed="true"
                  />
                  <img
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/soyuducu.png"
                  />
                </div>
                <span className="title">Mətbəx üçün məişət texnikası</span>
              </a>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/"
                      >
                        <span>Böyük məişət texnikası</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/soyuducu/"
                      >
                        Soyuducular
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/paltaryuyan/"
                      >
                        Paltaryuyanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/solo-soba/"
                      >
                        Solo sobalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qabyuyan/"
                      >
                        Qabyuyanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/aspirator/"
                      >
                        Aspiratorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/dondurucu/"
                      >
                        Dondurucular
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/dispenser/"
                      >
                        Dispenserlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/sherab-soyuduculari/"
                      >
                        Şərab soyuducuları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/icki-soyuduculari/"
                      >
                        İçki soyuducuları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/siqar-ucun-dolablar/"
                      >
                        Siqar üçün dolablar
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/ickilerin-hazirlanmasi/"
                      >
                        <span>İçkilərin hazırlanması</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/caydan/"
                      >
                        Çaydanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/induksion-caydan/"
                      >
                        İnduksion çaydanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/termopot/"
                      >
                        Termopotlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/qehvebisiren/"
                      >
                        Qəhvəbişirənlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/qehveuyuden/"
                      >
                        Qəhvəüyüdənlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/sireceken/"
                      >
                        Şirəçəkənlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/metbexucun-kicik-meiset-texnikasi/sud-kopuklendirici/"
                      >
                        Süd köpükləndiricilər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/buz/"
                      >
                        Buz hazırlayanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ickilerin-hazirlanmasi/su-filtri/"
                      >
                        Su filtrləri
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/qurashdirilmish-texnika/"
                      >
                        <span>Quraşdırılan texnika</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/soba/"
                      >
                        Sobalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/plite/"
                      >
                        Plitələr
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/aspirator/"
                      >
                        Aspiratorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qurashdirilmish-texnika/qurashdirilan-soyuducular/"
                      >
                        Quraşdırılan soyuducular
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qurashdirilmish-texnika/qurashdirilan-qabyuyan-mashinlar/"
                      >
                        Quraşdırılan qabyuyan maşınlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qurashdirilmish-texnika/qurashdirilan-paltaryuyan-mashinlar/"
                      >
                        Quraşdırılan paltaryuyan maşınlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qurashdirilmish-texnika/qurashdirilmish-mikrosoba/"
                      >
                        Quraşdırılmış mikrodalğalı sobalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qurashdirilmish-texnika/qurashdirilan-dondurucular/"
                      >
                        Quraşdırılan dondurucular
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qurashdirilmish-texnika/isitm%c9%99-siyirtm%c9%99si/"
                      >
                        İsitmə siyirtmələri
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/ickiler/"
                      >
                        <span>İçkilər</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/qehve/"
                      >
                        Qəhvələr
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/qehvebisiren-ucun-kapsul/"
                      >
                        Qəhvəbişirən üçün kapsullar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/metbexucun-kicik-meiset-texnikasi/siroplar/"
                      >
                        Siroplar
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/kicik-meiset-texnikas/"
                      >
                        <span>Yemək hazırlanması</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/etceken/"
                      >
                        Ətçəkənlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/blender/"
                      >
                        Blenderlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/mikrodalgali-soba/"
                      >
                        Mikrodalğalı sobalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/multibisirici/"
                      >
                        Multibişiricilər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/mikser/"
                      >
                        Mikserlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/corek-bisiren/"
                      >
                        Çörək bişirənlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/kombayn/"
                      >
                        Kombaynlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/mini-soba/"
                      >
                        Mini sobalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/toster/"
                      >
                        Tosterlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/izqara/"
                      >
                        İzqaralar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/fritoz/"
                      >
                        Fritozlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/buxarli-bisirici/"
                      >
                        Buxarlı bişiricilər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/meyve_qurudan/"
                      >
                        Meyvə qurudanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/dograyici/"
                      >
                        Doğrayıcılar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/dilimleyici/"
                      >
                        Dilimləyicilər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/dondurmaduzelden/"
                      >
                        Dondurma düzəldənlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/metbex_terezisi/"
                      >
                        Mətbəx tərəziləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/induksiyaliplite/"
                      >
                        İnduksiyalı plitələr
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/"
                      >
                        <span>Qab-qacaqlar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/qazan-ve-tava-desti/"
                      >
                        Qazan və tava dəsti
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/qazanlar/"
                      >
                        Qazanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/tavalar/"
                      >
                        Tavalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/qapaqlar/"
                      >
                        Qapaqlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/serviz/"
                      >
                        Yemək və çay dəstləri (Servizlər)
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/induksion-caydan/"
                      >
                        İnduksion çaydanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/metbex-desti/"
                      >
                        Mətbəx aksesuarları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/bicaq-bicaq-itileyen/"
                      >
                        Bıçaq və bıçaq itiləyənlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/termos/"
                      >
                        Termoslar
                      </a>
                    </div>
                  </li>
                  <li class="datt3">
                    <a href="https://kontakt.az/mikrodalgali-soba-hoffmann-g2390s/">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-8@3x-1-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-8@3x-1-scaled.webp"
                        data-was-processed="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a>
                <div className="icon">
                  <img
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Paltaryuyan-1.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Paltaryuyan-1.png"
                    data-was-processed="true"
                  />
                  <img
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Paltaryuyan-1.png"
                  />
                </div>
                <span className="title">Ev üçün məişət texnikaları</span>
              </a>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-ucun-meiset-texnikasi/temizlik-ve-camashir/"
                      >
                        <span>Təmizlik və çamaşırlar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/paltaryuyan/"
                      >
                        Paltaryuyanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/quruducu_mashin/"
                      >
                        Quruducu maşınlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/tozsoran/"
                      >
                        Tozsoranlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/robot-tozsoran/"
                      >
                        Robot tozsoranlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/akkumulyator-tozsoran/"
                      >
                        Akkumulyatorlu tozsoranlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/yuyucu-tozsoran/"
                      >
                        Yuyucu tozsoranlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/utu/"
                      >
                        Ütülər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/buxarligenerator/"
                      >
                        Buxarlı generatorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/buxarliutu/"
                      >
                        Buxarlandırıcılar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/buxarlitemizleyici/"
                      >
                        Buxarlı təmizləyicilər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/tikis-masinlari/"
                      >
                        Tikiş maşınları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/utumasasi/"
                      >
                        Ütü masaları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/paltarqurudan/"
                      >
                        Paltarqurudanlar
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-ucun-meiset-texnikasi/saglamliq/"
                      >
                        <span>Sağlamlıq</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/disfirca/"
                      >
                        Elektrik diş fırçaları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/irriqatorlar/"
                      >
                        İrriqatorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/tonometr/"
                      >
                        Tonometrlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/termometr/"
                      >
                        Termometrlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/elektrik-yorgan/"
                      >
                        Elektrik yorğanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/elektrikli-isidici/"
                      >
                        Elektrikli isidicilər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/inqalyatorlar/"
                      >
                        İnqalyatorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/masajor/"
                      >
                        Masajorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/masajor-ayaq-ucun/"
                      >
                        Masajorlar ayaq üçün
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/kombi/"
                      >
                        <span>Kombi sistemləri</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimkompleksi/"
                      >
                        <span>İqlim texnikası</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/kombi/"
                      >
                        Kombi sistemləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/kondisioner/"
                      >
                        Kondisionerlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/isti-dosheme/"
                      >
                        İsti döşəmələr
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/kombi-aksesuar/"
                      >
                        Kombi üçün seksiyalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/yagradiatorlari/"
                      >
                        Yağ radiatorları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/su-qizdirici-kalonka/"
                      >
                        Su qızdırıcı kalonkalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/qaz-kalonkasi/"
                      >
                        Qaz kalonkaları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/konvektor/"
                      >
                        Konvektorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/spiralli-pec/"
                      >
                        Spirallı peçlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ventilyator/"
                      >
                        Ventilyatorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/hava-temizleyici/"
                      >
                        Hava təmizləyiciləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/havanemlendiricisi/"
                      >
                        Hava nəmləndiricilər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/hava-teravetlendirici/"
                      >
                        Hava təravətləndiricilər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/iqlimkompleksi/"
                      >
                        İqlim kompleksləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/teravetlendirici-yag/"
                      >
                        Təravətləndirici yağlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/termoqiqrometr/"
                      >
                        Termoqiqrometrlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/iqlim-texnikasi-ucun-aksesuarlar/"
                      >
                        İqlim texnikası üçün aksesuarlar
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-ucun-meiset-texnikasi/gozellik-ve-saglamliq/"
                      >
                        <span>Gözəllik və baxım</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/fenhava/"
                      >
                        Fenlər (Hava)
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/fenmasha/"
                      >
                        Fenlər (Maşa)
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/fenutu/"
                      >
                        Fenlər (Ütü)
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/fendaraq/"
                      >
                        Fenlər (Daraq)
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/multistayler/"
                      >
                        Multistaylerlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/epilyator/"
                      >
                        Epilyatorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/uzqirxan/"
                      >
                        Üzqırxanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/sacqirxan/"
                      >
                        Saçqırxanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/trimmer/"
                      >
                        Trimmerlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/terezi/"
                      >
                        Tərəzilər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/shexsi-qulluq/"
                      >
                        Şəxsi qulluq
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/masajor/"
                      >
                        Masajorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/masajor-ayaq-ucun/"
                      >
                        Masajorlar ayaq üçün
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/manikur-desti/"
                      >
                        Manikür və pedikür dəstləri
                      </a>
                    </div>
                  </li>
                  <li class="datt3"></li>
                </ul>
              </div>
            </li>

            <li>
              <a>
                <div className="icon">
                  <img
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Fotoaparat.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Fotoaparat.png"
                    data-was-processed="true"
                  />
                  <img
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Fotoaparat.png"
                  />
                </div>
                <span className="title">Foto texnika</span>
              </a>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/foto-texnika/peshakar-fotoaparatlar/"
                      >
                        <span>Güzgülü və güzgüsüz fotoaparatlar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/foto-ve-video/peshakar-fotoaparatlar/canon-fotoaparat/"
                      >
                        Canon
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/foto-ve-video/peshakar-fotoaparatlar/nikon-fotoaparat/"
                      >
                        Nikon
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/foto-ve-video/peshakar-fotoaparatlar/leica-fotoaparat/"
                      >
                        Leica
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/foto-ve-video/peshakar-fotoaparatlar/sony-fotoaparat/"
                      >
                        Sony
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/foto-ve-video/peshakar-fotoaparatlar/action-kamera/"
                      >
                        Action kameralar
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/fotoaksesuar/"
                      >
                        <span>Foto aksesuarlar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/fotoaksesuar/linzalar/"
                      >
                        Obyektivlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/fotoaksesuar/foto-canta/"
                      >
                        Foto çantalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/foto-ve-video/fotoaksesuar/foto-stabilizatorlar/"
                      >
                        Foto stabilizatorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/fotoaksesuar/shtativler/"
                      >
                        Ştativlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/foto-ve-video/fotoaksesuar/fotokagiz/"
                      >
                        Fotokağızlar
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/foto-ve-video/blogger-mikrafonu/"
                      >
                        <span>Blogger mikrofonları</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/foto-ve-video/diktofonlar-az/"
                      >
                        <span>Diktofonlar</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/foto-ve-video/tehluke-kamera/"
                      >
                        <span>Təhlükəsizlik kameraları</span>
                      </a>
                    </div>
                  </li>
                  <li class="datt3">
                    <a href="https://kontakt.az/foto-ve-video/peshakar-fotoaparatlar/leica-fotoaparat/">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-21@3x_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-21@3x_png.webp"
                        data-was-processed="true"
                      />
                    </a>
                    <a href="https://kontakt.az/insta360-one-x2-and-matterport-tripod/">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-17@3x_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-17@3x_png.webp"
                        data-was-processed="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a>
                <div className="icon">
                  <img
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Oyun.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Oyun.png"
                    data-was-processed="true"
                  />
                  <img
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Oyun.png"
                  />
                </div>
                <span className="title">Hobbi və əyləncə</span>
              </a>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/oyun-ve-eylence/playstation-store/"
                      >
                        <span>PlayStation</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/playstation/"
                      >
                        PlayStation konsolları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/playstation-store/jostick/"
                      >
                        Playstation joystick və aksesuarlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/eynek/"
                      >
                        PlayStation virtual eynəklər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aksesuarlar-oyun-ve-eylence/oyunlar/"
                      >
                        Playstation oyun diskləri
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/hobbi-ve-eylence/xbox-az/"
                      >
                        <span>Xbox</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/oyun-ve-eylence/oyun-konsolu/nintendo/"
                      >
                        <span>Nintendo</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/"
                      >
                        <span>İdman</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/futbol/"
                      >
                        Futbol
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/fitnes/"
                      >
                        Fitnes
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/boks/"
                      >
                        Boks
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/qantel/"
                      >
                        Qantellər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/velotrenajorlar/"
                      >
                        Velotrenajorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/qacish-trenajorlari/"
                      >
                        Qaçış trenajorları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/univarsal-trenajorlar/"
                      >
                        Universal trenajorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/eliptik-trenajorlar/"
                      >
                        Eliptik trenajorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/jim-ucun-oturacaqlar/"
                      >
                        Jim üçün oturacaqlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/elave-qidalar/"
                      >
                        Əlavə qidalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/roller-dayaqlar/"
                      >
                        Rollerlər/dayaqlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/idman-oyunlari/"
                      >
                        İdman oyunları
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/"
                      >
                        <span>Nəqliyyat</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/velosiped/"
                      >
                        Velosipedlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/segway/"
                      >
                        Hoverboardlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/samokat/"
                      >
                        Samokatlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/giroskuter/"
                      >
                        Elektrosamokatlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/elektroskeyt/"
                      >
                        Elektroskeytlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/elektro-rolik/"
                      >
                        Elektro roliklər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/elektromobil/"
                      >
                        Elektromobillər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/mopedler/"
                      >
                        Mopedlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/velo-aksesuarlar/"
                      >
                        Velosiped üçün aksesuarlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/moped-ucun-aksesuarlar/"
                      >
                        Moped üçün aksesuarlar
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/"
                      >
                        <span>Oyunlar və əyləncə</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/oyuncaq-silahlar-ve-techizatlari/"
                      >
                        Oyuncaq silahlar və təchizatları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/macera-oyun-destleri/"
                      >
                        Süjetli-rollu oyunlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/yumshaq-oyuncaqlar/"
                      >
                        Yumşaq oyuncaqlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/stolustu-oyunlar/"
                      >
                        Stolüstü oyunlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/inkishaf-etdirici-oyunlar/"
                      >
                        İnkişaf etdirici oyunlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/oyuncaq-mashinlar/"
                      >
                        Oyuncaq maşınlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/pazllar/"
                      >
                        Pazllar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/idman-oyunlari/"
                      >
                        İdman oyunları
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/hobbi-ve-eylence/musiqi-aletleri-ve-avadanliqlari/"
                      >
                        <span>Musiqi alətləri və avadanlıqları</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/"
                      >
                        <span>Oyun aksesuarları</span>
                      </a>
                    </div>
                  </li>
                  <li class="datt3">
                    <a href="https://kontakt.az/playstation-vr2/">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/04/VR-1x1-sayt-banner-aze_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/04/VR-1x1-sayt-banner-aze_png.webp"
                        data-was-processed="true"
                      />
                    </a>
                    <a href="https://kontakt.az/hoverboard-zigzag-k8-graffiti/">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-5@3x-4-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-5@3x-4-scaled.webp"
                        data-was-processed="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a>
                <div className="icon">
                  <img
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Alətlər.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Alətlər.png"
                    data-was-processed="true"
                  />
                  <img
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Alətlər.png"
                  />
                </div>
                <span className="title">Alətlər</span>
              </a>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/"
                      >
                        <span>Elektrik alətlər</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/drel/"
                      >
                        Drellər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/perforator/"
                      >
                        Perforatorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/laqonda/"
                      >
                        Laqondalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/frezer/"
                      >
                        Frezerlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/qaynaq-aparati/"
                      >
                        Qaynaq aparatları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/qaykabaglayan/"
                      >
                        Qayka bağlayanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/shurupbaglayan/"
                      >
                        Şurup bağlayanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/mishar/"
                      >
                        Mişarlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/divar-teqibcileri-az/"
                      >
                        Divar təqibçiləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/rende/"
                      >
                        Rəndələr
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/fen-aletler/"
                      >
                        Texniki fenlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/texniki-mikser/"
                      >
                        Texniki mikserlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/mesafe/"
                      >
                        Məsafə ölçənlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/nivelir/"
                      >
                        Lazer nivelirlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/coxfunksiyali-el-aletleri/"
                      >
                        Çoxfunksiyalı əl alətləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/doyec/"
                      >
                        Döyəclər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/enerji-desti/"
                      >
                        Enerji dəstləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/birleshdirici-utu/"
                      >
                        Birləşdirici ütülər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/dairevi-misar-sirkulyar-misar/"
                      >
                        Dairəvi mişarlar (Sirkulyar mişarlar)
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/detektorlar/"
                      >
                        Detektorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/kley-tapanca/"
                      >
                        Kley tapançaları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/dezgahlar/"
                      >
                        Dəzgahlar
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/"
                      >
                        <span>Əl alətləri</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/alet-destleri/"
                      >
                        Alət dəstləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/acharlar/"
                      >
                        Açarlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/vintburan/"
                      >
                        Mərgüllər (Vintburanlar)
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/kelbetinler/"
                      >
                        Kəlbətinlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/olchen-ruletka/"
                      >
                        Ölçənlər (Ruletkalar)
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/chekicler/"
                      >
                        Çəkiclər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/mismarcixaran/"
                      >
                        Mismarçıxaranlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/domkrat/"
                      >
                        Domkratlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/shtanger/"
                      >
                        Ştangerlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/seviyye-olcen/"
                      >
                        Səviyyə ölçənlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/boya-ceken-roller/"
                      >
                        Boya çəkən rollerlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/boya-fircalari/"
                      >
                        Boya fırçaları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/shpateller/"
                      >
                        Şpatellər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/baltalar/"
                      >
                        Baltalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/kabel-kesen-qaycilar/"
                      >
                        Kabel kəsən qayçılar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/metal-kesen/"
                      >
                        Dəmir kəsən qayçılar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/silikon-vuran-tapanca/"
                      >
                        Silikon vuran tapançalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/malakes/"
                      >
                        Malakeşlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/boya-cileleyicisi/"
                      >
                        Boya çiləyicilər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/%c9%99l-mishari/"
                      >
                        Əl mişarları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/cilalayici/"
                      >
                        Cilalayıcılar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/qisqac/"
                      >
                        Qısqaçlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/mismar-vuran/"
                      >
                        Mismar vuranlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/delgec-aletler/"
                      >
                        Dəlgəclər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/isg%c9%99n%c9%99/"
                      >
                        İsgənələr
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler-aksesuarlari/"
                      >
                        <span>Elektrik alətləri üçün aksesuarlar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler-aksesuarlari/drel-aksesuar/"
                      >
                        Drel üçün aksesuarlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler-aksesuarlari/mishar-aksesuar/"
                      >
                        Mişar üçün aksesuarlar
                      </a>

                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler-aksesuarlari/laqonda-aksesuar/"
                      >
                        Laqonda üçün aksesuarlar
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/inshaat-geyimleri/"
                      >
                        <span>İnşaat geyimləri</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/generatorlar/"
                      >
                        <span>Generatorlar</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/kompressor/"
                      >
                        <span>Kompressorlar</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/avtoyuyucu/"
                      >
                        <span>Yüksək təzyiqli yuyucular</span>
                      </a>
                    </div>
                  </li>
                  <li class="datt3">
                    <a href="https://kontakt.az/qaynaq-aparati-powerfull-mma-300-a/">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/02/bosch-banner2_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/02/bosch-banner2_png.webp"
                        data-was-processed="true"
                      />
                    </a>
                    <a href="https://kontakt.az/ru/uglovaya-shlifmashina-bosch-gws-7-125/?_sgm_campaign=product&amp;_sgm_source=TM-MT-TTM-1198-TS-0010&amp;_sgm_action=search&amp;_sgm_term=gws+7-125">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/02/bosch-banner1_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/02/bosch-banner1_png.webp"
                        data-was-processed="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a>
                <div className="icon">
                  <img
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Avtomobil-2.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Avtomobil-2.png"
                    data-was-processed="true"
                  />
                  <img
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Avtomobil-2.png"
                  />
                </div>
                <span className="title">Avtomobil məhsulları</span>
              </a>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/abtomobil-mehsullari/tekerler-ve-diskler/"
                      >
                        <span>Təkərlər və disklər</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/tekerler/"
                      >
                        Avtomobil təkərləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/avtomobil-diskleri/"
                      >
                        Avtomobil diskləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/motosiklet-tekeri/"
                      >
                        Motosiklet təkərləri
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/abtomobil-mehsullari/motor-yaglari-mayeler/"
                      >
                        <span>Motor yağları və mayelər</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/motor-yaglari/"
                      >
                        Mühərrik yağları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/hidravlik-yaglar/"
                      >
                        Hidravlik yağlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/suret-qutusu-yaglari/"
                      >
                        Sürət qutusu yağları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/antifrizler/"
                      >
                        Antifrizlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/qatqilar/"
                      >
                        Qatqılar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/eylec-mayeleri/"
                      >
                        Əyləc mayeləri
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/abtomobil-mehsullari/avtomobil-uchun-elektronika/"
                      >
                        <span>Avtomobil üçün elektronika</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/foto-texnika/videoqeydiyyatci/"
                      >
                        Videoqeydiyyatçılar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/avtomobil-maqnitofonu/"
                      >
                        Avtomobil üçün maqnitofonlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/avtomobil-ucun-monitorlar/"
                      >
                        Avtomobil üçün monitorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/avtomobil-tutacaqlari/"
                      >
                        Avtomobil üçün tutacaqlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/avtomobil-adapter/"
                      >
                        Avtomobil üçün adapterlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/avtomobil-ucun-akustik-sistem/"
                      >
                        Avtomobil üçün akustik sistemlər
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/abtomobil-mehsullari/ehtiyyat-hisseleri/"
                      >
                        <span>Ehtiyat hissələri</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/akkumulyatorlar/"
                      >
                        Akkumulyatorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/cereyan-oturucu/"
                      >
                        Cərəyan ötürücüləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/texniki-levazimatlar/"
                      >
                        Texniki ləvazimatlar
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/abtomobil-mehsullari/avtomobil-ucun-aksesuarlar/"
                      >
                        <span>Avtomobil üçün aksesuarlar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/oturacaq-ortuyu/"
                      >
                        Oturacaq örtükləri
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/abtomobil-mehsullari/avtomobile-qulluq/"
                      >
                        <span>Avtomobilə qulluq</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/abtomobil-mehsullari/avtomobile-qulluq/mini-avtoyuyucu/"
                      >
                        Mini avtoyuyucu
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/abtomobil-mehsullari/avtomobil-ucun-tozsoranlar/"
                      >
                        Avtomobil üçün tozsoranlar
                      </a>
                    </div>
                  </li>
                  <li class="datt3">
                    <a href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/tekerler/">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-13@3x_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-13@3x_png.webp"
                        data-was-processed="true"
                      />
                    </a>
                    <a href="https://kontakt.az/abtomobil-mehsullari/ehtiyyat-hisseleri/avtomobil-ucun-akustik-sistem/">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-11@3x_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-11@3x_png.webp"
                        data-was-processed="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a>
                <div className="icon">
                  <img
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Divan.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Divan.png"
                    data-was-processed="true"
                  />
                  <img
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Divan.png"
                  />
                </div>
                <span className="title">Mebel və ev tekstili</span>
              </a>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/mebel/"
                      >
                        <span>Ev mebeli</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/yataq-mebeli/"
                      >
                        Yataq mebeli
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/qonaq-mebeli/"
                      >
                        Qonaq mebeli
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/usaq-mebeli/"
                      >
                        Uşaq mebeli
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/yumsaq-mebeller/"
                      >
                        Yumşaq mebeli
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/puflar/"
                      >
                        Puflar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/tv-stendler/"
                      >
                        TV stendlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/jurnal-masalar/"
                      >
                        Jurnal masaları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/dehliz-dolablari/"
                      >
                        Dəhliz dolabları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/oturacaqlar/"
                      >
                        Qonaq stulları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/calishma-masalari/"
                      >
                        Çalışma masaları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/metbexmasa/"
                      >
                        Mətbəx masaları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/metbexstul/"
                      >
                        Mətbəx stulları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/carpayilar/"
                      >
                        Çarpayılar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/dolablar/"
                      >
                        Dolablar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/trumolar/"
                      >
                        Trümolar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/tumbalar/"
                      >
                        Tumbalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/kamodlar/"
                      >
                        Kamodlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/masalar/"
                      >
                        Masalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/vitrinler/"
                      >
                        Vitrinlər
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/tekstil/"
                      >
                        <span>Ev tekstili</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/masaortutu/"
                      >
                        Masa örtükləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/yorganlar/"
                      >
                        Yorğanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/yataqdesti/"
                      >
                        Yataq dəstləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/pike/"
                      >
                        Pikə dəstləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/pikeli-yataq-desti/"
                      >
                        Pikəli yataq dəstləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/edyallar/"
                      >
                        Ədyallar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/desmallar/"
                      >
                        Dəsmallar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/yataqortuyuyataqdesti/"
                      >
                        Yataq örtükləri / yataq dəstləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/yataq-ortuyu/"
                      >
                        Yataq örtükləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/dosek/"
                      >
                        Döşəklər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/yastiglar/"
                      >
                        Yastıqlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/hamamxalati/"
                      >
                        Hamam xalatları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/hamamdesti/"
                      >
                        Hamam dəstləri
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/madame-coco/"
                      >
                        <span>Madame Coco</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/abad/"
                      >
                        <span>ABAD</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/bahar/"
                      >
                        <span>Ev dekorları</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/metbexmebeli/"
                      >
                        <span>Mətbəx mebelləri</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/matraslar/"
                      >
                        <span>Matraslar</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/divar-kaghizlari/"
                      >
                        <span>Divar kağızları</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/bag-mebeli/"
                      >
                        <span>Bağ mebeli və aksesuarları</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/boy-aynalari/"
                      >
                        <span>Boy aynaları</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/xalcalar/"
                      >
                        <span>Xalçalar</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/perde/"
                      >
                        <span>Pərdələr</span>
                      </a>
                    </div>
                  </li>
                  <li class="datt3">
                    <a href="https://kontakt.az/battaniye-tekstil-sv-roslin-battaniye-tkyasil/">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-2@3x-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-2@3x-scaled.webp"
                        data-was-processed="true"
                      />
                    </a>
                    <a href="https://kontakt.az/imfa-mobilya-imfa-marsel-yataq-desti/">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/a0ccc8f1-b33e-4cf6-98f8-6887e43fb891_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/a0ccc8f1-b33e-4cf6-98f8-6887e43fb891_png.webp"
                        data-was-processed="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a>
                <div className="icon">
                  <img
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Dipcək.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Dipcək.png"
                    data-was-processed="true"
                  />
                  <img
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Dipcək.png"
                  />
                </div>
                <span className="title">Ev və bağ</span>
              </a>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/"
                      >
                        <span>Ağıllı ev</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/yandex/"
                      >
                        Yandex
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/xiaomi-mi-home/"
                      >
                        Xiaomi Mi Home
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/elsmart/"
                      >
                        Elsmart
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/domofon/"
                      >
                        Domofonlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/alternativ-enerjili-ishiqlar/"
                      >
                        Alternativ enerjili işıqları
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/"
                      >
                        <span>Təmir və santexnika</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/dush-sistemleri/"
                      >
                        Duş sistemləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/metbex-kranlari/"
                      >
                        Mətbəx kranları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/hovze-kranlari/"
                      >
                        Hövzə kranları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/dush-destleri/"
                      >
                        Duş dəstləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/yerustu-dushlar/"
                      >
                        Yerüstü duşlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/el-dushlari/"
                      >
                        Əl duşları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/dush-ucun-aksesuarlar/"
                      >
                        Duş üçün aksessuarlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/nerdivan/"
                      >
                        Nərdivanlar
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/"
                      >
                        <span>Qab-qacaqlar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/qazan-ve-tava-desti/"
                      >
                        Qazan və tava dəsti
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/induksion-caydan/"
                      >
                        İnduksion çaydanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/qazanlar/"
                      >
                        Qazanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/tavalar/"
                      >
                        Tavalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/qapaqlar/"
                      >
                        Qapaqlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/metbex-desti/"
                      >
                        Mətbəx aksesuarları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/serviz/"
                      >
                        Yemək və çay dəstiləri (Servizlər)
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/bicaq-bicaq-itileyen/"
                      >
                        Bıçaq və bıçaq itiləyənlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/termos/"
                      >
                        Termoslar
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/"
                      >
                        <span>Təmir</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/"
                      >
                        Elektrik alətlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/"
                      >
                        Əl alətləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler-aksesuarlari/"
                      >
                        Elektrik alətləri üçün aksesuarlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/inshaat-geyimleri/"
                      >
                        İnşaat geyimləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/generatorlar/"
                      >
                        Generatorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/frezer/"
                      >
                        Frezerlər
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/hovuz-ve-aksesuarlar/"
                      >
                        <span>Hovuz və aksesuarlar</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/hovuz-ve-aksesuarlar/hovuzlar/"
                      >
                        Hovuzlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/hovuz-ve-aksesuarlar/hovuz-ucun-avadanliq/"
                      >
                        Hovuz üçün avadanlıq
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/hovuz-ve-aksesuarlar/hovuz-ucun-aksesuarlar/"
                      >
                        Hovuz üçün aksesuarlar
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/bag-mebeli/"
                      >
                        <span>Bağ mebeli və aksesuarları</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/bag-texnikasi/"
                      >
                        <span>Bağ texnikası</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/peshekar-avadanlig/"
                      >
                        <span>Peşəkar təmizlik avadanlıqları</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/divar-kaghizlari/"
                      >
                        <span>Divar kağızları</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/lampalar/"
                      >
                        <span>Lampalar</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/fener/"
                      >
                        <span>Fənərlər</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/fotoaksesuar/batareyalar/"
                      >
                        <span>Batareyalar</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/eko-cantalar/"
                      >
                        <span>Eko çantalar</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/cetirler/"
                      >
                        <span>Çətirlər</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/camadanlar/"
                      >
                        <span>Çamadanlar</span>
                      </a>
                    </div>
                  </li>
                  <li class="datt3"></li>
                </ul>
              </div>
            </li>

            <li>
              <a>
                <div className="icon">
                  <img
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Canta-1.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Canta-1.png"
                    data-was-processed="true"
                  />
                  <img
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Canta-1.png"
                  />
                </div>
                <span className="title">Dəftərxana ləvazimatları</span>
              </a>

              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/"
                      >
                        <span>Məktəb ləvazimatları</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/mektebcanta/"
                      >
                        Məktəb çantaları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/defterler/"
                      >
                        Dəftərlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/qelem/"
                      >
                        Qələmlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/karandas/"
                      >
                        Karandaşlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/qelemcanta/"
                      >
                        Qələm çantaları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/yonanlar/"
                      >
                        Qələm yonanlar
                      </a>

                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/sirkul/"
                      >
                        Pərgarlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/pozan/"
                      >
                        Pozanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/boya/"
                      >
                        Boyalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/delgecler/"
                      >
                        Dəlgeclər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/qaycilar/"
                      >
                        Qayçılar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/yapishdirici/"
                      >
                        Yapışqanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/xetkeshler/"
                      >
                        Xətkeşlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/flomasterler/"
                      >
                        Flomasterlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/resm-ucun-fircalari/"
                      >
                        Rəsm üçün fırçalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/resm-defteri/"
                      >
                        Rəsm dəftərləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/plastilin/"
                      >
                        Plastilin
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/tebashir/"
                      >
                        Təbaşir
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/markerler/"
                      >
                        Markerlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/rengleme/"
                      >
                        Rəngləmələr
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/bloknotlar/"
                      >
                        Bloknotlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/lovhe/"
                      >
                        Lövhələr
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteb-aksesuarlari/"
                      >
                        <span>Məktəb aksessuarları</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/yemek-qablari/"
                      >
                        Yemək qabları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/su-qabi/"
                      >
                        Su qabları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/termoslar/"
                      >
                        Termoslar
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/"
                      >
                        <span>Ofis ləvazimatları</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/metaldolab/"
                      >
                        Dəmir dolablar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/seyf/"
                      >
                        Seyflər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/shreder/"
                      >
                        Şrederlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/hesablayici-mashin/"
                      >
                        Hesablayıcı cihazlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/qovluqlar/"
                      >
                        Qovluqlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/cap-kagizi/"
                      >
                        Çap kağızları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/vizit-karti-qabi/"
                      >
                        Vizit kartı qabları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/defterxana-fayli/"
                      >
                        Dəftərxana faylları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/gundelik-kitabca/"
                      >
                        Gündəlik kitabçalar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/zerf/"
                      >
                        Zərflər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/qelemler/"
                      >
                        Qələmlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/yapishqan-lent/"
                      >
                        Yapışqan lentlər
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/ev-ofis/"
                      >
                        <span>Ev və ofis telefonları</span>
                      </a>
                    </div>
                  </li>
                  <li class="datt3"></li>
                </ul>
              </div>
            </li>

            <li>
              <a>
                <div className="icon">
                  <img
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Canta.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Canta.png"
                    data-was-processed="true"
                  />
                  <img
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Canta.png"
                  />
                </div>
                <span className="title">Uşaq aləmi</span>
              </a>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/usaqalemi/usaq-yedirilmesi/"
                      >
                        <span>Uşaq yedirilməsi</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/yemekstolu/"
                      >
                        Uşaq üçün yemək masaları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/qidalandiricilar/"
                      >
                        Qidalandırıcılar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/meyve-suzgecleri/"
                      >
                        Meyvə süzgəcləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/sud-saganlar/"
                      >
                        Süd sağanlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/usaq-termos/"
                      >
                        Uşaq üçün termoslar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/emzikler/"
                      >
                        Əmziklər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/emzik-ucun-tutacaq/"
                      >
                        Əmzik üçün tutacaqlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/emzik-qablari/"
                      >
                        Əmzik qabları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/qab-komplekti/"
                      >
                        Uşaq qabları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/elektron-isidici/"
                      >
                        Elektron isidicilər
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/usaqalemi/korpelere-qulluq/"
                      >
                        <span>Körpələrə qulluq</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/bezstolu/"
                      >
                        Bez dəyişmə stolu
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/daraqlar/"
                      >
                        Daraqlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/sterilizator-usaqaksesuar/"
                      >
                        Sterilizatorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/burun-aspiratoru/"
                      >
                        Burun aspiratorları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/inqalyator/"
                      >
                        Elektrikli inqalyatorlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/sungerler/"
                      >
                        Uşaq üçün hamam aksesuarları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/termometr/"
                      >
                        Termometrlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/usaq-terezisi/"
                      >
                        Uşaq tərəziləri
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/usaqalemi/usaq-ucun-smart-qadjetler/"
                      >
                        <span>Uşaq üçün smart qadjetlər</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/usaq-saatlari/"
                      >
                        Uşaq saatları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/videodaye/"
                      >
                        Videodayə
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/usaqalemi/arabalar-ve-oturucaqlar/"
                      >
                        <span>Uşaq arabaları və avtomobil oturacaqları</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/oturacaq/"
                      >
                        Avtomobil oturacaqları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/araba/"
                      >
                        Uşaq arabaları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/arabalar-ve-oturucaqlar/manejl%c9%99r/"
                      >
                        Manejlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/arabalar-ve-oturucaqlar/yerim%c9%99-arabasi/"
                      >
                        Yerimə arabaları
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/avtomobil-oturacaqlari-ucun-aksessuarlar/"
                      >
                        Avtomobil oturacaqları üçün aksessuarlar
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/analar-ucun-aksesuarlar/"
                      >
                        Analar üçün aksesuarlar
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/"
                      >
                        <span>Oyunlar</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/"
                      >
                        <span>Məktəb ləvazimatları</span>
                      </a>
                    </div>
                  </li>
                  <li class="datt3">
                    <a href="https://kontakt.az/dect-panasonic-baby-cam-kx-hn3001ruw-2/">
                      <img
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-5@3x-7-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-5@3x-7-scaled.webp"
                        data-was-processed="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a>
                <div className="icon">
                  <img
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/09/29fafe3d-6095-4c2e-8fc1-39678474bb1b.png"
                    src="https://kontakt.az/wp-content/uploads/2022/09/29fafe3d-6095-4c2e-8fc1-39678474bb1b.png"
                    data-was-processed="true"
                  />
                  <img
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/09/29fafe3d-6095-4c2e-8fc1-39678474bb1b.png"
                  />
                </div>
                <span className="title">KontaktPlus</span>
              </a>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/xidmetler/qurasdirilma-xidmetleri/"
                      >
                        <span>Sahə xidmətləri</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/xidmetler/qurasdirilma-xidmetleri/ev-metbex-texnikasi-ucun-xidmetler/"
                      >
                        Ev və mətbəx texnikaları üçün xidmətlər
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/xidmetler/qurasdirilma-xidmetleri/kombi-xidmetleri/"
                      >
                        Kombi xidmətləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/xidmetler/qurasdirilma-xidmetleri/kondisioner-xidmetleri/"
                      >
                        Kondisioner xidmətləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/xidmetler/qurasdirilma-xidmetleri/tv-qurasdirma-demontaj-xidmetleri/"
                      >
                        Tv quraşdırma və demontaj xidmətləri
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/xidmetler/qurasdirilma-xidmetleri/kimyevi-temizleme/"
                      >
                        Kimyəvi təmizləmə
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/xidmetler/birdefe-gosterilen-xidmet/"
                      >
                        <span>Bir dəfə göstərilən xidmətlər</span>
                      </a>
                      <a
                        class="subsub_a"
                        href="https://kontakt.az/xidmetler/reqemsal-paketleri/"
                      >
                        Rəqəmsal paketlər
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/xidmetler/online-kinoteatr/"
                      >
                        <span>Online kinoteatrlar</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/xidmetler/reklam-bloklayici/"
                      >
                        <span>Reklam bloklayıcılar</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/xidmetler/proqram-teminati/"
                      >
                        <span>Proqram təminatları</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/xidmetler/antiviruslar/"
                      >
                        <span>Antiviruslar</span>
                      </a>
                    </div>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://kontakt.az/xidmetler/kripto-cuzdan/"
                      >
                        <span>Kripto cüzdanlar</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <a
                        class="menuliparent_a"
                        href="https://plus.kontakt.az/index.html"
                      >
                        <span>Elektrosamokat icarəsi</span>
                      </a>
                    </div>
                  </li>
                  <li></li>
                  <li class="datt2"></li>
                </ul>
              </div>
            </li>
          </ul>

          <div className="home-top-center">
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
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only"></span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators1"
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

            <section id="delivery">
              <div className="delivery-main">
                <div className="delivery-container">
                  <div className="delivery-info">
                    <img src="https://kontakt.az/wp-content/uploads/2021/09/1.png" />
                    <p>Qapıda rəsmiləşdirmə</p>
                    <p>Nağd, hissə-hissə və ya kartla ödəmə imkanı ilə</p>
                  </div>

                  <div className="delivery-info">
                    <img src="https://kontakt.az/wp-content/uploads/2021/09/2.png" />
                    <p>Rəsmi Zəmanət</p>
                    <p>3 ilədək rəsmi zəmanət</p>
                  </div>

                  <div className="delivery-info">
                    <img src="https://kontakt.az/wp-content/uploads/2021/09/3.png" />
                    <p> Pulsuz çatdırılma</p>
                    <p>Sürətli, təhlükəsiz və təmassız</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="home-top-bottom">
              <div className="home-top-bottom-left">
                <a>
                  <img src="https://kontakt.az/wp-content/uploads/2023/02/610x180-1-1024x303_png.webp" />
                </a>
              </div>
              <div className="home-top-bottom-right">
                <a>
                  <img src="https://kontakt.az/wp-content/uploads/2023/02/banner-az-1024x302_png.webp" />
                </a>
              </div>
            </section>
          </div>

          <div className="home-top-right">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-ride="carousel"
            >
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
                    <a>Bütün təklifləri gör</a>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
