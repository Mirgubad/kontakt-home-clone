import React from "react";
const deliveryInfos = [
  {
    id: 1,
    src: "https://kontakt.az/wp-content/uploads/2021/09/1.png",
    title: "Qapıda rəsmiləşdirmə",
    description: "Nağd, hissə-hissə və ya kartla ödəmə imkanı ilə",
  },
  {
    id: 2,
    src: "https://kontakt.az/wp-content/uploads/2021/09/2.png",
    title: "Rəsmi Zəmanət",
    description: "3 ilədək rəsmi zəmanət",
  },
  {
    id: 3,
    src: "https://kontakt.az/wp-content/uploads/2021/09/3.png",
    title: "Pulsuz çatdırılma",
    description: "Sürətli, təhlükəsiz və təmassız",
  },
];
export default function DeliveryInfo() {
  return (
    <section id="delivery">
      <div className="delivery-main">
        <div className="delivery-container text-center">
          {deliveryInfos.map((info) => (
            <div className="delivery-info">
              <img alt="info" src={info.src} />
              <p>{info.title}</p>
              <p>{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
