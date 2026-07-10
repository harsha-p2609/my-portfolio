import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import jobby from "../../Assets/Projects/jobby.png";
import nxtrendz from "../../Assets/Projects/nxtrendz.png";
import nxtwatch from "../../Assets/Projects/nxtwatch.jpg";

import chatapp from "../../Assets/Projects/chatapp.png";
import aiplanner from "../../Assets/Projects/aiPlanner.png"



function Projects() {
  return (
    <>
      <Container fluid className="project-section">
        <Particle />
        <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>



{/* AI-Powered Travel Planner SaaS */}

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={aiplanner}
    isBlog={false}
    title={
      <span
        className="purple auto-underline mb-3"
        style={{ fontWeight: "700", fontSize: "1.6rem" }}
      >
        AI-Powered Travel Planner SaaS
      </span>
    }
    description={
      <>
        <ul>
          <li>
            Built a full-stack SaaS application that generates personalized
            travel itineraries based on destination, trip duration, budget, and
            traveler preferences.
          </li>
          <li>
            Designed and developed RESTful APIs for trip creation, itinerary
            management, weather forecasting, hotel recommendations, and
            AI-powered travel assistance.
          </li>
          <li>
            Implemented JWT authentication, Google OAuth login, and
            user-specific data isolation using MongoDB for secure access
            control.
          </li>
          <li>
            Developed analytics dashboards, budget tracking, packing checklist
            management, PDF export, and public itinerary sharing features.
          </li>
        </ul>
      </>
    }
    demoLink="https://trao-ai-travel-planner.vercel.app/"
  />
</Col>




<Col md={4} className="project-card">
  <ProjectCard 
    imgPath={chatapp}
    isBlog={false}
    title={
      <span className="purple auto-underline mb-3" style={{ fontWeight:"700", fontSize: "1.6rem" }}>
        Real-Time Chat Application
      </span>
    }

    description={
      <>
        <ul>
          <li>Developed a full-stack real-time chat app with public/private messaging, typing indicators, and read receipts.</li>
          <li>Implemented JWT authentication with protected REST APIs and secure Socket.io validation.</li>
          <li>Built live messaging features including message editing, deletion, notifications, and user status tracking.</li>
          <li>Designed an optimized SQLite database with pagination, soft deletes, and efficient indexed queries.</li>
          <li>Built a responsive frontend using React Context API for efficient state management.</li>
        </ul>
      </>
    }

    demoLink="https://chatapp-alpha-peach.vercel.app/login"
  />
</Col>

{/* jobby */}


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
 
    demoLink="https://hdjobby.ccbp.tech/"
  />
</Col>


{/* nxtrendz */}


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




{/* nxtwatch */}

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
    
    demoLink="https://hdnxtwatch.ccbp.tech/"
  />
  </Col>



        </Row>
        </Container>
      </Container>

    </>
  );
}

export default Projects;