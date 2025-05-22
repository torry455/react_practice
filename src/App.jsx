import './App.scss';
import { useState } from 'react';

import { FiltersPanel } from './components/FiltersPanel/FiltersPanel';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ProductList } from './components/ProductList/ProductList';

import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';
import usersFromServer from './api/users';

export const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [query, setQuery] = useState('');

  const handleToggleCategory = categoryId => {
    if (categoryId === null) {
      setSelectedCategories([]);
      setSelectedUserId(null);
      setQuery('');

      return;
    }

    setSelectedCategories(prevSelected => {
      if (prevSelected.includes(categoryId)) {
        return prevSelected.filter(id => id !== categoryId);
      }

      return [...prevSelected, categoryId];
    });
  };

  const filteredProducts = productsFromServer.filter(product => {
    const matchesUser = selectedUserId
      ? product.user?.id === selectedUserId
      : true;

    const matchesCategory =
      selectedCategories.length > 0
        ? selectedCategories.includes(product.categoryId)
        : true;

    const matchesQuery = product.name
      ?.toLowerCase()
      .includes(query.toLowerCase());

    return matchesUser && matchesCategory && matchesQuery;
  });

  return (
    <div className="App">
      <FiltersPanel
        categoriesArray={categoriesFromServer}
        selectedCategoriesArray={selectedCategories}
        handleToggleCategory={handleToggleCategory}
        users={usersFromServer}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
      />
      <SearchBar query={query} onQueryChange={setQuery} />
      <ProductList products={filteredProducts} />
    </div>
  );
};
