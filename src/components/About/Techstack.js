import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import html5 from "../../Assets/TechIcons/html5.svg"; 
import css3 from "../../Assets/TechIcons/css3.svg";
import bootstrap from "../../Assets/TechIcons/bootstrap.svg";
import CPP from "../../Assets/TechIcons/C++.svg";
import express from "../../Assets/TechIcons/express.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import SQL from "../../Assets/TechIcons/SQL.svg"; 
import Java from "../../Assets/TechIcons/Java.svg"; 
import spring from "../../Assets/TechIcons/spring.svg"
import Postman from "../../Assets/TechIcons/Postman.svg"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={html5} alt="html5" className="icon-logo"/>
        <div className="tech-icons-text">HTML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={css3} alt="css3" className="icon-logo"/>
        <div className="tech-icons-text">CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={bootstrap} alt="bootstrap" className="icon-logo"/>
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={express} alt="express" className="icon-logo"/>
        <div className="tech-icons-text">Express.js</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQLite" />
        <div className="tech-icons-text">SQLite</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={CPP} fontSize={"24px"} alt="cpp"/>
        <div className="tech-icons-text">C++</div>
      </Col> 

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} fontSize={"24px"} alt="Java"/>
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={spring} fontSize={"24px"} className="icon-logo" alt="spring boot"/>
        <div className="tech-icons-text">spring boot</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} fontSize={"24px"} alt={Postman}/>
        <div className="tech-icons-text">Postman</div>
      </Col>

    </Row>
  );
}

export default Techstack;