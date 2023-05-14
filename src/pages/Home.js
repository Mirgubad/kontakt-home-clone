import DailyDiscount from "../components/DailyDiscount";
import HomeTop from "../components/HomeTop";
import KontaktTv from "../components/KontaktTv";
import Partners from "../components/Partners";
import SellingLider from "../components/SellingLider";
import "../assets/css/responsive.css";
function Home() {
  return (
    <div>
      <HomeTop/>
      <DailyDiscount title='Sizin üçün seçdiklərimiz' />
      <DailyDiscount title='Həftənin Təklifləri'/>
      <SellingLider />
      <DailyDiscount title='Ən yaxşı sezon təklifləri'/>
      <KontaktTv/>
      <Partners/>
    </div>
  );
}

export default Home;