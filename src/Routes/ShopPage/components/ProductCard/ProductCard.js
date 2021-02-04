import React from 'react';

const ProductCard = ({ data }) => {
  const {
    img, title, price, rating, reviews,
  } = data;

  return (
    <div>
      <img src={img} alt={title} />
      <div>
        <div>{title}</div>
        <div>{price}</div>
        <div>
          <div>
            {rating}
          </div>
          <div>
            (
            {reviews}
            )
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
