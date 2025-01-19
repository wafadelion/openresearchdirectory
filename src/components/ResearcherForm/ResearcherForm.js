import React, { useState } from 'react';
import { addResearcher } from '../../firebase/firestore';
import './ResearcherForm.css';

const ResearcherForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    field: '',
    description: '',
    website: '',
    socialMedia: {
      linkedin: '',
      twitter: '',
      googleScholar: ''
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addResearcher(formData);
      setFormData({
        name: '',
        location: '',
        field: '',
        description: '',
        website: '',
        socialMedia: {
          linkedin: '',
          twitter: '',
          googleScholar: ''
        }
      });
      if (onAdd) onAdd();
    } catch (error) {
      console.error("Error adding researcher:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('social-')) {
      const social = name.split('-')[1];
      setFormData(prev => ({
        ...prev,
        socialMedia: {
          ...prev.socialMedia,
          [social]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="researcher-form">
      <h2>Add New Researcher</h2>
      
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Field:</label>
        <input
          type="text"
          name="field"
          value={formData.field}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Website:</label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>LinkedIn:</label>
        <input
          type="url"
          name="social-linkedin"
          value={formData.socialMedia.linkedin}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Twitter:</label>
        <input
          type="url"
          name="social-twitter"
          value={formData.socialMedia.twitter}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Google Scholar:</label>
        <input
          type="url"
          name="social-googleScholar"
          value={formData.socialMedia.googleScholar}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submit-btn">Add Researcher</button>
    </form>
  );
};

export default ResearcherForm;