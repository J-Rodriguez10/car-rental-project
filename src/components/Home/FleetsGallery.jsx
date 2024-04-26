import DynamicHeader from "../DynamicHeader";

import img1 from "../../images/fleets-gallery/gallery-img-1.jpg";
import img2 from "../../images/fleets-gallery/gallery-img-2.jpg";
import img3 from "../../images/fleets-gallery/gallery-img-3.jpg";
import img4 from "../../images/fleets-gallery/gallery-img-4.jpeg";
import img5 from "../../images/fleets-gallery/gallery-img-5.jpeg";
import img6 from "../../images/fleets-gallery/gallery-img-6.jpg";
import img7 from "../../images/fleets-gallery/gallery-img-7.jpeg";
import img8 from "../../images/fleets-gallery/gallery-img-8.jpeg";


function FleetsGallery() {
  return (
    <section className="fleets-gallery-sect">
      <div className="container-large">
        
        {/* header */}
        <DynamicHeader
          header="The Fleets Gallery"
          headerColor="black"
          subtitle="Luxury Rental Services"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit, aliquam dolore neque facere pariatur optio exercitationem!
        </DynamicHeader>

        {/* gallery */}
        <div className="gallery">
          <img src={img1} alt="gallery-img-1" />
          <img src={img2} alt="gallery-img-2" />
          <img src={img3} alt="gallery-img-3" />
          <img src={img4} alt="gallery-img-4" />
          <img src={img5} alt="gallery-img-5" />
          <img src={img6} alt="gallery-img-6" />
          <img src={img7} alt="gallery-img-7" />
          <img src={img8} alt="gallery-img-8" />
        </div>

      </div>
    </section>
  );
}

export default FleetsGallery;
