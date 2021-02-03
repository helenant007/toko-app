import React from 'react';
import { cx } from 'emotion';
import { styContainerHeader, styHeading, styPadding } from '../../styles';
import { shopShowcaseData } from '../../mockData';

import { styHoverShowcase } from './styles';

const Showcase = () => (
  <div className={styContainerHeader}>
    <div className={styHeading(16)}>
      Etalase Toko (
      {shopShowcaseData.length}
      )
    </div>
    {
      shopShowcaseData.map((showcase, idx) => (
        <div className={cx(styPadding('3px 5px'), styHoverShowcase)} key={idx}>
          {showcase}
        </div>
      ))
    }
  </div>
);

export default Showcase;
