import React from "react";
import './ImportantLink.css'


// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
// import Card  from 'react-bootstrap'Card;

import Nav from 'react-bootstrap/Nav';
import { Col, Container, Row, Card } from 'react-bootstrap';

const ImportantLink = (props) => {
  return (
    <>
      {/* important links  */}

      <Card.Body className="important-links ps-5 pe-5">
        <Container>
          {/* <div class="row g-0 container pb-4"> */}
          <Row className="pb-4 g-0">
            {/* <div class="col "> */}
            <Col>
              {/* <div class="container"> */}

              <Card.Body className="px-0 pb-4 pt-5">
                <Card.Title className="text-white ">
                  {props.monoMetro.MonMetroHeading}
                </Card.Title>
              </Card.Body>
              <Row className="text-white d-flex flex-column ">
                <Col className="">
                  <Nav.Link className="text-white p-0" href="/">
                    {props.monoMetro.OnlineGrocery}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.monoMetro.OnlineGrocery}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.monoMetro.Coupons}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.monoMetro.RecipesAndOccasions}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.monoMetro.ProductsToDiscover}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.monoMetro.Metromoi}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.monoMetro.JustForMe}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.monoMetro.MetroPriority}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.monoMetro.Cornershop}
                  </Nav.Link>
                </Col>
              </Row>

              {/* </div> */}
            </Col>
            <Col>
              <Card.Body className="ps-0 pb-4 pt-5">
                <Card.Title className="text-white ">
                  {props.whatWeOffer.heading}
                </Card.Title>
              </Card.Body>
              <Row className="text-white d-flex flex-column justify-content-center ">
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.whatWeOffer.OnlineGrocery}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.whatWeOffer.OurPrivateBrands}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.whatWeOffer.OurPartners}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.whatWeOffer.ervices}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.whatWeOffer.ProductsToDiscover}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.whatWeOffer.GiftCard}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.whatWeOffer.Contests}
                  </Nav.Link>
                </Col>
              </Row>
            </Col>
            <Col>
              <Card.Body className="ps-0 pb-4 pt-5">
                <Card.Title className="text-white">
                  {props.knowUs.heading}
                </Card.Title>
              </Card.Body>
              <Col class="text-white d-flex flex-column justify-content-center ">
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.knowUs.site}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.knowUs.relation}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.knowUs.AboutUs}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.knowUs.MetroGreen}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.knowUs.Responsibility}
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className="text-white p-0" href="/">
                    {props.knowUs.Careers}
                  </Nav.Link>
                </Col>
              </Col>
            </Col>
          </Row>
          {/* </div> */}
        </Container>
      </Card.Body>
    </>
  );
};

export default ImportantLink;
