import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Full Stack Developer with practical experience in
              developing web applications using <b className="purple">React.js</b>,
              <b className="purple"> Node.js</b>, and <b className="purple">Spring Boot</b>.
              I focus on building efficient frontends and robust backend logic,
              and I work regularly with SQL databases for structured data
              management.
              <br />
              <br />
              <b className="purple">Technical Skills:</b> HTML, CSS, Tailwind,
              Bootstrap, JavaScript, React.js, Express.js, Node.js, SpringBoot,
              SQLite, MySQL.
              <br />
              <br />
              I enjoy solving algorithmic problems, collaborating on team
              projects, and learning new technologies to improve product
              quality and performance.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
