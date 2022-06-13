import { Button, Nav } from "react-bootstrap";
import Image from "next/image";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Nav>
      <Container className="d-flex justify-content-center">
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav>
            <Image
              src={"/images/Logo.png"}
              height={48}
              width={186}
              alt="yoshinoya"
            />
          </Nav>
          <Nav.Item>
            <Nav.Link className="text-primary" href="/">
              Нүүр хуудас
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-black" eventKey="link-1">
              Бидний тухай
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-black" eventKey="link-2">
              Хоолны цэс
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-black" eventKey="link-3">
              Хөнглөлт, урамшуулал
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-black" eventKey="link-4">
              Салбарууд
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="d-flex align-items-center">
          <Nav.Item>
            <i className="fa-light fa-magnifying-glass"></i>
          </Nav.Item>
          <Button variant="primary" as="input" type="submit" value="submit" />
          {""}
        </Nav>
      </Container>
    </Nav>
  );
};

export default Header;
