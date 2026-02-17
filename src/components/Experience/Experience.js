import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";

function Experience() {
  return (
    <>
      {/* ⭐ Background Stars */}
      <Particle />

      <Container fluid className="experience-section">
        <Container>

          <h1 className="project-heading">
            Work <strong className="purple">Experience</strong>
          </h1>

          <Row
            style={{
              justifyContent: "center",
              paddingBottom: "10px",
              marginTop: "20px",
            }}
          >
            {/* Brainovision */}
            <Col md={8} className="project-card" style={{ marginBottom: "20px" }}>
              <ProjectCard
                isBlog={false}
                title={
                  <>
                    <strong className="purple">Brainovision</strong> – Java Full Stack Intern (May 2025 – Aug 2025)
                  </>
                }
                description={
                  <ul className="experience-list">
                    <li>Completed intensive hands-on training in Java Full Stack Development.</li>
                    <li>Developed RESTful backend services using Spring Boot.</li>
                    <li>Built responsive and dynamic user interfaces using React.js.</li>
                    <li>Integrated frontend and backend systems through secure REST API communication.</li>
                    <li>Built and deployed a full-stack Hotel Booking Application as a capstone project.</li>
                    <li>Implemented authentication, booking workflows, and database management.</li>
                  </ul>
                }
              />
            </Col>

            {/* NxtWave */}
            <Col md={8} className="project-card" style={{ marginBottom: "20px" }}>
              <ProjectCard
                isBlog={false}
                title={
                  <>
                    <strong className="purple">NxtWave</strong> – Full Stack Development Trainee (2024 – Present)
                  </>
                }
                description={
                  <ul className="experience-list">
                    <li>Currently enrolled in a structured 4-year intensive training program in Full Stack Development (MERN), Data Structures & Algorithms, and AI/ML.</li>
                    <li>Designed and developed multiple real-world full-stack applications independently using the MERN stack.</li>
                    <li>Strengthened problem-solving skills through consistent DSA practice and algorithmic challenges.</li>
                    <li>Explored Generative AI concepts and built practical AI-driven applications.</li>
                    <li>Implemented scalable frontend and backend architectures following industry best practices.</li>
                  </ul>
                }
              />
            </Col>

          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Experience;
