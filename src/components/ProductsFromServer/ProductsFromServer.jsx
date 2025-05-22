import categoriesFromServer from '../../api/categories';
import productsFromServer from '../../api/products';
import usersFromServer from '../../api/users';

export const products = productsFromServer.map(product => {
  const category = categoriesFromServer.find(
    cat => cat.id === product.categoryId,
  );
  const user = category
    ? usersFromServer.find(u => u.id === category.ownerId)
    : null;

  return {
    ...product,
    category,
    user,
  };
});
