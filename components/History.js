import { Row, Container } from "react-bootstrap";

const History = () => {
  return (
    <Row>
      <Container className="">
        <div className="product_title d-flex justify-content-center bg-orange p-2 my-2">
          Үүсэл хөгжил
        </div>
        <div className="product_doc d-flex justify-content-center">
          Yoshinoya-н үүсэл, хөгжил
        </div>
        <div>
          <p>
            Yoshinoya-н үүсэл хөгжил нь тэртээх 1899 (A&W – 1919, White Castle –
            1921, MacDonald – 1940, KFC – 1952, Burger King – 1953) онд буюу
            одоогоос 122 жилийн өмнө Япон улс, Токио хотын хөл хөдөлгөөн ихтэй
            Нихонбаши загасны захаас эхэлсэн.
          </p>
          <p>
            Тухайн үед тэнд маш олон завгүй загасчид ажилладаг байсан бөгөөд
            тэдэнд хурдан хугацаанд амттай, халуун хоол идэх хэрэгцээ шаардлага
            тулгарч байсан. Үүнийг Yoshinoya-н үүсгэн байгуулагч Эйкичи Мацуда
            олж харан тусалж чадна гэдгээ мэдэж байжээ.
          </p>
          <p>
            Тэрээр тухайн үедээ цоо шинэ төрлийн зоогийн газар нээсэн нь: Түргэн
            бөгөөд хямд үнэтэй, амттай Gyudon-г бүтээсэн. Тэрээр ресторанаа
            Ёшинояа гэж нэрлэн одоог хүртэл 122 жилийн турш “Амттай, Хямд,
            Түргэн” гэсэн уриан дор үйл ажиллагаа өргөжүүлэн ажиллаж байна.
          </p>
        </div>
      </Container>
    </Row>
  );
};

export default History;
