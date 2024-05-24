import { DUMMY_NEWS_DATA } from "../../assets/dummyData/latestNewsData";
import DynamicCarousel from "../DynamicCarousel";
import LatestNewsCard from "../DynamicCarouselCards/LatestNewsCard";
import DynamicHeader from "../DynamicHeader";

function LatestNews() {
  return (
    <section className="latest-news-sect">
      <div className="container">

        {/* dynamic header */}
        <DynamicHeader
          header="Latest News"
          subtitle="Luxury Rental Services"
          headerColor="black"
        ></DynamicHeader>


        {/* news carousel */}
        <DynamicCarousel
          carouselDataArr={DUMMY_NEWS_DATA}
          CarouselItem={LatestNewsCard}
          desktopConfigureObj={{ displayAmnt: 3, minWidth: 1000 }}
          mediumConfigureObj={{ displayAmnt: 3, minWidth: 550 }}
          mobileConfigureObj={{ displayAmnt: 3, minWidth: 0 }}
        />

        
      </div>
    </section>
  );
}

export default LatestNews;
