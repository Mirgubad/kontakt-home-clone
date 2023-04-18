import React from 'react'
import { Link } from 'react-router-dom'

export default function BannerSection() {
  return (
    <section className="home-top-bottom">
    <div className="home-top-bottom-left">
      <Link>
        <img
          alt=""
          src="https://kontakt.az/wp-content/uploads/2023/02/610x180-1-1024x303_png.webp"
        />
      </Link>
    </div>
    <div className="home-top-bottom-right">
      <Link>
        <img
          alt=""
          src="https://kontakt.az/wp-content/uploads/2023/02/banner-az-1024x302_png.webp"
        />
      </Link>
    </div>
  </section>
  )
}
