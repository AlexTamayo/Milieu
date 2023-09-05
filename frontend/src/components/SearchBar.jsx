import '../styles/SearchBar.scss';

function SearchBar() {
  return (
    <div className="search-box">
      <form  className="search-box__form" action="">
        <input className="search-box__input"
               type="search"
               name="query"
               placeholder="Search..."
        />
      <button className="search-box__button" > S </button>
      </form>
    </div>
  );
}

export default SearchBar;