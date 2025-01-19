// src/components/ResearcherCard/ResearcherCard.js
import React, { useState } from 'react';
import { Globe, Linkedin, Twitter, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react'; // Add icons
import './ResearcherCard.css';

const ResearcherCard = ({ researcher }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="researcher-card">
      <h2 className="researcher-name">{researcher.name}</h2>
      <p className="researcher-location">{researcher.location}</p>
      <p className="researcher-field">{researcher.field}</p>
      
      <div className={`researcher-description ${isExpanded ? 'expanded' : ''}`}>
        <p>
          {isExpanded 
            ? researcher.description 
            : `${researcher.description.slice(0, 100)}...`}
        </p>
        <button 
          onClick={toggleDescription}
          className="show-more-btn"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp size={16} />
            </>
          ) : (
            <>
              Show More <ChevronDown size={16} />
            </>
          )}
        </button>
      </div>

      <div className="researcher-links">
        <a href={researcher.website} className="social-link" target="_blank" rel="noopener noreferrer">
          <Globe size={18} />
          <span>Website</span>
        </a>
        {researcher.socialMedia && (
          <>
            {researcher.socialMedia.linkedin && (
              <a href={researcher.socialMedia.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            )}
            {researcher.socialMedia.twitter && (
              <a href={researcher.socialMedia.twitter} className="social-link" target="_blank" rel="noopener noreferrer">
                <Twitter size={18} />
                <span>Twitter</span>
              </a>
            )}
            {researcher.socialMedia.googleScholar && (
              <a href={researcher.socialMedia.googleScholar} className="social-link" target="_blank" rel="noopener noreferrer">
                <GraduationCap size={18} />
                <span>Scholar</span>
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ResearcherCard;