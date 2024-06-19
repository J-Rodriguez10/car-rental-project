import DynamicHero from "../components/DynamicHero";
import NewsFilterMenu from "../components/News/NewsFilterMenu";
import Newsletter from "../components/News/Newsletter";
import NewsContextProvider from "../context/news-context";
import NewsDisplayContainer from "../components/News/NewsDisplayContainer";

function News() {
  return (
    <NewsContextProvider>
      <section className="news-sect">
        {/* Hero */}
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
    </NewsContextProvider>
  );
}

export default News;
