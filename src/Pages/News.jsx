import DynamicHero from "../components/DynamicHero";
import NewsDisplayContainer from "../components/News/NewsDisplayContainer";
import NewsFilterMenu from "../components/News/NewsFilterMenu";
import Newsletter from "../components/News/Newsletter";

function News() {
  return (
    <section className="news-sect">
      <DynamicHero pageName="Auto News" />

      <div className="container news-page-cont">
        {/* News Results */}
        <div className="main-menu">
          <NewsDisplayContainer />
        </div>

        {/* Side Menu */}
        <aside className="side-menu">
          <Newsletter />
          <NewsFilterMenu />
        </aside>
      </div>
    </section>
  );
}

export default News;
