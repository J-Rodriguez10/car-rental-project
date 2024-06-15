import DynamicButton from "../DynamicButton";

function Newsletter() {
  return (
    <div className="newsletter-cont">
      {/* Newsletter header  */}
      <header>
        <h5>Newsletter</h5>
      </header>

      {/* Newsletter details */}
      <div className="newsletter-details">
        <h6>Get Even More</h6>
        <p>
          &quot;Get all latest content delivered straight to your inbox&quot;
        </p>
        {/* Gmail input container */}
        <div className="input-cont">
          <input type="gmail" placeholder="Enter email" />
          <DynamicButton>Go</DynamicButton>
        </div>

        <p className="subtitle">Don&apos;t worry we don&apos;t spam</p>
      </div>
    </div>
  );
}

export default Newsletter;
