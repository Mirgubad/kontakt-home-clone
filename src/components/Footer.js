import React from "react";
import "../assets/css/footer.css";
import { Link } from "react-router-dom";
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
                  <Link>Konfidensiallıq siyasəti</Link>
                </li>
                <li>
                  <Link>Hissə-hissə ödəniş şərtləri</Link>
                </li>
                <li>
                  <Link>Geri qaytarma siyasəti</Link>
                </li>
                <li>
                  <Link>Aylıq ödənişlərin həyata keçməsi</Link>
                </li>
                <li>
                  <Link>Servis Mərkəzləri</Link>
                </li>
              </ul>

              <ul>
                <li>Müştərilər</li>
                <li>
                  <Link>Saytın istifadə şərtləri</Link>
                </li>
                <li>
                  <Link>Korporativ satışlar</Link>
                </li>
                <li>
                  <Link>Zəmanətlər</Link>
                </li>
                <li>
                  <Link>Şikayətlərin idarəolunma siyasəti</Link>
                </li>
                <li>
                  <Link>Ən yaxşı qiymətə zəmanət!</Link>
                </li>
              </ul>

              <ul>
                <li>Şirkət</li>
                <li>
                  <Link>Şirkət haqqında</Link>
                </li>
                <li>
                  <Link>Karyera</Link>
                </li>
                <li>
                  <Link>“Qarabağ” Proqramı</Link>
                </li>
                <li>
                  <Link>“Kontakt” Zəngilan sakinlərinə Zəfər payı çatdırdı</Link>
                </li>
                <li>
                  <Link>Şeş at, 10 qatını geri al!</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact">
              <ul>
                <li>Əlaqə</li>
                <li>
                  <Link href="tel:*6060">
                    <div class="icon">
                    <i class="fas fa-mobile-android-alt"></i>
                    </div>
                    *6060
                  </Link>
                </li>
                <li>
                  <Link href="tel:+994123102424">
                    <div class="icon iconnomre">
                      <i class="fas fa-phone-alt"></i>
                    </div>
                    012 310 24 24
                  </Link>
                </li>
                <li>
                  <Link>
                    <div class="icon">
                    <i class="fas fa-map-marker-alt"></i>
                    </div>
                    Mağazalarımız xəritədə
                  </Link>
                </li>
              </ul>
            </div>
            <div className="social-accounts">
              <ul>
                <li>Bizimlə qalın</li>
                <li>
                  <Link target="_blank" href="https://bit.ly/KontaktHome_Facebook">
                    <i class="fab fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i class="fab fa-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i class="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i class="fab fa-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i class="fab fa-whatsapp"></i>
                  </Link>
                </li>

                <li>
                  <Link>
                    <i class="fab fa-telegram"></i>
                  </Link>
                </li>

                <li>
                  <Link>
                    <i class="fab fa-tiktok"></i>
                  </Link>
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
