import React from "react";
import "../assets/css/footer.css";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="links">
              <ul>
                <li>İnformasiya</li>
                <li>
                  <a>Konfidensiallıq siyasəti</a>
                </li>
                <li>
                  <a>Hissə-hissə ödəniş şərtləri</a>
                </li>
                <li>
                  <a>Geri qaytarma siyasəti</a>
                </li>
                <li>
                  <a>Aylıq ödənişlərin həyata keçməsi</a>
                </li>
                <li>
                  <a>Servis Mərkəzləri</a>
                </li>
              </ul>

              <ul>
                <li>Müştərilər</li>
                <li>
                  <a>Saytın istifadə şərtləri</a>
                </li>
                <li>
                  <a>Korporativ satışlar</a>
                </li>
                <li>
                  <a>Zəmanətlər</a>
                </li>
                <li>
                  <a>Şikayətlərin idarəolunma siyasəti</a>
                </li>
                <li>
                  <a>Ən yaxşı qiymətə zəmanət!</a>
                </li>
              </ul>

              <ul>
                <li>Şirkət</li>
                <li>
                  <a>Şirkət haqqında</a>
                </li>
                <li>
                  <a>Karyera</a>
                </li>
                <li>
                  <a>“Qarabağ” Proqramı</a>
                </li>
                <li>
                  <a>“Kontakt” Zəngilan sakinlərinə Zəfər payı çatdırdı</a>
                </li>
                <li>
                  <a>Şeş at, 10 qatını geri al!</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact">
              <ul>
                <li>Əlaqə</li>
                <li>
                  <a href="tel:*6060">
                    <div class="icon">
                    <i class="fas fa-mobile-android-alt"></i>
                    </div>
                    *6060
                  </a>
                </li>
                <li>
                  <a href="tel:+994123102424">
                    <div class="icon iconnomre">
                      <i class="fas fa-phone-alt"></i>
                    </div>
                    012 310 24 24
                  </a>
                </li>
                <li>
                  <a>
                    <div class="icon">
                    <i class="fas fa-map-marker-alt"></i>
                    </div>
                    Mağazalarımız xəritədə
                  </a>
                </li>
              </ul>
            </div>
            <div className="social-accounts">
              <ul>
                <li>Bizimlə qalın</li>
                <li>
                  <a target="_blank" href="https://bit.ly/KontaktHome_Facebook">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </li>

                <li>
                  <a>
                    <i class="fab fa-telegram"></i>
                  </a>
                </li>

                <li>
                  <a>
                    <i class="fab fa-tiktok"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      <p className="footer-rights">© {new Date().getFullYear()} Kontakt Home</p>
      </div>
    </footer>
  );
}
