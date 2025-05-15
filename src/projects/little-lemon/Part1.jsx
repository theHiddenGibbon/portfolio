import journeyMap from '../../assets/project-files/journey-map.png';
import persona from '../../assets/project-files/persona.png';

const Part1 = () => (
  <section>
    <h3>Problem Statement</h3>
    <p>
      Little Lemon needed a digital platform that allowed users to easily reserve tables online while meeting modern UI/UX standards. The solution had to be:
    </p>
    <ul>
      <li>Responsive for use across devices</li>
      <li>Accessible for all users, including those with assistive needs</li>
      <li>Scalable, with a reusable component structure to support future enhancements</li>
    </ul>

    <h3>Research & UX Planning</h3>
    <p>
      I started with customer feedback to understand pain points: users wanted quicker reservations,
      better mobile usability, and a cleaner interface.
    </p>
    <p>To guide my design decisions, I created:</p>
    <ul>
      <li>User personas based on typical customer demographics</li>
      <li>User journey maps to highlight the critical points of frustration and opportunity</li>
    </ul>
    <p>Visuals: User persona and journey map examples</p>
    <img src={journeyMap} alt="Journey Map" className="project-image" />
    <img src={persona} alt="User Persona" className="project-image" />
  </section>
);

export default Part1;
