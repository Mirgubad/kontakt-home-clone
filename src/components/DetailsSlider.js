import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const miniImages = [
  {
    id: 1,
    src: "https://kontakt.az/wp-content/uploads/2022/07/Galaxy-A13-Black_png.webp",
  },
  {
    id: 2,
    src: "https://kontakt.az/wp-content/uploads/2022/07/img_id2814380829113365276_png.webp",
  },
  {
    id: 3,
    src: "https://kontakt.az/wp-content/uploads/2022/07/img_id8015951294121460512_png.webp",
  },
];




export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      bigPhotoSrc: miniImages[0].src,
      isModalOpen: false,
    };
  }

  handleMiniImageClick = (event) => {
    const newSrc = event.target.src;
    this.setState({ bigPhotoSrc: newSrc });
    event.target.classList.add('test')
  };

  handleBigImageClick = () => {
    this.setState({ isModalOpen: true });
    document.getElementById('lightboxOverlay').classList.add('lightboxOverlay');
  }

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
    document.getElementById('lightboxOverlay').classList.remove('lightboxOverlay');
  }


  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }


  render(props) {
   
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      arrows: false,
    };

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
          {miniImages.map((img) => (
            <div>
              <img
                className="mini-img"
                key={img.id}
                src={img.src}
                style={imgStyle}
                alt={`item ${img.id}`}
                onClick={this.handleMiniImageClick}
              />
            </div>
          ))}
        </Slider>
        <div className="big-photo">
          <img onClick={this.handleBigImageClick} src={this.state.bigPhotoSrc} alt="item" />
        </div>

        {this.state.isModalOpen && (
          <div className="modal-photo">
            <img src={this.state.bigPhotoSrc} alt="Big Image" />
            <button className="modal-photo-close-btn" onClick={this.handleCloseModal}><FontAwesomeIcon icon={faTimes} /></button>
          </div>
        )}

       
      </div>
    );
  }
}
