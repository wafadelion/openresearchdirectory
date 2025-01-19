import { useState } from 'react';
import './App.css';
import ResearcherList from './components/ResearcherList/Researcherlist';
import SearchBar from './components/SearchBar/SearchBar';  
import FilterBar from './components/FilterBar/FilterBar';

function App() {
  const testResearchers = [
    {
      id: 1,
      name: "Dr. Jane Smith",
      location: "Paris, France",
      field: "Computer Science",
      description: "Specializing in artificial intelligence and machine learning, started working on this for 5 years now, information and work can be find in the website.",
      website: "https://example.com",
      socialMedia: {
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        googleScholar: "https://scholar.google.com/janesmith"
      }
    },
    {
      id: 2,
      name: "Prof. John Brown",
      location: "London, UK",
      field: "Biology",
      description: "Research focused on molecular genetics and DNA sequencing",
      website: "https://example2.com",
      socialMedia: {
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        googleScholar: "https://scholar.google.com/janesmith"
      }
    },
    {
      id: 3,
      name: "Dr. Maria Garcia",
      location: "Barcelona, Spain",
      field: "Physics",
      description: "Working on quantum computing and particle physics",
      website: "https://example3.com",
      socialMedia: {
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        googleScholar: "https://scholar.google.com/janesmith"
      }
    },
    {
      id: 4,
      name: "Dr. Alex Chen",
      location: "London, UK",
      field: "Computer Science",
      description: "Researching cybersecurity and network protocols",
      website: "https://example4.com",
      socialMedia: {
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        googleScholar: "https://scholar.google.com/janesmith"
      }
    },
    {
      id: 5,
      name: "Prof. Sarah Johnson",
      location: "New York, USA",
      field: "Biology",
      description: "Studying cancer biology and immunotherapy",
      website: "https://example5.com",
      socialMedia: {
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        googleScholar: "https://scholar.google.com/janesmith"
      }
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    field: ''
  });

  const filteredResearchers = testResearchers.filter(researcher => {
    // Search filtering
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      researcher.name.toLowerCase().includes(searchLower) ||
      researcher.field.toLowerCase().includes(searchLower) ||
      researcher.description.toLowerCase().includes(searchLower);

    // Filter filtering
    const locationMatch = !filters.location || researcher.location === filters.location;
    const fieldMatch = !filters.field || researcher.field === filters.field;

    // Return true only if both search and filters match
    return matchesSearch && locationMatch && fieldMatch;
  });

  const handleFilterChange = (filterType, value) => {
    console.log('Filter changed:', filterType, value);
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Research Directory</h1>
      </header>
      <main>
        <FilterBar 
          researchers={testResearchers} 
          onFilterChange={handleFilterChange}
        />
        <SearchBar onSearch={setSearchTerm} />
        <ResearcherList researchers={filteredResearchers} />
      </main>
    </div>
  );
}

export default App;