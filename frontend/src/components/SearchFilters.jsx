import '../styles/SearchFilters.scss';

function SearchFilters() {


  return (
    <div className="search-filters">
      <button className="filter filter--businesses">
        Businesses
      </button>
      <button className="filter filter--events">
        Events
      </button>
      <button className="filter filter--test">
        Test 1
      </button>
      <button className="filter filter--test2">
        Test 2
      </button>
    </div>
  );
}

export default SearchFilters;


