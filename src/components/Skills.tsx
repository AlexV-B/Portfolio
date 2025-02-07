import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt 
  } from "react-icons/fa";
  import { 
    SiTypescript, SiRedux, SiTailwindcss, SiVite, SiPostman, SiAxios 
  } from "react-icons/si";
  import "./Skills.css";
  
  const Skills = () => {
    return (
      <div className="skills-container">
        <div className="skills-track">
          <SkillCards />
          {/* Дублируем для бесшовного эффекта */}
          <SkillCards />
        </div>
      </div>
    );
  };
  
  const SkillCards = () => (
    <>
      <div className="skill-card html">
        <FaHtml5 className="icon" />
        <span>HTML</span>
      </div>
      <div className="skill-card css">
        <FaCss3Alt className="icon" />
        <span>CSS</span>
      </div>
      <div className="skill-card js">
        <FaJs className="icon" />
        <span>JavaScript</span>
      </div>
      <div className="skill-card ts">
        <SiTypescript className="icon" />
        <span>TypeScript</span>
      </div>
      <div className="skill-card react">
        <FaReact className="icon" />
        <span>React</span>
      </div>
      <div className="skill-card redux">
        <SiRedux className="icon" />
        <span>Redux</span>
      </div>
      <div className="skill-card tailwind">
        <SiTailwindcss className="icon" />
        <span>Tailwind</span>
      </div>
      <div className="skill-card git">
        <FaGitAlt className="icon" />
        <span>Git</span>
      </div>
      <div className="skill-card vite">
        <SiVite className="icon" />
        <span>Vite</span>
      </div>
      <div className="skill-card postman">
        <SiPostman className="icon" />
        <span>Postman</span>
      </div>
      <div className="skill-card axios">
        <SiAxios className="icon" />
        <span>Axios</span>
      </div>
    </>
  );
  
  export default Skills;
  