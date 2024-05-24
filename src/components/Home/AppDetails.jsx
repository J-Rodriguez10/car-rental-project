import appleStoreImg from "../../images/app-details-sect/apple-store-img.png";
import googlePlayImg from "../../images/app-details-sect/google-play-img.png";
import phoneImg from "../../images/app-details-sect/phone-img.png";

function AppDetails() {
  return (
    <section className="app-details-sect">
      <div className="container-wide app-details-cont">
        {/* phone img */}
        <img src={phoneImg} alt="" className="phone-img" />

        {/* app details */}
        <div className="app-details">
          <h2 className="sub-header">
            Faster, easier access to car rental services
          </h2>

          <h2 className="main-header">Download Our App</h2>

          <p>
            Integer tortor bibendum est faucibus gravida aliquam nulla lectus
            lacinia eget lorem acdua eros pharetral interdum quisque convallis
            nula dpsum val mualiq amet consectetur adipisicing sed eiusmod tem
            pory.
          </p>

          <div className="app-store-imgs">
            {/* google play store logo */}
            <img src={googlePlayImg} alt="" className="google-play" />

            {/* apple store logo */}
            <img src={appleStoreImg} alt="" className="apple-store" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppDetails;
