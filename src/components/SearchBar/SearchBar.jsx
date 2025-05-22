export const SearchBar = ({ query, onQueryChange, searchQuery }) => {
  return (
    <div className="panel-block">
      <div className="control has-icons-left has-icons-right">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <input
          value={query}
          type="text"
          id="search-query"
          className="input"
          placeholder="Search products"
          onChange={event => {
            onQueryChange(event.target.value);
          }}
        />
      </div>
      {searchQuery && (
        <button
          type="button"
          className="icon is-left"
          onClick={() => onQueryChange('')}
          aria-label="Clear search"
        >
          <i className="fas fa-search" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};
