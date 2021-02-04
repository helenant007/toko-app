import React from 'react';
import { shopShowcaseData } from '../../mockData';

const Showcase = () => (
  <div>
    <div>
      Etalase Toko
    </div>
    {
      shopShowcaseData.map((showcase, idx) => (
        <div key={idx}>
          {showcase}
        </div>
      ))
    }
  </div>
);

export default Showcase;
