import React from "react";
import "./skills.css";
import { SkillsData } from "./SkillsData";

const Skills = () => {
  return (
    <>
      <div className="skills container section" id="skills">
        <div className="container">
          {/* <p className="heading-sub-text">What I work with</p> */}
          <h2 className="section__title">My Skills</h2>

          <div className="skills-box">
            {SkillsData.map((el, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">{el.icon}</div>
                <small className="skill-desc">{el.name}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
