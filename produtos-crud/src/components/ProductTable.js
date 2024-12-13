import React, { useMemo } from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ products, currentPage, pageSize, onProductDelete }) => {
  const handleDelete = useCallback(
    (productId) => {
      onProductDelete(productId); 
    },
    [onProductDelete] 
  );

  const paginatedProducts = useMemo(() => {
    return products.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  }, [products, currentPage, pageSize]);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {paginatedProducts.map((product) => (
          <ProductRow key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
