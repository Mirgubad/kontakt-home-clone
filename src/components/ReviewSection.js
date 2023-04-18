import React from "react";
import { Link } from "react-router-dom";

export default function ReviewSection() {
  return (
    <section id="review-tabs">
      <div className="tabs">
        <ul className="nav nav-tabs round-edge-tab" id="myTab" role="tablist">
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
  );
}
