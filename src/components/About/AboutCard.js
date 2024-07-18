import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Swayam Pati </span>
             from <span className="purple"> Faridabad, India.</span>
            <br />
            
           
            I graduated with Bachelor of Engineering in Computer Science in 2024.
            
            <br />
            I am passionate about learning and exploring new technologies to further my understanding of the field.
            <br />
            <br />
            Apart from coder, am a
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Stock Market Trader
            </li>
            <li className="about-activity">
              <ImPointRight /> Co-Founder At BeyondGifts
            </li>
            <li className="about-activity">
              <ImPointRight /> Visual Content Creator
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " Make every day count! "{" "}
          </p>
          <footer className="blockquote-footer">Swayam Pati</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
