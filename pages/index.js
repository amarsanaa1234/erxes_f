import { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import Home_page from "../components/Home_page";
import Products from "../components/Products";
import PageLayout from "../components/PageLayout";
import Img from "next/image";

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
          <Img
            src={"/images/Ellipse1.png"}
            width={533}
            height={533}
            alt="mon"
          />
        </PageLayout>
        <PageLayout>
          <Products />
        </PageLayout>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </ReactPageScroller>
    </div>
  );
};

export default Home;
