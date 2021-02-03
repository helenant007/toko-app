import React from 'react';

import star from '../assets/star.svg';
import {
  styCardShadow, styImgRadius, styCardInfo, styHidden,
} from './styles';
import { styFlex } from '../../styles';

const ProductCard = ({ data }) => {
  const {
    img, title, price, rating, reviews,
  } = data;

  return (
    <div className={styCardShadow}>
      <img className={styImgRadius} src={img} alt={title} />
      <div className={styCardInfo}>
        <div>{title}</div>
        <div>{price}</div>
        <div className={styFlex}>
          <div>
            {
            Array.from(Array(rating)).map(() => (
              <img src={star} />
            ))
}
          </div>
          <div className={reviews === 0 && styHidden}>
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
