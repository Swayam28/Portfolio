import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  
  SiExpress,
  SiMysql
} from "react-icons/si";
import { VscSourceControl } from "react-icons/vsc";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h3>Java</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h3>CPP</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <VscSourceControl />
        <h3>DSA</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h3>JavaScript</h3>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h3>NodeJS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h3>ExpressJS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h3>ReactJS</h3>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h3>MongoDB</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h3>MySQL</h3>
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h3>Git</h3>
      </Col>
      
      
      
      
    </Row>
  );
}

export default Techstack;
