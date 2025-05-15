import htmlIcon from '../assets/img/html5-brands.svg';
import cssIcon from '../assets/img/css3-brands.svg';
import jsIcon from '../assets/img/js-brands.svg';
import reactIcon from '../assets/img/react-brands.svg';
import figmaIcon from '../assets/img/figma-brands.svg';
import graduationIcon from '../assets/img/graduation-cap-solid.svg';
import locationIcon from '../assets/img/location-dot-solid.svg';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <div className="bento-grid">
        <div className="bento-box bento-box--wide">
          My passion for design is driven by a desire to fix frustrating user experiences.
        </div>
        <div className="bento-box bento-box--big">
          <div className="bento-inner-grid">
            <div><img src={htmlIcon} alt="HTML" className="bento-icon" />HTML</div>
            <div><img src={cssIcon} alt="CSS" className="bento-icon" />CSS</div>
            <div><img src={jsIcon} alt="JavaScript" className="bento-icon" />JavaScript</div>
            <div><img src={reactIcon} alt="React" className="bento-icon" />React</div>
          </div>
        </div>
        <div className="bento-box">
          <img src={figmaIcon}  alt="Figma" className="bento-icon" />Figma
        </div>
        <div className="bento-box">
          <img  src={locationIcon} alt="Location" className="bento-icon" />
          Málaga,<br/>
          Spain
        </div>
        <div className="bento-box bento-box--wide">
          15 years experience working in IT & Finance, but now being drawn to creative fields. I spent the last 3 years studying areas such as Front End Development, UI/UX Design, Graphic Design.
        </div>
        <div className="bento-box">
          <img src={graduationIcon} alt="Computer Science Degree" className="bento-icon" />
          BSc Computer Science,<br/>
          University of Birmingham
        </div>
      </div>
    </section>
  );
};

export default About;