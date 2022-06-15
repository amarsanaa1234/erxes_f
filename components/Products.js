import React from "react";
import Img from "next/image";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    customPaging: () => <div></div>,
    arrows: false,
  };
  //Array of Images
  return (
    <Container className="d-flex justify-content-around">
      <div className="bg-gray">
        <div>Бүтээгдэхүүн</div>
        <div>Хамгийн сайн амт чанарыг санал болгоно</div>
        <div>Бүх хоол харах</div>
      </div>
      <div>
        <Slider className="product_slider bg-primary" {...settings}>
          <div>
            <h3>1</h3>
            {/* <Img src={images/} */}
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    </Container>
  );
};
export default Slideshow;
