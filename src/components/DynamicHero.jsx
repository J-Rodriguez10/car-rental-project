function DynamicHero({ pageName }) {
  return (
    <section className="dynamic-hero">
      <div className="container">
        <div className="title">
          <h1>{pageName}</h1>

          <div className="subtitle">
            <div className="bar"></div>
            <p>Home / {pageName}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DynamicHero;
