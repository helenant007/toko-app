import React from 'react';
import { cx } from 'emotion';
import ProductCard from '../ProductCard';

import { shopProductData } from '../../mockData';
import { styFlex, styPadding } from '../../styles';
import { styContainerGrid } from './styles';

const ProductList = () => (
  <div className={styPadding('20px')}>
    <div className={cx(styFlex)}>
      <input type="search" placeholder="Cari Produk di Toko ini" style={{ width: '200px', margin: '0 0 15px 0' }} />
    </div>
    <div className={styContainerGrid}>
      {
            shopProductData.map((product) => <ProductCard data={product} />)
          }
    </div>
  </div>
);

export default ProductList;
