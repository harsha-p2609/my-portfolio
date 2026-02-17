import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">HARSHADEEP PEDDIREDDY</span> from <span className="purple">Andhra Pradesh, Tanuku,  India</span>.
            <br />
            I’m a <span className="purple">Full-Stack Developer</span> with experience building web applications using React.js, Node.js, and Spring Boot. I work with SQL databases, REST APIs, and responsive frontend interfaces, focusing on creating scalable and user-friendly applications.
            <br />
            <br />
            I am currently pursuing my B.Tech degree and will be graduating in 2027. I’m passionate about continuously improving my development skills and building impactful real-world projects.
          </p>
          <p style={{ textAlign: "justify" }}>
          
           Outside of coding, I love engaging in activities that keep me creative and inspired:
          </p>
          

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Harsha Deep Peddireddy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
