import {Button, Nav} from "react-bootstrap";
import Image from "next/image"
import {FiSearch} from "react-icons/fi"
import Container from "react-bootstrap/Container";


const Header = () =>{
  return(
    <Container>
      <Nav
activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
  <Nav>
   <Image src={"/images/Logo.png"} height={48} width={186} alt="yoshinoya"/>
  </Nav>
  <Nav.Item>
    <Nav.Link  href="/home">Нүүр хуудас</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Бидний тухай</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Хоолны цэс</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">Хөнглөлт, урамшуулал</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-4">Салбарууд</Nav.Link>
  </Nav.Item>
  <Nav.Item>
      <FiSearch/>
  </Nav.Item>
  <Button className="mb-2" variant="primary" as='input' type='submit' value='submit'/>{''}
</Nav>
</Container>
  );
}

export default Header