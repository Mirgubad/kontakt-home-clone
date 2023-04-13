import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/header-breadcrumb.css";
export default function HeaderBreadCrumb() {
  return (
    <section id="header-breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="d-flex gap-5">
              <li><Link to="/">Əsas səhifə</Link></li>
              <li><Link to="/">Telefonlar və planşetlər</Link></li>
              <li><Link to="/">Smartfonlar</Link></li>
              <li><Link to="/">OPPO</Link></li>
              <li><Link to="/">OPPO A77s 8/128 GB Orange</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
