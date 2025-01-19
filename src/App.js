import { useState, useEffect } from 'react';
import './App.css';
import ResearcherList from './components/ResearcherList/Researcherlist';
import SearchBar from './components/SearchBar/SearchBar';
import FilterBar from './components/FilterBar/FilterBar';
import { getResearchers } from './firebase/firestore';
import ResearcherForm from './components/ResearcherForm/ResearcherForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [researchers, setResearchers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    field: ''
  });

  const refreshResearchers = async () => {
    const data = await getResearchers();
    setResearchers(data);
  };

  useEffect(() => {
    const fetchResearchers = async () => {
      try {
        const data = await getResearchers();
        setResearchers(data);
      } catch (error) {
        console.error("Error fetching researchers:", error);
      }
    };
    
    fetchResearchers();
  }, []);

  const filteredResearchers = researchers.filter(researcher => {
    // Search filtering
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      researcher.name.toLowerCase().includes(searchLower) ||
      researcher.field.toLowerCase().includes(searchLower) ||
      researcher.description.toLowerCase().includes(searchLower);

    // Filter filtering
    const locationMatch = !filters.location || researcher.location === filters.location;
    const fieldMatch = !filters.field || researcher.field === filters.field;

    return matchesSearch && locationMatch && fieldMatch;
  });

  const handleFilterChange = (filterType, value) => {
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
      <button 
        onClick={() => setShowForm(!showForm)}
        className="toggle-form-btn"
      >
        {showForm ? 'Hide Form' : 'Add New Researcher'}
      </button>
      
      {showForm && <ResearcherForm onAdd={refreshResearchers} />}
      
      <FilterBar 
        researchers={researchers} 
        onFilterChange={handleFilterChange}
      />
      <SearchBar onSearch={setSearchTerm} />
      <ResearcherList researchers={filteredResearchers} />
    </main>
    </div>
  );
}

export default App;