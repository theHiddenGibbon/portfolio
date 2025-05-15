import styleGuide from '../../assets/project-files/style-guide.png';
import mobPrototype from '../../assets/project-files/mobile-prototype.png';
import mobWireframe from '../../assets/project-files/mobile-wireframe.png';
import siteWireframe from '../../assets/project-files/site-wireframe.png';

const Part2 = () => (
 <section>
    <h3>Wireframing</h3>
    <p>
      I created low-fidelity wireframes in Figma to explore layout options and user flows. These were informed by both user needs and business goals, balancing usability with business requirements.
    </p>
    <p>Visuals: Mobile wireframes</p>
    <img src={mobWireframe} alt="Mobile Site Wireframe" className="project-image" />

    <h3>Design System Thinking & Prototyping</h3>
    <p>
      Using the restaurant’s brand guidelines, I developed a style guide and identified reusable design components. These were added to a component library in Figma.
    </p>
    <p>I then created high-fidelity prototypes, ensuring:</p>
    <ul>
      <li>Visual and interactive consistency</li>
      <li>Accessibility</li>
      <li>Responsive design for both desktop and mobile</li>
    </ul>
    <p>Visuals: Style guide, components, high-fidelity prototypes, final layouts</p>
    <img src={styleGuide} alt="Style Guide and Site Layout" className="project-image" />
    <img src={mobPrototype} alt="Mobile Prototype" className="project-image" />
  </section>
);

export default Part2;
