import React from "react";
import Img from "next/image";
import { Button, Container } from "react-bootstrap";
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
    <Container className="d-flex">
      <div className="products">
        <div className="product_title d-flex justify-content-center bg-orange p-2 my-2">
          Бүтээгдэхүүн
        </div>
        <div className="product_doc d-flex justify-content-center">
          Хамгийн сайн амт чанарыг санал болгоно
        </div>
        <Button className="product_btn border-orange bg-white">
          Бүх хоол харах
        </Button>
      </div>
      <div>
        <Slider className="product_slider" {...settings}>
          <div className="frame">
            <div className="side-slide shadow bg-body rounded">
              <div className="side-title bg-primary d-flex align-items-center justify-content-center">
                1000 Yoshi.P1
              </div>
              <div className="slide-images d-flex justify-content-center align-items-center">
                <Img
                  src={"/images/Frame3.png"}
                  width={233}
                  height={196}
                  alt="hool"
                />
              </div>
              <Container className="fw-bold pf-3 pr-3">Gyudon</Container>
              <Container className="slide-document pf-3 pr-3">
                Yoshinoya-н хамгийн алдартай хоол нь Gyudon ( 牛丼) (beef bowl)
                буюу Үхрийн махны боул юм.
              </Container>
              <Container className="slide-price">Үнэ: 8900₮</Container>
            </div>
          </div>
          <div className="frame">
            <div className="side-slide shadow bg-body rounded">
              <div className="side-title bg-primary d-flex align-items-center justify-content-center">
                1000 Yoshi.P1
              </div>
              <div className="slide-images d-flex justify-content-center align-items-center">
                <Img
                  src={"/images/Frame3.png"}
                  width={233}
                  height={196}
                  alt="hool"
                />
              </div>
              <Container className="fw-bold pf-3 pr-3">Gyudon</Container>
              <Container className="slide-document pf-3 pr-3">
                Yoshinoya-н хамгийн алдартай хоол нь Gyudon ( 牛丼) (beef bowl)
                буюу Үхрийн махны боул юм.
              </Container>
              <Container className="slide-price">Үнэ: 8900₮</Container>
            </div>
          </div>
          <div className="frame">
            <div className="side-slide shadow bg-body rounded">
              <div className="side-title bg-primary d-flex align-items-center justify-content-center">
                1000 Yoshi.P1
              </div>
              <div className="slide-images d-flex justify-content-center align-items-center">
                <Img
                  src={"/images/Frame3.png"}
                  width={233}
                  height={196}
                  alt="hool"
                />
              </div>
              <Container className="fw-bold pf-3 pr-3">Gyudon</Container>
              <Container className="slide-document pf-3 pr-3">
                Yoshinoya-н хамгийн алдартай хоол нь Gyudon ( 牛丼) (beef bowl)
                буюу Үхрийн махны боул юм.
              </Container>
              <Container className="slide-price">Үнэ: 8900₮</Container>
            </div>
          </div>
          <div className="frame">
            <div className="side-slide shadow bg-body rounded">
              <div className="side-title bg-primary d-flex align-items-center justify-content-center">
                1000 Yoshi.P1
              </div>
              <div className="slide-images d-flex justify-content-center align-items-center">
                <Img
                  src={"/images/Frame3.png"}
                  width={233}
                  height={196}
                  alt="hool"
                />
              </div>
              <Container className="fw-bold pf-3 pr-3">Gyudon</Container>
              <Container className="slide-document pf-3 pr-3">
                Yoshinoya-н хамгийн алдартай хоол нь Gyudon ( 牛丼) (beef bowl)
                буюу Үхрийн махны боул юм.
              </Container>
              <Container className="slide-price">Үнэ: 8900₮</Container>
            </div>
          </div>
          <div className="frame">
            <div className="side-slide shadow bg-body rounded">
              <div className="side-title bg-primary d-flex align-items-center justify-content-center">
                1000 Yoshi.P1
              </div>
              <div className="slide-images d-flex justify-content-center align-items-center">
                <Img
                  src={"/images/Frame3.png"}
                  width={233}
                  height={196}
                  alt="hool"
                />
              </div>
              <Container className="fw-bold pf-3 pr-3">Gyudon</Container>
              <Container className="slide-document pf-3 pr-3">
                Yoshinoya-н хамгийн алдартай хоол нь Gyudon ( 牛丼) (beef bowl)
                буюу Үхрийн махны боул юм.
              </Container>
              <Container className="slide-price">Үнэ: 8900₮</Container>
            </div>
          </div>
          <div className="frame">
            <div className="side-slide shadow bg-body rounded">
              <div className="side-title bg-primary d-flex align-items-center justify-content-center">
                1000 Yoshi.P1
              </div>
              <div className="slide-images d-flex justify-content-center align-items-center">
                <Img
                  src={"/images/Frame3.png"}
                  width={233}
                  height={196}
                  alt="hool"
                />
              </div>
              <Container className="fw-bold pf-3 pr-3">Gyudon</Container>
              <Container className="slide-document pf-3 pr-3">
                Yoshinoya-н хамгийн алдартай хоол нь Gyudon ( 牛丼) (beef bowl)
                буюу Үхрийн махны боул юм.
              </Container>
              <Container className="slide-price">Үнэ: 8900₮</Container>
            </div>
          </div>
          <div className="frame">
            <div className="side-slide shadow bg-body rounded">
              <div className="side-title bg-primary d-flex align-items-center justify-content-center">
                1000 Yoshi.P1
              </div>
              <div className="slide-images d-flex justify-content-center align-items-center">
                <Img
                  src={"/images/Frame3.png"}
                  width={233}
                  height={196}
                  alt="hool"
                />
              </div>
              <Container className="fw-bold pf-3 pr-3">Gyudon</Container>
              <Container className="slide-document pf-3 pr-3">
                Yoshinoya-н хамгийн алдартай хоол нь Gyudon ( 牛丼) (beef bowl)
                буюу Үхрийн махны боул юм.
              </Container>
              <Container className="slide-price">Үнэ: 8900₮</Container>
            </div>
          </div>
          <div className="frame">
            <div className="side-slide shadow bg-body rounded">
              <div className="side-title bg-primary d-flex align-items-center justify-content-center">
                1000 Yoshi.P1
              </div>
              <div className="slide-images d-flex justify-content-center align-items-center">
                <Img
                  src={"/images/Frame3.png"}
                  width={233}
                  height={196}
                  alt="hool"
                />
              </div>
              <Container className="fw-bold pf-3 pr-3">Gyudon</Container>
              <Container className="slide-document pf-3 pr-3">
                Yoshinoya-н хамгийн алдартай хоол нь Gyudon ( 牛丼) (beef bowl)
                буюу Үхрийн махны боул юм.
              </Container>
              <Container className="slide-price">Үнэ: 8900₮</Container>
            </div>
          </div>
          <div className="frame">
            <div className="side-slide shadow bg-body rounded">
              <div className="side-title bg-primary d-flex align-items-center justify-content-center">
                1000 Yoshi.P1
              </div>
              <div className="slide-images d-flex justify-content-center align-items-center">
                <Img
                  src={"/images/Frame3.png"}
                  width={233}
                  height={196}
                  alt="hool"
                />
              </div>
              <Container className="fw-bold pf-3 pr-3">Gyudon</Container>
              <Container className="slide-document pf-3 pr-3">
                Yoshinoya-н хамгийн алдартай хоол нь Gyudon ( 牛丼) (beef bowl)
                буюу Үхрийн махны боул юм.
              </Container>
              <Container className="slide-price">Үнэ: 8900₮</Container>
            </div>
          </div>
        </Slider>
      </div>
    </Container>
  );
};
export default Slideshow;
