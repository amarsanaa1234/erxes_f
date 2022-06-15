import { Button, Nav, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Header = () => {
  return (
    <header className="position-fixed p-4">
      <Container>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          className="justify-content-between"
        >
          <Nav>
            <div>
              <Image
                src={"/images/Logo.png"}
                height={48}
                width={186}
                alt="yoshinoya"
              />
            </div>
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
          <Nav className="d-flex align-items-center justify-content-evenly w-25 h-25">
            <Nav.Item>
              <i className="fa-light fa-magnifying-glass fs-3"></i>
            </Nav.Item>
            <Button variant="primary" as="input" type="submit" value="submit" />
          </Nav>
        </Nav>
      </Container>
    </header>
  );
};

export default Header;
