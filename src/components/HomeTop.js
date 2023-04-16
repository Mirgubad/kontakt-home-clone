import { Link } from "react-router-dom";
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
              <Link>
                <div className="icon">
                  <img alt=""
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Telefon.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Telefon.png"
                    data-was-processed="true"
                  />
                  <img alt=""
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Telefon.png"
                  />
                </div>
                <span className="title">Smartfonlar</span>
              </Link>
              <div class="menu-open ">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/"
                      >
                        <span>Smartfonlar</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/"
                      >
                        <span>Apple</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=iPhone+14+Pro"
                      >
                        iPhone 14 Pro
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=iPhone+14+Pro+Max"
                      >
                        iPhone 14 Pro Max
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=iPhone+14+Plus"
                      >
                        iPhone 14 Plus
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=iPhone+14"
                      >
                        iPhone 14
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=iPhone+13+Pro"
                      >
                        iPhone 13 Pro
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=iPhone+11"
                      >
                        iPhone 11
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/samsung-mobil-telefonlar/"
                      >
                        <span>Samsung</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/samsung-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Samsung+Galaxy+A13"
                      >
                        Samsung Galaxy A13
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/samsung-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Samsung+Galaxy+A33"
                      >
                        Samsung Galaxy A33
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_istehsalci%5B%5D=Samsung&amp;fphone_seriya%5B%5D=Samsung+Galaxy+A53"
                      >
                        Samsung Galaxy A53
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Samsung+Galaxy+S23"
                      >
                        Samsung Galaxy S23
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Samsung+Galaxy+Z+Fold+4"
                      >
                        Samsung Galaxy Z Fold
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/xiaomi-mobil-telefonlar/"
                      >
                        <span>Xiaomi</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/xiaomi-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Xiaomi+Redmi+10A"
                      >
                        Xiaomi Redmi 10A
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/xiaomi-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Xiaomi+Redmi+10C"
                      >
                        Xiaomi Redmi 10C
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/xiaomi-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Xiaomi+Poco+M5"
                      >
                        Xiaomi Poco M5
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Xiaomi+Poco+X4+GT"
                      >
                        Xiaomi Poco X4 GT
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/xiaomi-mobil-telefonlar/?fqn=&amp;fqx=&amp;fphone_seriya%5B%5D=Xiaomi+12+Lite"
                      >
                        Xiaomi 12 Lite
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/"
                      >
                        <span>Smartfonlar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/apple-mobil-telefonlar/"
                      >
                        Apple
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/oppo/"
                      >
                        OPPO
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/samsung-mobil-telefonlar/"
                      >
                        Samsung
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/xiaomi-mobil-telefonlar/"
                      >
                        Xiaomi
                      </Link>

                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/huawei-mobil-telefonlar/"
                      >
                        Huawei
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/realme/"
                      >
                        Realme
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/oneplus-mobil-telefonlar/"
                      >
                        OnePlus
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/blackview/"
                      >
                        Blackview
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/honor-mobil-telefonlar/"
                      >
                        Honor
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/infinix/"
                      >
                        Infinix
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/nothing/"
                      >
                        Nothing
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/tcl-smartfonlar/"
                      >
                        TCL
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/asus-smartfon/"
                      >
                        Asus
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/vivo-mobil-telefonlar/"
                      >
                        Vivo
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/motorola/"
                      >
                        Motorola
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ru/telefony-i-planshety/mobilnie-smartfoni/nokia-ru/"
                      >
                        Nokia
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/google/"
                      >
                        Google
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/mobil-telefonlar/tecno/"
                      >
                        Tecno
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/qulaqliqlar-umumi/"
                      >
                        <span>Qulaqlıqlar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/qulaqliqlar/"
                      >
                        Simli
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/qulaqliqlar-bluetooth/"
                      >
                        Simsiz
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/qulaqliqlar-umumi/qulaqliqlar-bluetooth/?fqn=&amp;fqx=&amp;fqulaqliqlar_qosulma_novu%5B%5D=TWS+%28tam+simsiz%29"
                      >
                        TWS (tam simsiz)
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/"
                      >
                        <span>Aksesuarlar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/powerbank/"
                      >
                        Power Bank
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/adapterler/"
                      >
                        Adapterlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/aksesuarlar-telefonlar/simsiz-adapterler/"
                      >
                        Simsiz adapterlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/enerjitoplayicinaqiller/"
                      >
                        USB naqillər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/qoruyucuortuk/"
                      >
                        Smartfon üçün örtüklər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/qulaqliq-qablari/"
                      >
                        Qulaqlıq üçün örtüklər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/aksesuarlar-telefonlar/qoruyuccu-shushe/"
                      >
                        Qoruyucu şüşələr
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/microsdkart/"
                      >
                        Micro SD kartlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/tutacag/"
                      >
                        Telefon üçün tutacaqlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/selfie/"
                      >
                        Selfi çubuqları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/aksesuarlar-telefonlar/magsafe-aksessuarlari/"
                      >
                        MagSafe aksessuarları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/aksesuarlar-telefonlar/smartfonlar-ucun-qadcetler/"
                      >
                        Smartfonlar üçün qadjetlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/aksesuarlar-telefonlar/acarliq/"
                      >
                        Açarlıqlar
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/ev-ofis/"
                      >
                        <span>Ev və ofis telefonları</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/audio-video/portativakustika/"
                      >
                        <span>Portativ akustikalar</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/plansetler/"
                      >
                        <span>Planşetlər</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/duymeli-telefonlar/"
                      >
                        <span>Düyməli telefonlar</span>
                      </Link>
                    </div>
                  </li>
                  <li class="datt3">
                    <Link href="https://kontakt.az/telefonlar/mobil-telefonlar/oppo/">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-11@3x-1-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-11@3x-1-scaled.webp"
                        data-was-processed="true"
                      />
                    </Link>
                    <Link href="https://kontakt.az/?s=blackview+a95">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-13@3x-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-13@3x-scaled.webp"
                        data-was-processed="true"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link>
                <div className="icon">
                  <img alt=""
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Saat.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Saat.png"
                    data-was-processed="true"
                  />
                  <img alt=""
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Saat.png"
                  />
                </div>
                <span className="title">Smart qadjetlər</span>
              </Link>
              <div class="menu-open ">
                <ul>
                  <li class="">
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/smartwatch/"
                      >
                        <span>Smart saatlar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smartsaatlar/apple-smartsaatlar/"
                      >
                        Apple
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smartsaatlar/samsung-smartsaatlar/"
                      >
                        Samsung
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smartsaatlar/huawei-smartsaatlar/"
                      >
                        Huawei
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smartsaatlar/xiaomi-smartsaatlar/"
                      >
                        Xiaomi
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smartsaatlar/kieslect/"
                      >
                        Kieslect
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smartsaatlar/blackview-smartsaat/"
                      >
                        Blackview
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smartsaatlar/gelius/"
                      >
                        Gelius
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smart-qolbaglar/"
                      >
                        <span>Smart qolbaqlar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smart-qolbaglar/xiaomi-smartqolbaglar/"
                      >
                        Xiaomi
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smart-qolbaglar/huawei-smartqolbaglar/"
                      >
                        Huawei
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/smart-qolbaglar/blackview-smartqolbaq/"
                      >
                        Blackview qol
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/usaq-saatlari/"
                      >
                        <span>Uşaq smart saatları</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/usaq-saatlari/canyon-usaq-saatlari/"
                      >
                        Canyon
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/aksesuar-saatlar/"
                      >
                        <span>Smart saat üçün aksesuarlar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/aksesuar-saatlar/apple-band/"
                      >
                        Apple Band
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/qulaqliqlar-bluetooth/"
                      >
                        <span>Qulaqlıqlar (Bluetooth)</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/"
                      >
                        <span>Nəqliyyat</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/segway/"
                      >
                        Hoverboard
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/mopedler/"
                      >
                        Mopedlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/elektroskeyt/"
                      >
                        Elektroskeytlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/giroskuter/"
                      >
                        Elektrosamokatlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/elektro-rolik/"
                      >
                        Elektro roliklər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/elektromobil/"
                      >
                        Elektromobillər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/moped-ucun-aksesuarlar/"
                      >
                        Moped üçün aksesuarlar
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/"
                      >
                        <span>Ağıllı ev</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/xiaomi-mi-home/"
                      >
                        Xiaomi Mi home
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/elsmart/"
                      >
                        Elsmart
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/tv-audio-video/audio-video/smart-akustika/"
                      >
                        Smart akustika
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/domofon/"
                      >
                        Domofonlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/alternativ-enerjili-ishiqlar/"
                      >
                        Alternativ enerjili işıqları
                      </Link>
                    </div>
                  </li>
                  <li class="">
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/saatlar/"
                      >
                        <span>Qol saatları</span>
                      </Link>
                    </div>
                  </li>
                  <li class="datt3">
                    <Link href="https://kontakt.az/apple-watch-8-45-mm/">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-4@3x-6-1-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-4@3x-6-1-scaled.webp"
                        data-was-processed="true"
                      />
                    </Link>
                    <Link href="https://kontakt.az/?s=band+7+pro">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-3@3x-7-1-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-3@3x-7-1-scaled.webp"
                        data-was-processed="true"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link>
                <div className="icon">
                  <img alt=""
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Komputer.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Komputer.png"
                    data-was-processed="true"
                  />
                  <img alt=""
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Komputer.png"
                  />
                </div>
                <span className="title">Notbuklar,PK,planşetlər</span>
              </Link>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/notebook/"
                      >
                        <span>Notbuklar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_kateqoriya%5B%5D=Ev+v%C9%99+i%C5%9F"
                      >
                        Ev və iş
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_kateqoriya%5B%5D=Oyun"
                      >
                        Oyun
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_kateqoriya%5B%5D=Ultrabuk"
                      >
                        Ultrabuklar
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/notebook/"
                      >
                        <span>Notbuklar brend üzrə</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=Apple"
                      >
                        Apple
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=MSI"
                      >
                        MSI
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=HP"
                      >
                        HP
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=Acer"
                      >
                        Acer
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=HUAWEI"
                      >
                        HUAWEI
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=Lenovo"
                      >
                        Lenovo
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=Asus"
                      >
                        Asus
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/notebook/?fqn=&amp;fqx=&amp;fnotebook_producer%5B%5D=Dell"
                      >
                        Dell
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/kompyuterler/"
                      >
                        <span>Kompyuterlər</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/monobloklar/"
                      >
                        Monobloklar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/sistem-bloku/"
                      >
                        Sistem blokları
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/monitor/"
                      >
                        <span>Monitorlar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/monitorlar/?fqn=&amp;fqx=&amp;fmonitor_producer%5B%5D=Apple"
                      >
                        Apple
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/monitorlar/?fqn=&amp;fqx=&amp;fmonitor_producer%5B%5D=HP"
                      >
                        HP
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/monitorlar/?fqn=&amp;fqx=&amp;fmonitor_producer%5B%5D=Asus"
                      >
                        Asus
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/monitorlar/?fqn=&amp;fqx=&amp;fmonitor_producer%5B%5D=Dell"
                      >
                        Dell
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/komputer-printer-aksesuarlari/"
                      >
                        <span>Kompüter hissələri</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputeraksesuarlari/soyutmasistemi/"
                      >
                        Soyutma sistemləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/komputer-printer-aksesuarlari/videokartlar/"
                      >
                        Videokartlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/komputer-printer-aksesuarlari/ana-plata/"
                      >
                        Ana platalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/komputer-printer-aksesuarlari/prosessor/"
                      >
                        Prosessorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/komputer-printer-aksesuarlari/sistem-bloklari-ucun-keysles/"
                      >
                        Sistem bloku üçün keyslər
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/plansetler/"
                      >
                        <span>Planşetlər</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/plansetler/?fqn=&amp;fqx=&amp;fphone_istehsalci%5B%5D=Apple"
                      >
                        Apple
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/plansetler/?fqn=&amp;fqx=&amp;fphone_istehsalci%5B%5D=Samsung"
                      >
                        Samsung
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/plansetler/?fqn=&amp;fqx=&amp;fphone_istehsalci%5B%5D=HUAWEI"
                      >
                        HUAWEI
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/plansetler/?fqn=&amp;fqx=&amp;fphone_istehsalci%5B%5D=Xiaomi"
                      >
                        Xiaomi
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/plansetler/?fqn=&amp;fqx=&amp;fphone_istehsalci%5B%5D=Blackview"
                      >
                        Blackview
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/telefonlar/plansetler/?fqn=&amp;fqx=&amp;fphone_istehsalci%5B%5D=TCL"
                      >
                        TCL
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/yaddash/"
                      >
                        <span>Yaddaş</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/yaddash/xaricitoplayicilar/"
                      >
                        Xarici və daxili toplayıcılar (HDD/SSD)
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputeraksesuarlari/usbtoplayici/"
                      >
                        USB toplayıcılar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputeraksesuarlari/sdkart/"
                      >
                        SD kartlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/microsdkart/"
                      >
                        Micro SD kartlar
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/"
                      >
                        <span>Oyun aksesuarları</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-klaviaturalari/"
                      >
                        Klaviaturalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-mouslari/"
                      >
                        Mouse
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-joystikleri/"
                      >
                        Joystiklər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-qulaqliqlari/"
                      >
                        Qulaqlıqlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-mikrofonlari/"
                      >
                        Mikrofonlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-eynekleri/"
                      >
                        Eynəklər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-mousepadlari/"
                      >
                        Mousepad
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-kreslolari/"
                      >
                        Kreslolar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-cantalari/"
                      >
                        Çantalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/oyun-masasi-az/"
                      >
                        Oyun masası
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/gamepad-tutacagi-az/"
                      >
                        Gamepad tutacağı
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/wifi-ve-shebeke-avadanliqlari/"
                      >
                        <span>Wifi və şəbəkə avadanlıqları</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/wifi-ve-shebeke-avadanliqlari/modem/"
                      >
                        Modemlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/wifi-ve-shebeke-avadanliqlari/ruter/"
                      >
                        Routerlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/wifi-ve-shebeke-avadanliqlari/guclendirici/"
                      >
                        Wi-Fi gücləndiriciləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/komputerler/wifi-ve-shebeke-avadanliqlari/usb-wifi/"
                      >
                        Wi-Fi adapterlər
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/elektron-kitab/"
                      >
                        <span>Elektron kitablar</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/resm-plansheti/"
                      >
                        <span>Rəsm üçün planşetlər</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/printer/"
                      >
                        <span>Printerlər</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/komputeraksesuarlari/"
                      >
                        <span>Kompüter aksessuarları</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/planshet-ucun-aksesuarlar/"
                      >
                        <span>Planşet üçün aksesuarlar</span>
                      </Link>
                    </div>
                  </li>
                  <li class="datt3">
                    <Link href="https://kontakt.az/lenovo-idepad-1-14-81vu00d6us/">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-17@3x-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-17@3x-scaled.webp"
                        data-was-processed="true"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link>
                <div className="icon">
                  <img alt=""
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/soyuducu.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/soyuducu.png"
                    data-was-processed="true"
                  />
                  <img alt=""
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/soyuducu.png"
                  />
                </div>
                <span className="title">Mətbəx üçün məişət texnikası</span>
              </Link>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/"
                      >
                        <span>Böyük məişət texnikası</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/soyuducu/"
                      >
                        Soyuducular
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/paltaryuyan/"
                      >
                        Paltaryuyanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/solo-soba/"
                      >
                        Solo sobalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qabyuyan/"
                      >
                        Qabyuyanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/aspirator/"
                      >
                        Aspiratorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/dondurucu/"
                      >
                        Dondurucular
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/dispenser/"
                      >
                        Dispenserlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/sherab-soyuduculari/"
                      >
                        Şərab soyuducuları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/icki-soyuduculari/"
                      >
                        İçki soyuducuları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/siqar-ucun-dolablar/"
                      >
                        Siqar üçün dolablar
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/ickilerin-hazirlanmasi/"
                      >
                        <span>İçkilərin hazırlanması</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/caydan/"
                      >
                        Çaydanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/induksion-caydan/"
                      >
                        İnduksion çaydanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/termopot/"
                      >
                        Termopotlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/qehvebisiren/"
                      >
                        Qəhvəbişirənlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/qehveuyuden/"
                      >
                        Qəhvəüyüdənlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/sireceken/"
                      >
                        Şirəçəkənlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/metbexucun-kicik-meiset-texnikasi/sud-kopuklendirici/"
                      >
                        Süd köpükləndiricilər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/buz/"
                      >
                        Buz hazırlayanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ickilerin-hazirlanmasi/su-filtri/"
                      >
                        Su filtrləri
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/qurashdirilmish-texnika/"
                      >
                        <span>Quraşdırılan texnika</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/soba/"
                      >
                        Sobalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/plite/"
                      >
                        Plitələr
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/aspirator/"
                      >
                        Aspiratorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qurashdirilmish-texnika/qurashdirilan-soyuducular/"
                      >
                        Quraşdırılan soyuducular
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qurashdirilmish-texnika/qurashdirilan-qabyuyan-mashinlar/"
                      >
                        Quraşdırılan qabyuyan maşınlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qurashdirilmish-texnika/qurashdirilan-paltaryuyan-mashinlar/"
                      >
                        Quraşdırılan paltaryuyan maşınlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qurashdirilmish-texnika/qurashdirilmish-mikrosoba/"
                      >
                        Quraşdırılmış mikrodalğalı sobalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qurashdirilmish-texnika/qurashdirilan-dondurucular/"
                      >
                        Quraşdırılan dondurucular
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qurashdirilmish-texnika/isitm%c9%99-siyirtm%c9%99si/"
                      >
                        İsitmə siyirtmələri
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/ickiler/"
                      >
                        <span>İçkilər</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/qehve/"
                      >
                        Qəhvələr
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/qehvebisiren-ucun-kapsul/"
                      >
                        Qəhvəbişirən üçün kapsullar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/metbexucun-kicik-meiset-texnikasi/siroplar/"
                      >
                        Siroplar
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/kicik-meiset-texnikas/"
                      >
                        <span>Yemək hazırlanması</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/etceken/"
                      >
                        Ətçəkənlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/blender/"
                      >
                        Blenderlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/mikrodalgali-soba/"
                      >
                        Mikrodalğalı sobalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/multibisirici/"
                      >
                        Multibişiricilər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/mikser/"
                      >
                        Mikserlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/corek-bisiren/"
                      >
                        Çörək bişirənlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/kombayn/"
                      >
                        Kombaynlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/mini-soba/"
                      >
                        Mini sobalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/toster/"
                      >
                        Tosterlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/izqara/"
                      >
                        İzqaralar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/fritoz/"
                      >
                        Fritozlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/buxarli-bisirici/"
                      >
                        Buxarlı bişiricilər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/meyve_qurudan/"
                      >
                        Meyvə qurudanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/dograyici/"
                      >
                        Doğrayıcılar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/dilimleyici/"
                      >
                        Dilimləyicilər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/dondurmaduzelden/"
                      >
                        Dondurma düzəldənlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/metbexucun-kicik-meiset-texnikasi/metbex_terezisi/"
                      >
                        Mətbəx tərəziləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/induksiyaliplite/"
                      >
                        İnduksiyalı plitələr
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/"
                      >
                        <span>Qab-qacaqlar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/qazan-ve-tava-desti/"
                      >
                        Qazan və tava dəsti
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/qazanlar/"
                      >
                        Qazanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/tavalar/"
                      >
                        Tavalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/qapaqlar/"
                      >
                        Qapaqlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/serviz/"
                      >
                        Yemək və çay dəstləri (Servizlər)
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/induksion-caydan/"
                      >
                        İnduksion çaydanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/metbex-desti/"
                      >
                        Mətbəx aksesuarları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/bicaq-bicaq-itileyen/"
                      >
                        Bıçaq və bıçaq itiləyənlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/termos/"
                      >
                        Termoslar
                      </Link>
                    </div>
                  </li>
                  <li class="datt3">
                    <Link href="https://kontakt.az/mikrodalgali-soba-hoffmann-g2390s/">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-8@3x-1-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-8@3x-1-scaled.webp"
                        data-was-processed="true"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link>
                <div className="icon">
                  <img alt=""
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Paltaryuyan-1.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Paltaryuyan-1.png"
                    data-was-processed="true"
                  />
                  <img alt=""
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Paltaryuyan-1.png"
                  />
                </div>
                <span className="title">Ev üçün məişət texnikaları</span>
              </Link>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-ucun-meiset-texnikasi/temizlik-ve-camashir/"
                      >
                        <span>Təmizlik və çamaşırlar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/boyukmeishettexnikasi/paltaryuyan/"
                      >
                        Paltaryuyanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/quruducu_mashin/"
                      >
                        Quruducu maşınlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/tozsoran/"
                      >
                        Tozsoranlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/robot-tozsoran/"
                      >
                        Robot tozsoranlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/akkumulyator-tozsoran/"
                      >
                        Akkumulyatorlu tozsoranlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/yuyucu-tozsoran/"
                      >
                        Yuyucu tozsoranlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/utu/"
                      >
                        Ütülər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/buxarligenerator/"
                      >
                        Buxarlı generatorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/buxarliutu/"
                      >
                        Buxarlandırıcılar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/buxarlitemizleyici/"
                      >
                        Buxarlı təmizləyicilər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/tikis-masinlari/"
                      >
                        Tikiş maşınları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/utumasasi/"
                      >
                        Ütü masaları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ev-ucun-kicik-meishet/paltarqurudan/"
                      >
                        Paltarqurudanlar
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-ucun-meiset-texnikasi/saglamliq/"
                      >
                        <span>Sağlamlıq</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/disfirca/"
                      >
                        Elektrik diş fırçaları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/irriqatorlar/"
                      >
                        İrriqatorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/tonometr/"
                      >
                        Tonometrlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/termometr/"
                      >
                        Termometrlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/elektrik-yorgan/"
                      >
                        Elektrik yorğanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/elektrikli-isidici/"
                      >
                        Elektrikli isidicilər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/inqalyatorlar/"
                      >
                        İnqalyatorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/masajor/"
                      >
                        Masajorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/masajor-ayaq-ucun/"
                      >
                        Masajorlar ayaq üçün
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/kombi/"
                      >
                        <span>Kombi sistemləri</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimkompleksi/"
                      >
                        <span>İqlim texnikası</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/kombi/"
                      >
                        Kombi sistemləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/kondisioner/"
                      >
                        Kondisionerlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/isti-dosheme/"
                      >
                        İsti döşəmələr
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/kombi-aksesuar/"
                      >
                        Kombi üçün seksiyalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/yagradiatorlari/"
                      >
                        Yağ radiatorları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/su-qizdirici-kalonka/"
                      >
                        Su qızdırıcı kalonkalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/qaz-kalonkasi/"
                      >
                        Qaz kalonkaları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/konvektor/"
                      >
                        Konvektorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/spiralli-pec/"
                      >
                        Spirallı peçlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/ventilyator/"
                      >
                        Ventilyatorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/hava-temizleyici/"
                      >
                        Hava təmizləyiciləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/havanemlendiricisi/"
                      >
                        Hava nəmləndiricilər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/hava-teravetlendirici/"
                      >
                        Hava təravətləndiricilər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/iqlimkompleksi/"
                      >
                        İqlim kompleksləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/teravetlendirici-yag/"
                      >
                        Təravətləndirici yağlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/termoqiqrometr/"
                      >
                        Termoqiqrometrlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/iqlimtexnikasi/iqlim-texnikasi-ucun-aksesuarlar/"
                      >
                        İqlim texnikası üçün aksesuarlar
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-ucun-meiset-texnikasi/gozellik-ve-saglamliq/"
                      >
                        <span>Gözəllik və baxım</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/fenhava/"
                      >
                        Fenlər (Hava)
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/fenmasha/"
                      >
                        Fenlər (Maşa)
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/fenutu/"
                      >
                        Fenlər (Ütü)
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/fendaraq/"
                      >
                        Fenlər (Daraq)
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/multistayler/"
                      >
                        Multistaylerlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/epilyator/"
                      >
                        Epilyatorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/uzqirxan/"
                      >
                        Üzqırxanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/sacqirxan/"
                      >
                        Saçqırxanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/trimmer/"
                      >
                        Trimmerlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/terezi/"
                      >
                        Tərəzilər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/shexsi-qulluq/"
                      >
                        Şəxsi qulluq
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/masajor/"
                      >
                        Masajorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/masajor-ayaq-ucun/"
                      >
                        Masajorlar ayaq üçün
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/manikur-desti/"
                      >
                        Manikür və pedikür dəstləri
                      </Link>
                    </div>
                  </li>
                  <li class="datt3"></li>
                </ul>
              </div>
            </li>

            <li>
              <Link>
                <div className="icon">
                  <img alt=""
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Fotoaparat.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Fotoaparat.png"
                    data-was-processed="true"
                  />
                  <img alt=""
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Fotoaparat.png"
                  />
                </div>
                <span className="title">Foto texnika</span>
              </Link>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/foto-texnika/peshakar-fotoaparatlar/"
                      >
                        <span>Güzgülü və güzgüsüz fotoaparatlar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/foto-ve-video/peshakar-fotoaparatlar/canon-fotoaparat/"
                      >
                        Canon
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/foto-ve-video/peshakar-fotoaparatlar/nikon-fotoaparat/"
                      >
                        Nikon
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/foto-ve-video/peshakar-fotoaparatlar/leica-fotoaparat/"
                      >
                        Leica
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/foto-ve-video/peshakar-fotoaparatlar/sony-fotoaparat/"
                      >
                        Sony
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/foto-ve-video/peshakar-fotoaparatlar/action-kamera/"
                      >
                        Action kameralar
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/fotoaksesuar/"
                      >
                        <span>Foto aksesuarlar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/fotoaksesuar/linzalar/"
                      >
                        Obyektivlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/fotoaksesuar/foto-canta/"
                      >
                        Foto çantalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/foto-ve-video/fotoaksesuar/foto-stabilizatorlar/"
                      >
                        Foto stabilizatorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/fotoaksesuar/shtativler/"
                      >
                        Ştativlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/foto-ve-video/fotoaksesuar/fotokagiz/"
                      >
                        Fotokağızlar
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/foto-ve-video/blogger-mikrafonu/"
                      >
                        <span>Blogger mikrofonları</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/foto-ve-video/diktofonlar-az/"
                      >
                        <span>Diktofonlar</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/foto-ve-video/tehluke-kamera/"
                      >
                        <span>Təhlükəsizlik kameraları</span>
                      </Link>
                    </div>
                  </li>
                  <li class="datt3">
                    <Link href="https://kontakt.az/foto-ve-video/peshakar-fotoaparatlar/leica-fotoaparat/">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-21@3x_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-21@3x_png.webp"
                        data-was-processed="true"
                      />
                    </Link>
                    <Link href="https://kontakt.az/insta360-one-x2-and-matterport-tripod/">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-17@3x_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-17@3x_png.webp"
                        data-was-processed="true"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link>
                <div className="icon">
                  <img alt=""
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Oyun.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Oyun.png"
                    data-was-processed="true"
                  />
                  <img alt=""
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Oyun.png"
                  />
                </div>
                <span className="title">Hobbi və əyləncə</span>
              </Link>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/oyun-ve-eylence/playstation-store/"
                      >
                        <span>PlayStation</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/playstation/"
                      >
                        PlayStation konsolları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/playstation-store/jostick/"
                      >
                        Playstation joystick və aksesuarlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/qadcetleraksesuarlar/eynek/"
                      >
                        PlayStation virtual eynəklər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aksesuarlar-oyun-ve-eylence/oyunlar/"
                      >
                        Playstation oyun diskləri
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/hobbi-ve-eylence/xbox-az/"
                      >
                        <span>Xbox</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/oyun-ve-eylence/oyun-konsolu/nintendo/"
                      >
                        <span>Nintendo</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/"
                      >
                        <span>İdman</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/futbol/"
                      >
                        Futbol
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/fitnes/"
                      >
                        Fitnes
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/boks/"
                      >
                        Boks
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/qantel/"
                      >
                        Qantellər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/velotrenajorlar/"
                      >
                        Velotrenajorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/qacish-trenajorlari/"
                      >
                        Qaçış trenajorları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/univarsal-trenajorlar/"
                      >
                        Universal trenajorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/eliptik-trenajorlar/"
                      >
                        Eliptik trenajorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/jim-ucun-oturacaqlar/"
                      >
                        Jim üçün oturacaqlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/elave-qidalar/"
                      >
                        Əlavə qidalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/roller-dayaqlar/"
                      >
                        Rollerlər/dayaqlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/idman-oyunlari/"
                      >
                        İdman oyunları
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/"
                      >
                        <span>Nəqliyyat</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/velosiped/"
                      >
                        Velosipedlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/segway/"
                      >
                        Hoverboardlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/samokat/"
                      >
                        Samokatlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/giroskuter/"
                      >
                        Elektrosamokatlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/elektroskeyt/"
                      >
                        Elektroskeytlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/elektro-rolik/"
                      >
                        Elektro roliklər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/elektromobil/"
                      >
                        Elektromobillər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/mopedler/"
                      >
                        Mopedlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/velo-aksesuarlar/"
                      >
                        Velosiped üçün aksesuarlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/oyun-ve-eylence/neqliyyat/moped-ucun-aksesuarlar/"
                      >
                        Moped üçün aksesuarlar
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/"
                      >
                        <span>Oyunlar və əyləncə</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/oyuncaq-silahlar-ve-techizatlari/"
                      >
                        Oyuncaq silahlar və təchizatları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/macera-oyun-destleri/"
                      >
                        Süjetli-rollu oyunlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/yumshaq-oyuncaqlar/"
                      >
                        Yumşaq oyuncaqlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/stolustu-oyunlar/"
                      >
                        Stolüstü oyunlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/inkishaf-etdirici-oyunlar/"
                      >
                        İnkişaf etdirici oyunlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/oyuncaq-mashinlar/"
                      >
                        Oyuncaq maşınlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/pazllar/"
                      >
                        Pazllar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/hobbi-ve-eylence/idman-aletleri/idman-oyunlari/"
                      >
                        İdman oyunları
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/hobbi-ve-eylence/musiqi-aletleri-ve-avadanliqlari/"
                      >
                        <span>Musiqi alətləri və avadanlıqları</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/komputerler/oyun-aksesuarlari/"
                      >
                        <span>Oyun aksesuarları</span>
                      </Link>
                    </div>
                  </li>
                  <li class="datt3">
                    <Link href="https://kontakt.az/playstation-vr2/">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/04/VR-1x1-sayt-banner-aze_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/04/VR-1x1-sayt-banner-aze_png.webp"
                        data-was-processed="true"
                      />
                    </Link>
                    <Link href="https://kontakt.az/hoverboard-zigzag-k8-graffiti/">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-5@3x-4-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-5@3x-4-scaled.webp"
                        data-was-processed="true"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link>
                <div className="icon">
                  <img alt=""
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Alətlər.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Alətlər.png"
                    data-was-processed="true"
                  />
                  <img alt=""
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Alətlər.png"
                  />
                </div>
                <span className="title">Alətlər</span>
              </Link>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/"
                      >
                        <span>Elektrik alətlər</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/drel/"
                      >
                        Drellər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/perforator/"
                      >
                        Perforatorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/laqonda/"
                      >
                        Laqondalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/frezer/"
                      >
                        Frezerlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/qaynaq-aparati/"
                      >
                        Qaynaq aparatları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/qaykabaglayan/"
                      >
                        Qayka bağlayanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/shurupbaglayan/"
                      >
                        Şurup bağlayanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/mishar/"
                      >
                        Mişarlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/divar-teqibcileri-az/"
                      >
                        Divar təqibçiləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/rende/"
                      >
                        Rəndələr
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/fen-aletler/"
                      >
                        Texniki fenlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/texniki-mikser/"
                      >
                        Texniki mikserlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/mesafe/"
                      >
                        Məsafə ölçənlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/nivelir/"
                      >
                        Lazer nivelirlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/coxfunksiyali-el-aletleri/"
                      >
                        Çoxfunksiyalı əl alətləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/doyec/"
                      >
                        Döyəclər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/enerji-desti/"
                      >
                        Enerji dəstləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/birleshdirici-utu/"
                      >
                        Birləşdirici ütülər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/dairevi-misar-sirkulyar-misar/"
                      >
                        Dairəvi mişarlar (Sirkulyar mişarlar)
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/detektorlar/"
                      >
                        Detektorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/kley-tapanca/"
                      >
                        Kley tapançaları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/dezgahlar/"
                      >
                        Dəzgahlar
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/"
                      >
                        <span>Əl alətləri</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/alet-destleri/"
                      >
                        Alət dəstləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/acharlar/"
                      >
                        Açarlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/vintburan/"
                      >
                        Mərgüllər (Vintburanlar)
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/kelbetinler/"
                      >
                        Kəlbətinlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/olchen-ruletka/"
                      >
                        Ölçənlər (Ruletkalar)
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/chekicler/"
                      >
                        Çəkiclər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/mismarcixaran/"
                      >
                        Mismarçıxaranlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/domkrat/"
                      >
                        Domkratlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/shtanger/"
                      >
                        Ştangerlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/seviyye-olcen/"
                      >
                        Səviyyə ölçənlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/boya-ceken-roller/"
                      >
                        Boya çəkən rollerlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/boya-fircalari/"
                      >
                        Boya fırçaları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/shpateller/"
                      >
                        Şpatellər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/baltalar/"
                      >
                        Baltalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/kabel-kesen-qaycilar/"
                      >
                        Kabel kəsən qayçılar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/metal-kesen/"
                      >
                        Dəmir kəsən qayçılar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/silikon-vuran-tapanca/"
                      >
                        Silikon vuran tapançalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/malakes/"
                      >
                        Malakeşlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/boya-cileleyicisi/"
                      >
                        Boya çiləyicilər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/%c9%99l-mishari/"
                      >
                        Əl mişarları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/cilalayici/"
                      >
                        Cilalayıcılar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/qisqac/"
                      >
                        Qısqaçlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/mismar-vuran/"
                      >
                        Mismar vuranlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/delgec-aletler/"
                      >
                        Dəlgəclər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/isg%c9%99n%c9%99/"
                      >
                        İsgənələr
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler-aksesuarlari/"
                      >
                        <span>Elektrik alətləri üçün aksesuarlar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler-aksesuarlari/drel-aksesuar/"
                      >
                        Drel üçün aksesuarlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler-aksesuarlari/mishar-aksesuar/"
                      >
                        Mişar üçün aksesuarlar
                      </Link>

                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler-aksesuarlari/laqonda-aksesuar/"
                      >
                        Laqonda üçün aksesuarlar
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/inshaat-geyimleri/"
                      >
                        <span>İnşaat geyimləri</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/generatorlar/"
                      >
                        <span>Generatorlar</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/kompressor/"
                      >
                        <span>Kompressorlar</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/kicik-meiset-texnikasi/avtoyuyucu/"
                      >
                        <span>Yüksək təzyiqli yuyucular</span>
                      </Link>
                    </div>
                  </li>
                  <li class="datt3">
                    <Link href="https://kontakt.az/qaynaq-aparati-powerfull-mma-300-a/">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/02/bosch-banner2_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/02/bosch-banner2_png.webp"
                        data-was-processed="true"
                      />
                    </Link>
                    <Link href="https://kontakt.az/ru/uglovaya-shlifmashina-bosch-gws-7-125/?_sgm_campaign=product&amp;_sgm_source=TM-MT-TTM-1198-TS-0010&amp;_sgm_action=search&amp;_sgm_term=gws+7-125">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/02/bosch-banner1_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/02/bosch-banner1_png.webp"
                        data-was-processed="true"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link>
                <div className="icon">
                  <img alt=""
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Avtomobil-2.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Avtomobil-2.png"
                    data-was-processed="true"
                  />
                  <img alt=""
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Avtomobil-2.png"
                  />
                </div>
                <span className="title">Avtomobil məhsulları</span>
              </Link>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/abtomobil-mehsullari/tekerler-ve-diskler/"
                      >
                        <span>Təkərlər və disklər</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/tekerler/"
                      >
                        Avtomobil təkərləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/avtomobil-diskleri/"
                      >
                        Avtomobil diskləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/motosiklet-tekeri/"
                      >
                        Motosiklet təkərləri
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/abtomobil-mehsullari/motor-yaglari-mayeler/"
                      >
                        <span>Motor yağları və mayelər</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/motor-yaglari/"
                      >
                        Mühərrik yağları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/hidravlik-yaglar/"
                      >
                        Hidravlik yağlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/suret-qutusu-yaglari/"
                      >
                        Sürət qutusu yağları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/antifrizler/"
                      >
                        Antifrizlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/qatqilar/"
                      >
                        Qatqılar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/eylec-mayeleri/"
                      >
                        Əyləc mayeləri
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/abtomobil-mehsullari/avtomobil-uchun-elektronika/"
                      >
                        <span>Avtomobil üçün elektronika</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/foto-texnika/videoqeydiyyatci/"
                      >
                        Videoqeydiyyatçılar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/avtomobil-maqnitofonu/"
                      >
                        Avtomobil üçün maqnitofonlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/avtomobil-ucun-monitorlar/"
                      >
                        Avtomobil üçün monitorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/avtomobil-tutacaqlari/"
                      >
                        Avtomobil üçün tutacaqlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/avtomobil-adapter/"
                      >
                        Avtomobil üçün adapterlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/avtomobil-ucun-akustik-sistem/"
                      >
                        Avtomobil üçün akustik sistemlər
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/abtomobil-mehsullari/ehtiyyat-hisseleri/"
                      >
                        <span>Ehtiyat hissələri</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/akkumulyatorlar/"
                      >
                        Akkumulyatorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/cereyan-oturucu/"
                      >
                        Cərəyan ötürücüləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/texniki-levazimatlar/"
                      >
                        Texniki ləvazimatlar
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/abtomobil-mehsullari/avtomobil-ucun-aksesuarlar/"
                      >
                        <span>Avtomobil üçün aksesuarlar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/oturacaq-ortuyu/"
                      >
                        Oturacaq örtükləri
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/abtomobil-mehsullari/avtomobile-qulluq/"
                      >
                        <span>Avtomobilə qulluq</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/abtomobil-mehsullari/avtomobile-qulluq/mini-avtoyuyucu/"
                      >
                        Mini avtoyuyucu
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/abtomobil-mehsullari/avtomobil-ucun-tozsoranlar/"
                      >
                        Avtomobil üçün tozsoranlar
                      </Link>
                    </div>
                  </li>
                  <li class="datt3">
                    <Link href="https://kontakt.az/aletler-ve-avto-mehsul/abtomobil-mehsullari/tekerler/">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-13@3x_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-13@3x_png.webp"
                        data-was-processed="true"
                      />
                    </Link>
                    <Link href="https://kontakt.az/abtomobil-mehsullari/ehtiyyat-hisseleri/avtomobil-ucun-akustik-sistem/">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-11@3x_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2022/12/Artboard-11@3x_png.webp"
                        data-was-processed="true"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link>
                <div className="icon">
                  <img alt=""
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Divan.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Divan.png"
                    data-was-processed="true"
                  />
                  <img alt=""
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Divan.png"
                  />
                </div>
                <span className="title">Mebel və ev tekstili</span>
              </Link>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/mebel/"
                      >
                        <span>Ev mebeli</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/yataq-mebeli/"
                      >
                        Yataq mebeli
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/qonaq-mebeli/"
                      >
                        Qonaq mebeli
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/usaq-mebeli/"
                      >
                        Uşaq mebeli
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/yumsaq-mebeller/"
                      >
                        Yumşaq mebeli
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/puflar/"
                      >
                        Puflar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/tv-stendler/"
                      >
                        TV stendlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/jurnal-masalar/"
                      >
                        Jurnal masaları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/dehliz-dolablari/"
                      >
                        Dəhliz dolabları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/oturacaqlar/"
                      >
                        Qonaq stulları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/calishma-masalari/"
                      >
                        Çalışma masaları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/metbexmasa/"
                      >
                        Mətbəx masaları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/metbexstul/"
                      >
                        Mətbəx stulları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/carpayilar/"
                      >
                        Çarpayılar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/dolablar/"
                      >
                        Dolablar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/trumolar/"
                      >
                        Trümolar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/tumbalar/"
                      >
                        Tumbalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/kamodlar/"
                      >
                        Kamodlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/masalar/"
                      >
                        Masalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/mebel/vitrinler/"
                      >
                        Vitrinlər
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/tekstil/"
                      >
                        <span>Ev tekstili</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/masaortutu/"
                      >
                        Masa örtükləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/yorganlar/"
                      >
                        Yorğanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/yataqdesti/"
                      >
                        Yataq dəstləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/pike/"
                      >
                        Pikə dəstləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/pikeli-yataq-desti/"
                      >
                        Pikəli yataq dəstləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/edyallar/"
                      >
                        Ədyallar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/desmallar/"
                      >
                        Dəsmallar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/yataqortuyuyataqdesti/"
                      >
                        Yataq örtükləri / yataq dəstləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/yataq-ortuyu/"
                      >
                        Yataq örtükləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/dosek/"
                      >
                        Döşəklər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/yastiglar/"
                      >
                        Yastıqlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/hamamxalati/"
                      >
                        Hamam xalatları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/mebeller/tekstil/hamamdesti/"
                      >
                        Hamam dəstləri
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/madame-coco/"
                      >
                        <span>Madame Coco</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/abad/"
                      >
                        <span>ABAD</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/bahar/"
                      >
                        <span>Ev dekorları</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/metbexmebeli/"
                      >
                        <span>Mətbəx mebelləri</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/matraslar/"
                      >
                        <span>Matraslar</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/divar-kaghizlari/"
                      >
                        <span>Divar kağızları</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/bag-mebeli/"
                      >
                        <span>Bağ mebeli və aksesuarları</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/boy-aynalari/"
                      >
                        <span>Boy aynaları</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/xalcalar/"
                      >
                        <span>Xalçalar</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/perde/"
                      >
                        <span>Pərdələr</span>
                      </Link>
                    </div>
                  </li>
                  <li class="datt3">
                    <Link href="https://kontakt.az/battaniye-tekstil-sv-roslin-battaniye-tkyasil/">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-2@3x-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-2@3x-scaled.webp"
                        data-was-processed="true"
                      />
                    </Link>
                    <Link href="https://kontakt.az/imfa-mobilya-imfa-marsel-yataq-desti/">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/a0ccc8f1-b33e-4cf6-98f8-6887e43fb891_png.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/a0ccc8f1-b33e-4cf6-98f8-6887e43fb891_png.webp"
                        data-was-processed="true"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link>
                <div className="icon">
                  <img alt=""
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Dipcək.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Dipcək.png"
                    data-was-processed="true"
                  />
                  <img alt=""
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Dipcək.png"
                  />
                </div>
                <span className="title">Ev və bağ</span>
              </Link>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/"
                      >
                        <span>Ağıllı ev</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/yandex/"
                      >
                        Yandex
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/xiaomi-mi-home/"
                      >
                        Xiaomi Mi Home
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/elsmart/"
                      >
                        Elsmart
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/domofon/"
                      >
                        Domofonlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/aghilli-ev/alternativ-enerjili-ishiqlar/"
                      >
                        Alternativ enerjili işıqları
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/"
                      >
                        <span>Təmir və santexnika</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/dush-sistemleri/"
                      >
                        Duş sistemləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/metbex-kranlari/"
                      >
                        Mətbəx kranları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/hovze-kranlari/"
                      >
                        Hövzə kranları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/dush-destleri/"
                      >
                        Duş dəstləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/yerustu-dushlar/"
                      >
                        Yerüstü duşlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/el-dushlari/"
                      >
                        Əl duşları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/temir-ve-santexnika/dush-ucun-aksesuarlar/"
                      >
                        Duş üçün aksessuarlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/nerdivan/"
                      >
                        Nərdivanlar
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/"
                      >
                        <span>Qab-qacaqlar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/qazan-ve-tava-desti/"
                      >
                        Qazan və tava dəsti
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/induksion-caydan/"
                      >
                        İnduksion çaydanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/qazanlar/"
                      >
                        Qazanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/tavalar/"
                      >
                        Tavalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/qapaqlar/"
                      >
                        Qapaqlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/metbex-desti/"
                      >
                        Mətbəx aksesuarları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/serviz/"
                      >
                        Yemək və çay dəstiləri (Servizlər)
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/bicaq-bicaq-itileyen/"
                      >
                        Bıçaq və bıçaq itiləyənlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/qab-qacaq/termos/"
                      >
                        Termoslar
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/"
                      >
                        <span>Təmir</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/"
                      >
                        Elektrik alətlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/el-aletleri/"
                      >
                        Əl alətləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler-aksesuarlari/"
                      >
                        Elektrik alətləri üçün aksesuarlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/inshaat-geyimleri/"
                      >
                        İnşaat geyimləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/generatorlar/"
                      >
                        Generatorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/aletler-ve-avto-mehsul/elektrik-aletler/frezer/"
                      >
                        Frezerlər
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/hovuz-ve-aksesuarlar/"
                      >
                        <span>Hovuz və aksesuarlar</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/hovuz-ve-aksesuarlar/hovuzlar/"
                      >
                        Hovuzlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/hovuz-ve-aksesuarlar/hovuz-ucun-avadanliq/"
                      >
                        Hovuz üçün avadanlıq
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ev-bag/hovuz-ve-aksesuarlar/hovuz-ucun-aksesuarlar/"
                      >
                        Hovuz üçün aksesuarlar
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/bag-mebeli/"
                      >
                        <span>Bağ mebeli və aksesuarları</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/bag-texnikasi/"
                      >
                        <span>Bağ texnikası</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/meiset-texnikasi/peshekar-avadanlig/"
                      >
                        <span>Peşəkar təmizlik avadanlıqları</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/mebeller/divar-kaghizlari/"
                      >
                        <span>Divar kağızları</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/lampalar/"
                      >
                        <span>Lampalar</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/fener/"
                      >
                        <span>Fənərlər</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/fotoaksesuar/batareyalar/"
                      >
                        <span>Batareyalar</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/eko-cantalar/"
                      >
                        <span>Eko çantalar</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/cetirler/"
                      >
                        <span>Çətirlər</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ev-bag/camadanlar/"
                      >
                        <span>Çamadanlar</span>
                      </Link>
                    </div>
                  </li>
                  <li class="datt3"></li>
                </ul>
              </div>
            </li>

            <li>
              <Link>
                <div className="icon">
                  <img alt=""
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Canta-1.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Canta-1.png"
                    data-was-processed="true"
                  />
                  <img alt=""
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Canta-1.png"
                  />
                </div>
                <span className="title">Dəftərxana ləvazimatları</span>
              </Link>

              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/"
                      >
                        <span>Məktəb ləvazimatları</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/mektebcanta/"
                      >
                        Məktəb çantaları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/defterler/"
                      >
                        Dəftərlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/qelem/"
                      >
                        Qələmlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/karandas/"
                      >
                        Karandaşlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/qelemcanta/"
                      >
                        Qələm çantaları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/yonanlar/"
                      >
                        Qələm yonanlar
                      </Link>

                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/sirkul/"
                      >
                        Pərgarlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/pozan/"
                      >
                        Pozanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/boya/"
                      >
                        Boyalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/delgecler/"
                      >
                        Dəlgeclər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/qaycilar/"
                      >
                        Qayçılar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/yapishdirici/"
                      >
                        Yapışqanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/xetkeshler/"
                      >
                        Xətkeşlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/flomasterler/"
                      >
                        Flomasterlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/resm-ucun-fircalari/"
                      >
                        Rəsm üçün fırçalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/resm-defteri/"
                      >
                        Rəsm dəftərləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/plastilin/"
                      >
                        Plastilin
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/tebashir/"
                      >
                        Təbaşir
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/markerler/"
                      >
                        Markerlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/rengleme/"
                      >
                        Rəngləmələr
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/bloknotlar/"
                      >
                        Bloknotlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/lovhe/"
                      >
                        Lövhələr
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteb-aksesuarlari/"
                      >
                        <span>Məktəb aksessuarları</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/yemek-qablari/"
                      >
                        Yemək qabları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/su-qabi/"
                      >
                        Su qabları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/termoslar/"
                      >
                        Termoslar
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/"
                      >
                        <span>Ofis ləvazimatları</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/metaldolab/"
                      >
                        Dəmir dolablar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/seyf/"
                      >
                        Seyflər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/shreder/"
                      >
                        Şrederlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/hesablayici-mashin/"
                      >
                        Hesablayıcı cihazlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/qovluqlar/"
                      >
                        Qovluqlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/cap-kagizi/"
                      >
                        Çap kağızları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/vizit-karti-qabi/"
                      >
                        Vizit kartı qabları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/defterxana-fayli/"
                      >
                        Dəftərxana faylları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/gundelik-kitabca/"
                      >
                        Gündəlik kitabçalar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/zerf/"
                      >
                        Zərflər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/qelemler/"
                      >
                        Qələmlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/ofis-avadanliqlari/ofis-levazimatlari/yapishqan-lent/"
                      >
                        Yapışqan lentlər
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/telefonlar/ev-ofis/"
                      >
                        <span>Ev və ofis telefonları</span>
                      </Link>
                    </div>
                  </li>
                  <li class="datt3"></li>
                </ul>
              </div>
            </li>

            <li>
              <Link>
                <div className="icon">
                  <img alt=""
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Canta.png"
                    src="https://kontakt.az/wp-content/uploads/2022/10/Canta.png"
                    data-was-processed="true"
                  />
                  <img alt=""
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/10/Canta.png"
                  />
                </div>
                <span className="title">Uşaq aləmi</span>
              </Link>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/usaqalemi/usaq-yedirilmesi/"
                      >
                        <span>Uşaq yedirilməsi</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/yemekstolu/"
                      >
                        Uşaq üçün yemək masaları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/qidalandiricilar/"
                      >
                        Qidalandırıcılar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/meyve-suzgecleri/"
                      >
                        Meyvə süzgəcləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/sud-saganlar/"
                      >
                        Süd sağanlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/usaq-termos/"
                      >
                        Uşaq üçün termoslar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/emzikler/"
                      >
                        Əmziklər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/emzik-ucun-tutacaq/"
                      >
                        Əmzik üçün tutacaqlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/emzik-qablari/"
                      >
                        Əmzik qabları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/qab-komplekti/"
                      >
                        Uşaq qabları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/elektron-isidici/"
                      >
                        Elektron isidicilər
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/usaqalemi/korpelere-qulluq/"
                      >
                        <span>Körpələrə qulluq</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/bezstolu/"
                      >
                        Bez dəyişmə stolu
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/daraqlar/"
                      >
                        Daraqlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/sterilizator-usaqaksesuar/"
                      >
                        Sterilizatorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/burun-aspiratoru/"
                      >
                        Burun aspiratorları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/inqalyator/"
                      >
                        Elektrikli inqalyatorlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/sungerler/"
                      >
                        Uşaq üçün hamam aksesuarları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/meiset-texnikasi/gozellik-ve-saglamliq/termometr/"
                      >
                        Termometrlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/usaq-terezisi/"
                      >
                        Uşaq tərəziləri
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/usaqalemi/usaq-ucun-smart-qadjetler/"
                      >
                        <span>Uşaq üçün smart qadjetlər</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/saatlar-ve-qolbaglar/usaq-saatlari/"
                      >
                        Uşaq saatları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/videodaye/"
                      >
                        Videodayə
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/usaqalemi/arabalar-ve-oturucaqlar/"
                      >
                        <span>Uşaq arabaları və avtomobil oturacaqları</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/oturacaq/"
                      >
                        Avtomobil oturacaqları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/araba/"
                      >
                        Uşaq arabaları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/arabalar-ve-oturucaqlar/manejl%c9%99r/"
                      >
                        Manejlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/arabalar-ve-oturucaqlar/yerim%c9%99-arabasi/"
                      >
                        Yerimə arabaları
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/avtomobil-oturacaqlari-ucun-aksessuarlar/"
                      >
                        Avtomobil oturacaqları üçün aksessuarlar
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/usaqalemi/usaqaksesuar/analar-ucun-aksesuarlar/"
                      >
                        Analar üçün aksesuarlar
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/hobbi-ve-eylence/oyun/"
                      >
                        <span>Oyunlar</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/ofis-avadanliqlari/mekteblevazimat/"
                      >
                        <span>Məktəb ləvazimatları</span>
                      </Link>
                    </div>
                  </li>
                  <li class="datt3">
                    <Link href="https://kontakt.az/dect-panasonic-baby-cam-kx-hn3001ruw-2/">
                      <img alt=""
                        class="menurightbanner menucustombnnr lazy loaded"
                        src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-5@3x-7-scaled.webp"
                        data-src="https://kontakt.az/wp-content/uploads/2023/01/Artboard-1-copy-5@3x-7-scaled.webp"
                        data-was-processed="true"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link>
                <div className="icon">
                  <img alt=""
                    style={firstIconStyle}
                    className="lazy loaded"
                    data-src="https://kontakt.az/wp-content/uploads/2022/09/29fafe3d-6095-4c2e-8fc1-39678474bb1b.png"
                    src="https://kontakt.az/wp-content/uploads/2022/09/29fafe3d-6095-4c2e-8fc1-39678474bb1b.png"
                    data-was-processed="true"
                  />
                  <img alt=""
                    className="active lazy"
                    style={secondIconStyle}
                    data-src="https://kontakt.az/wp-content/uploads/2022/09/29fafe3d-6095-4c2e-8fc1-39678474bb1b.png"
                  />
                </div>
                <span className="title">KontaktPlus</span>
              </Link>
              <div class="menu-open menu-open-item">
                <ul>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/xidmetler/qurasdirilma-xidmetleri/"
                      >
                        <span>Sahə xidmətləri</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/xidmetler/qurasdirilma-xidmetleri/ev-metbex-texnikasi-ucun-xidmetler/"
                      >
                        Ev və mətbəx texnikaları üçün xidmətlər
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/xidmetler/qurasdirilma-xidmetleri/kombi-xidmetleri/"
                      >
                        Kombi xidmətləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/xidmetler/qurasdirilma-xidmetleri/kondisioner-xidmetleri/"
                      >
                        Kondisioner xidmətləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/xidmetler/qurasdirilma-xidmetleri/tv-qurasdirma-demontaj-xidmetleri/"
                      >
                        Tv quraşdırma və demontaj xidmətləri
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/xidmetler/qurasdirilma-xidmetleri/kimyevi-temizleme/"
                      >
                        Kimyəvi təmizləmə
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/xidmetler/birdefe-gosterilen-xidmet/"
                      >
                        <span>Bir dəfə göstərilən xidmətlər</span>
                      </Link>
                      <Link
                        class="subsub_a"
                        href="https://kontakt.az/xidmetler/reqemsal-paketleri/"
                      >
                        Rəqəmsal paketlər
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/xidmetler/online-kinoteatr/"
                      >
                        <span>Online kinoteatrlar</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/xidmetler/reklam-bloklayici/"
                      >
                        <span>Reklam bloklayıcılar</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/xidmetler/proqram-teminati/"
                      >
                        <span>Proqram təminatları</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/xidmetler/antiviruslar/"
                      >
                        <span>Antiviruslar</span>
                      </Link>
                    </div>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://kontakt.az/xidmetler/kripto-cuzdan/"
                      >
                        <span>Kripto cüzdanlar</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="menulicontainer">
                      <Link
                        class="menuliparent_a"
                        href="https://plus.kontakt.az/index.html"
                      >
                        <span>Elektrosamokat icarəsi</span>
                      </Link>
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
                    <img alt="" src="https://kontakt.az/wp-content/uploads/2021/09/1.png" />
                    <p>Qapıda rəsmiləşdirmə</p>
                    <p>Nağd, hissə-hissə və ya kartla ödəmə imkanı ilə</p>
                  </div>

                  <div className="delivery-info">
                    <img alt="" src="https://kontakt.az/wp-content/uploads/2021/09/2.png" />
                    <p>Rəsmi Zəmanət</p>
                    <p>3 ilədək rəsmi zəmanət</p>
                  </div>

                  <div className="delivery-info">
                    <img alt="" src="https://kontakt.az/wp-content/uploads/2021/09/3.png" />
                    <p> Pulsuz çatdırılma</p>
                    <p>Sürətli, təhlükəsiz və təmassız</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="home-top-bottom">
              <div className="home-top-bottom-left">
                <Link>
                  <img alt="" src="https://kontakt.az/wp-content/uploads/2023/02/610x180-1-1024x303_png.webp" />
                </Link>
              </div>
              <div className="home-top-bottom-right">
                <Link>
                  <img alt="" src="https://kontakt.az/wp-content/uploads/2023/02/banner-az-1024x302_png.webp" />
                </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
