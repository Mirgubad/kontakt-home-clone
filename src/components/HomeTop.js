import SideBarMenu from "./SideBarMenu";
import DeliveryInfo from "./DeliveryInfo";
import BannerSection from "./BannerSection";
import MainSlider from "./MainSlider";
import MiniSlider from "./MiniSlider";

const HomeTop = () => {
  return (
    <div id="homeTop">
      <div className="container">
        <div className="product-menu">
          <SideBarMenu />
          <div className="home-top-center">
            <MainSlider />
            <DeliveryInfo />
            <BannerSection />
          </div>
          <div className="home-top-right">
            <MiniSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
