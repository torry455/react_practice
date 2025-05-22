export const CategoryBtn = ({
  categories = [],
  selectedCategories = [],
  onToggleCategory,
}) => {
  return (
    <div className="buttons">
      <button
        type="button"
        className={`button ${selectedCategories.length === 0 ? '' : 'is-outlined'}`}
        onClick={() => onToggleCategory(null)}
      >
        All
      </button>
      {categories.map(cat => (
        <button
          type="button"
          key={cat.id}
          className={`button ${selectedCategories.includes(cat.id) ? 'is-info' : ''}`}
          onClick={() => onToggleCategory(cat.id)}
        >
          <img src={cat.icon} alt="" width="20" /> {cat.name}
        </button>
      ))}
    </div>
  );
};
