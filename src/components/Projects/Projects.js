import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import CryptoPilot from "../../Assets/Projects/CryptoPilot.png";
import MediumC from "../../Assets/Projects/MediumClone.png";
import mole from "../../Assets/Projects/MoleAndHole.png";
import Harvest from "../../Assets/Projects/Harvest.png";
import Chat from "../../Assets/Projects/SmartChat.png";

function Projects() {
  return (
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CryptoPilot}
              isBlog={false}
              title="Crypto Pilot"
              description="Our React-based crypto tracker, powered by JavaScript and the CoinGecko API, provides real-time tracking of over 500 cryptocurrencies, alongside a dashboard displaying data for 10+ digital currencies, boosting user engagement by 40% and retention by 25%. Implemented search functionality allows for easy access to specific cryptocurrency information, offering users a comprehensive and user-friendly platform to navigate the dynamic world of digital assets."
              ghLink="https://github.com/Swayam28/CryptoPilot"
              demoLink="https://cryptopilot-swayam.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MediumC}
              isBlog={false}
              title="Medium Clone"
              description="Our Medium clone, built on the MERN stack (MongoDB, Express.js, React, and Node.js), offers a versatile platform for content creation and consumption. Featuring a sleek and intuitive user interface, our application enables users to seamlessly publish, share, and discover high-quality articles across various topics. With robust user authentication, real-time updates, and personalized recommendation systems, our Medium clone fosters an engaging and immersive reading experience for users while providing content creators with powerful tools to reach their audience effectively."
              ghLink="https://github.com/Swayam28/Medium-Clone"
              demoLink="https://medium-clone-swayam.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mole}
              isBlog={false}
              title="Mole and Hole"
              description="A captivating classic JavaScript game developed with HTML, CSS, and JavaScript, featuring an animated design with multiple holes where a playful mole unpredictably emerges. Players accumulate points by clicking on the mole, with escalating levels of difficulty introducing heightened speed and more frequent mole appearances, offering an engaging challenge for users of all levels."
              ghLink="https://github.com/Swayam28/MoleAndHole"
              demoLink="https://swayam28.github.io/MoleAndHole/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Harvest}
              isBlog={false}
              title="Smart Harvest"
              description="It revolutionizes plant care by offering real-time tracking of crucial environmental factors. Through sensors integrated with the platform, users can monitor humidity, temperature, water levels, and carbon dioxide levels for their plants. This comprehensive tracking system empowers users to optimize their plant care routines, ensuring ideal growing conditions and maximizing harvest yields. With user-friendly interfaces and customizable alerts, the Smart Harvest website simplifies plant care management, making it accessible to both novice and experienced growers."
              
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chat}
              isBlog={false}
              title="Smart Chat"
              description="a groundbreaking platform engineered with the MERN stack (MongoDB, Express, React, and Node.js), designed to elevate your chat experience. Smart Chat harnesses the extensive capabilities of ChatGPT replica, offering a diverse range of services including paragraph composition, summarization, JavaScript code generation, and even the production of sci-fi images. With a focus on security, user login credentials are securely stored in a MongoDB database, ensuring the highest levels of data integrity and confidentiality. Smart Chat sets a new standard for intelligent and secure communication, revolutionizing the way users interact and engage online."
              ghLink="https://github.com/Swayam28/SmartChat"
              demoLink="https://smartchat-swayam.netlify.app/"
                        
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
