import { Container } from "react-bootstrap";
import Img from "next/image";

const Home_page = () => {
  return (
    <div>
      <Container className="position-absolute top-13 start-13">
        <div className="introduction d-flex flex-column">
          <div>Yoshinoya-н Товч танилцуулга</div>
          <div className="story text-primary">good easy fast</div>
          <div className="story ">
            Yoshinoya-н үүсэл хөгжил нь тэртээх 1899 (A&W – 1919, White Castle –
            1921, MacDonald – 1940, KFC – 1952, Burger King – 1953) онд буюу
            одоогоос 122 жилийн өмнө Япон улс, Токио хотын хөл хөдөлгөөн ихтэй
            Нихонбаши загасны захаас эхэлсэн.
          </div>
          <div className="d-flex align-items-center">
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
          <Img
            src={"/images/taco.png"}
            width={386}
            height={386}
            alt="taco food"
          />
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
      </div>
      <div></div>
    </div>
  );
};

export default Home_page;
