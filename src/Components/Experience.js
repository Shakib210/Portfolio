import React from "react";
import { Row, Col } from "react-bootstrap";

const Experience = ({ refe }) => {
  return (
    <div ref={refe} className="mx-5">
      <h3 className="d-flex justify-content-center mt-3">
        <strong>Professional Experience</strong>
      </h3>
      <Row>
        <Col>
          <ul>
            <li>
              {" "}
             <span style={{fontSize:"20px" , fontWeight:"bold"}}>Star IT ltd (Jan-Current):</span>  Currently I’m working on star IT ltd as
              a full stack web developer. Here I’m a member of Node.js developer
              team.There I worked on many projects such as Janani courier service admin dashboard, Radio Baksho CMS, and Bismillah marriage (Running).
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
