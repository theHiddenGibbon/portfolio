import Project from '../components/Project';
import './Work.css';

const Work = () => (
  <section className="work-section" id="work">
    {/* <h2>My Work</h2> */}
    <Project projectId="little-lemon" />
  </section>
);

export default Work;

// import { useState } from 'react';
// import Project from '../components/Project';
// import './Work.css';

// const projects = [
//   { id: 'little-lemon', name: 'Little Lemon' },
//   { id: 'project-two', name: 'Project Two' },
// ];

// const Work = () => {
//   const [expandedProject, setExpandedProject] = useState(null);

//   const handleToggle = (projectId) => {
//     setExpandedProject(prev => (prev === projectId ? null : projectId));
//   };

//   return (
//     <section className="work-section" id="work">
//       <h2>My Work</h2>
//       <ul>
//       {projects.map((project) => (
//         <li key={project.id}>
//           <div onClick={() => handleToggle(project.id)}>
//             {project.name}
//           </div>
//           {expandedProject === project.id && (
//             <Project projectId={project.id} />
//           )}
//         </li>
//       ))}
//     </ul>
//     </section>
//   );
// };

// export default Work;