import { useState } from "react";
import ReactPageScroller from "react-page-scroller";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number) => {
    console.log(number);
  };
  return (
    <>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </ReactPageScroller>
    </>
  );
};

export default Home;
