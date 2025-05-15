import { useState, useEffect } from 'react';
import ProjectStep from './ProjectStep';
import './Project.css';

const Project = ({ projectId }) => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    setStepIndex(0);
  }, [projectId]);

  return (
    <div className="project-component">
      <ProjectStep
        projectId={projectId}
        stepIndex={stepIndex}
        setStepIndex={setStepIndex}
      />
    </div>
  );
};

export default Project;