import leftIcon from '../assets/img/caret-left-solid.svg';
import rightIcon from '../assets/img/caret-right-solid.svg';
import { useEffect, useState } from 'react';
import './ProjectStep.css';

const allSteps = import.meta.glob('../projects/*/Part*.jsx');

const ProjectStep = ({ projectId, stepIndex, setStepIndex }) => {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const stepEntries = Object.entries(allSteps)
      .filter(([path]) => path.includes(`/projects/${projectId}/Part`))
      .sort((a, b) => {
        const aNum = parseInt(a[0].match(/Part(\d+)\.jsx$/)[1], 10);
        const bNum = parseInt(b[0].match(/Part(\d+)\.jsx$/)[1], 10);
        return aNum - bNum;
      });

    Promise.all(stepEntries.map(([path, loader]) => loader().then(mod => mod.default)))
      .then((modules) => {
        setSteps(modules);
        setLoading(false);
        setStepIndex(idx => Math.min(idx, modules.length - 1));
      });
  }, [projectId]);

  if (loading) return <div>Loading...</div>;
  if (!steps.length) return <div>No steps found.</div>;

  const StepComponent = steps[stepIndex];

  return (
    <div className="project-step-wrapper">
      <div className="project-step">
        <div className="step-content">
          {StepComponent ? <StepComponent /> : <div>No more steps.</div>}
        </div>
      </div>

      <div className="step-navigation">
        <button
          onClick={() => setStepIndex(i => Math.max(i - 1, 0))}
          disabled={stepIndex === 0}
          aria-label="Previous step"
        >
          <img src={leftIcon} alt="Previous" />
        </button>
        <button
          onClick={() => setStepIndex(i => Math.min(i + 1, steps.length - 1))}
          disabled={stepIndex === steps.length - 1}
          aria-label="Next step"
        >
          <img src={rightIcon} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default ProjectStep;
