import React from 'react';
import './FilterBar.css';

const FilterBar = ({ researchers, onFilterChange }) => {
  // Get unique locations and fields from researchers
  const locations = [...new Set(researchers.map(r => r.location))];
  const fields = [...new Set(researchers.map(r => r.field))];

  return (
    <div className="filter-bar">
      <select 
        onChange={(e) => onFilterChange('location', e.target.value)}
        className="filter-select"
      >
        <option value="">All Locations</option>
        {locations.map(location => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>

      <select 
        onChange={(e) => onFilterChange('field', e.target.value)}
        className="filter-select"
      >
        <option value="">All Fields</option>
        {fields.map(field => (
          <option key={field} value={field}>
            {field}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;