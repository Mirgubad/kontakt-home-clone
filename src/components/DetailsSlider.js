import React, { Component } from "react";
import Slider from "react-slick";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      arrows:false
    };

    const settings2 = {
      dots: false,
      slidesToShow: 1,
      swipeToSlide: true,
      arrows:false,
      fade:true,
      draggable:true
    };
    const img =
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1";
    const imgStyle = {
      height: "500px",
      width: "700px",
      marginBottom: "30px",
    };
    return (
      <div className="d-flex gap-5">
        <Slider
          {...settings}
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
        >
          <div>
            <img className="mini-img" src="https://kontakt.az/wp-content/uploads/2022/07/Galaxy-A13-Black_png.webp" style={imgStyle} />
          </div>
          <div>
            <img className="mini-img" src="https://kontakt.az/wp-content/uploads/2022/07/img_id2814380829113365276_png.webp" style={imgStyle} />
          </div>
          <div>
            <img className="mini-img" src="https://kontakt.az/wp-content/uploads/2022/07/img_id8015951294121460512_png.webp" style={imgStyle} />
          </div>
        </Slider>
        <div className="big-photo">
          <img src="https://kontakt.az/wp-content/uploads/2022/07/Galaxy-A13-Black_png.webp" />
        </div>
      </div>
    );
  }
}
