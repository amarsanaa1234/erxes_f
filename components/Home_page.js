import { Button, Container } from "react-bootstrap";
import Img from "next/image";
// import Image from "react/image";
const Home_page = () => {
  return (
    <div className="banner d-flex align-items-center justify-content-evenly">
      <Container className="pos">
        <div className="introduction d-flex flex-column">
          <div>Yoshinoya-н Товч танилцуулга</div>
          <div className="story text-primary">good easy fast</div>
          <div className="story ">
            Yoshinoya-н үүсэл хөгжил нь тэртээх 1899 (A&W – 1919, White Castle –
            1921, MacDonald – 1940, KFC – 1952, Burger King – 1953) онд буюу
            одоогоос 122 жилийн өмнө Япон улс, Токио хотын хөл хөдөлгөөн ихтэй
            Нихонбаши загасны захаас эхэлсэн.
          </div>
          <div className="image_s d-flex align-items-center">
            <div>
              <Img
                src={"/images/Frame_79.png"}
                height={56}
                width={56}
                alt="play video"
              />
            </div>
            <div className="play_video">Танилцуулга үзэх</div>
          </div>
        </div>
      </Container>
      <div className="vector_image">
        <div className="taco">
          <div className="img-wrap">
            <Img
              src={"/images/taco.png"}
              layout="fill"
              alt="taco food"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="vector1">
          <Img
            src={"/images/Vector1.png"}
            width={691}
            height={613}
            alt="vector"
          />
        </div>
        <div className="vector">
          <Img
            src={"/images/Vector2.png"}
            width={691}
            height={613}
            alt="vector"
          />
        </div>
        <div className="Frame_1">
          <Img src={"/images/Frame.png"} width={225} height={55} alt="frame" />
        </div>
        <div className="Frame_2">
          <Img src={"/images/Frame1.png"} width={75} height={62} alt="frame" />
        </div>
        <div className="Frame_3">
          <Img
            src={"/images/Frame2.png"}
            width={101}
            height={108}
            alt="frame"
          />
        </div>
      </div>
    </div>
  );
};

export default Home_page;
