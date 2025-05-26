import downArrow from "./assets/down-arrow.svg";
import model3 from "./assets/model-3.jpg";
import models from "./assets/model-s.jpg";
import modelx from "./assets/model-x.jpg";
import modely from "./assets/model-y.jpg";
import solarPanel from "./assets/solar-panel.jpg";
import solarRoof from "./assets/solar-roof.jpg";
import accessories from "./assets/accessories.jpg";
import Header from "./Header";
import Section from "./Section";
import "./tesla.css";

function Home() {
  return (
    <>
      <Header />
      <Section
        heading="Model 3"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        downArrow={downArrow}
        bgImage={model3}
      />
      <Section
        heading="Model S"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bgImage={models}
      />
      <Section
        heading="Model Y"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bgImage={modely}
      />˝
      <Section
        heading="Model X"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bgImage={modelx}
      />

      <Section
        heading="Solar Panel"
        tagline="Lower Cost Solar Panels in India"
        leftBtn="Custom Order"
        rightBtn="Learn More"
        bgImage={solarPanel}
      />
      <Section
        heading="Solar Roof"
        tagline="Produce Clean Energy from your roof"
        leftBtn="Custom Order"
        rightBtn="Learn More"
        bgImage={solarRoof}
      />
      <Section
        heading="Accessories"
        leftBtn="Custom Order"
        bgImage={accessories}
      />

    </>
  );
}

export default Home;
