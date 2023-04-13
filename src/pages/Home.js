import DailyDiscount from "../components/DailyDiscount";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeTop from "../components/HomeTop";
import KontaktTv from "../components/KontaktTv";
import Partners from "../components/Partners";
import SeasonSale from "../components/SeasonSale";
import SellingLider from "../components/SellingLider";
import SpecialProduct from "../components/SpecialProduct";

function Home() {
  return (
    <div>
      <HomeTop/>
      <SpecialProduct/>
      <DailyDiscount/>
      <SellingLider/>
      <SeasonSale/>
      <KontaktTv/>
      <Partners/>
    </div>
  );
}

export default Home;