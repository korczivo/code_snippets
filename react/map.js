import React from 'react';

export const ProductComponent = ({products}) => {
  return products.map(product => {
    return (
      <div className="product" key={product.id}>
        <div className="p-name">{product.name}</div>
        <div className="p-desc">{product.description}</div>
      </div>
    );
  });
};
