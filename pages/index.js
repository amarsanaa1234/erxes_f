import { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import Home_page from "../components/Home_page";
import Products from "../components/Products";
import PageLayout from "../components/PageLayout";
import History from "../components/History";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number) => {
    console.log(number);
  };
  return (
    <div>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <PageLayout>
          <Home_page />
        </PageLayout>
        <PageLayout>
          <Products />
        </PageLayout>
        <PageLayout>
          <History />
        </PageLayout>

        <div>4</div>
        <div>5</div>
      </ReactPageScroller>
    </div>
  );
};

export default Home;
