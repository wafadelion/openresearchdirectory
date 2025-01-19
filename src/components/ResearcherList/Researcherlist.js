import React from 'react';
import ResearcherCard from '../ResearcherCard/ResearcherCard';
import './Researcherlist.css';

const ResearcherList = ({ researchers }) => {  // Add this prop here
  return (
    <div className="researcher-list">
      {researchers.map(researcher => (
        <ResearcherCard key={researcher.id} researcher={researcher} />
      ))}
    </div>
  );
};

export default ResearcherList;