import React from 'react';
import ProgrammingLanguage from './ProgrammingLanguage.jsx';
import Tool from './Tool.jsx';
import DataAnalysis from './DataAnalysis.jsx';
import Fullstack from './Fullstack.jsx';

const SkillButtons = ({ skill }) => {
  if (skill === "prolang") {
    return <ProgrammingLanguage />;
  } else if (skill === "tool") {
    return <Tool />;
  } else if (skill === "danal") {
    return <DataAnalysis />;
  } else if (skill === "fullstack") {
    return <Fullstack />;
  } else {
    return <ProgrammingLanguage />;
  }
};

export default SkillButtons;
