import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import jobby from "../../Assets/Projects/jobby.png";
import nxtrendz from "../../Assets/Projects/nxtrendz.png";
import nxtwatch from "../../Assets/Projects/nxtwatch.jpg";


function Projects() {
  return (
    <>
      <Container fluid className="project-section">
        <Particle />
        <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>npm
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    <Col md={4} className="project-card">
  <ProjectCard 
    imgPath={jobby}
    isBlog={false}
    title={
  <span className="purple auto-underline mb-3" style={{ fontWeight:"700" , fontSize: "1.6rem" }}>
    Jobby App
  </span>
}


    description={
      <>
        <p><strong>Demo Credentials:</strong> username: rahul | password: rahul@2021</p>
        <ul>
          <li>Developed a comprehensive job search platform with Login, Home, Jobs, and Job Details pages.</li>
          <li>Implemented protected routes and persistent login using React Router and LocalStorage.</li>
          <li>Secured user data with JWT authentication and REST API integration.</li>
          <li>Built reusable React components for scalable architecture.</li>
          <li>Used React JS, CSS, Routing, REST APIs, and JWT for seamless functionality.</li>
        </ul>
      </>
    }
 
    demoLink="https://hdjobbyapp.ccbp.tech/"
  />
</Col>


          {/* Removed blog project as requested */}
<Col md={4} className="project-card">
  <ProjectCard
   imgPath={nxtrendz}
    isBlog={false}
    title={
  <span className="purple auto-underline mb-3" style={{ fontWeight:"700" , fontSize: "1.6rem" }}>
   NxtTrendz
  </span>
}


    
    description={
      <>
        <p><strong>Demo Credentials:</strong> username: rahul | password: rahul@2021</p>
        <ul>
          <li>Developed a full-featured e-commerce platform inspired by Amazon and Flipkart.</li>
          <li>Implemented secure authentication and authorization using JWT tokens and REST APIs.</li>
          <li>Utilized React Context API for efficient global state management.</li>
          <li>Built dynamic features like filters, prime deals, and add-to-cart functionality.</li>
          <li>Ensured responsive UI across devices using React and CSS.</li>
        </ul>
      </>
    }
    demoLink="https://hdecommerce.ccbp.tech/"
  />
</Col>


<Col md={4} className="project-card">
  <ProjectCard
   imgPath={nxtwatch}
    isBlog={false}
        title={
  <span className="purple mb-3 auto-underline" style={{ fontWeight:"700" , fontSize: "1.6rem" }}>
   NxtWatch
  </span>
}
    description={
      <>
        <p><strong>Demo Credentials:</strong> username: rahul | password: rahul@2021</p>
        <ul>
          <li>Developed a video streaming platform with Home, Trending, Gaming, & Saved Videos sections.</li>
          <li>Implemented secure authentication and authorization using JWT tokens and REST APIs.</li>
          <li>Built Dark Mode and Light Mode themes for enhanced user experience.</li>
          <li>Used React Context API for global state management.</li>
          <li>Developed scalable architecture using React JS, Router, Context API, and LocalStorage.</li>
        </ul>
      </>
    }
    
    demoLink="https://nxtwatch.ccbp.tech/login"
  />
  </Col>
        </Row>
        </Container>
      </Container>

    </>
  );
}

export default Projects;
