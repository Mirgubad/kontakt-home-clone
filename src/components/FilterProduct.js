import React from "react";
import { Link } from "react-router-dom";
export default function FilterProduct(props) {
  return (
    <div className="tabs">
      <nav>
        <ul class="nav nav-tabs round-edge-tab">
          <li class="nav-item">
            <Link
              class="nav-link active"
              href="#mobil-telefonlar"
              data-toggle="tab"
            >
              Smartfon
            </Link>
          </li>
           <li class="nav-item">
            <Link class="nav-link" href="#tv-audio-video" data-toggle="tab">
              Televizor
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="#komputerler" data-toggle="tab">
              Noutbuk
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link "
              href="#kombiveradiatorlar"
              data-toggle="tab"
            >
              Kombi
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " href="#smartsaatlar" data-toggle="tab">
              Smartsaat
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " href="#qulaqliqlar-umumi" data-toggle="tab">
              Qulaqlıqlar
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " href="#soyuducu" data-toggle="tab">
              Soyuducu
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " href="#paltaryuyan" data-toggle="tab">
              Paltaryuyan
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " href="#tozsoran" data-toggle="tab">
              Tozsoran
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " href="#plansetler" data-toggle="tab">
              Planşet
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " href="#qabyuyan" data-toggle="tab">
              Qabyuyan
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " href="#utu" data-toggle="tab">
              Ütü
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " href="#fenhava" data-toggle="tab">
              Fen
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " href="#etceken" data-toggle="tab">
              Ətçəkən
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " href="#blender" data-toggle="tab">
              Blender
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " href="#mikrodalgali-soba" data-toggle="tab">
              Mikrodalğalı soba
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " href="#mebel" data-toggle="tab">
              Mebel
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " href="#tekstil" data-toggle="tab">
              Tekstil
            </Link>
          </li>{" "} 
        </ul>
      </nav>
    </div>
  );
}
