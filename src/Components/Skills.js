import React from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";

const Skills = (props) => {
  return (
    <div className="skill" ref={props.refe} style={{ color: "white" }}>
      <div className="container">
        <h1 className="pt-4">Skills</h1>
        <Row className="pb-5">
          <Col md={3} className="mt-3 mb-4">
            <h3>Os Platforms</h3>
            <ul>
              <li>Windows</li>
              <li>Linux</li>
            </ul>
          </Col>

          <Col md={3} className="mt-3">
            <h3>Languages</h3>
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>C</li>
              <li>Java</li>
            </ul>
          </Col>

          <Col md={3} className="mt-3">
            <h3>Frameworks</h3>
            <ul>
              <li>React Js</li>
              <li>Express js</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>Chakra UI</li>
            </ul>
          </Col>

          <Col md={3} className="mt-3">
            <h3>Databases</h3>
            <ul>
            <li>Mongo DB</li>
              <li>MySQL</li>
              <li>Firebase</li>
              <li>SQLite</li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Skills;
