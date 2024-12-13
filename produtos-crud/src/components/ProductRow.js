import React, { useCallback } from 'react';

const ProductRow = React.memo(({ product, onDelete }) => {
  const handleDelete = useCallback(() => {
    onDelete(product.id); 
  }, [onDelete, product.id]);

  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.nome}</td>
      <td>{product.preco.toFixed(2)}</td>
      <td>{product.descricao}</td>
      <td>
        <button onClick={handleDelete}>Deletar</button>
      </td>
    </tr>
  );
});

export default ProductRow;
