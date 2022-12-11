import React from 'react';
import { TOTAL_SCREENS } from '../utilities/commonUtils';

function PortfolioContainer() {

  const mapAllscreens = () => {
    return (
      TOTAL_SCREENS.map((el) => {
        (el.component) ? <el.component screenName={el.screen_name} key={el.screen_name}
      })
    )

  }

  return (
    <div>

    </div>
  );
}

export default PortfolioContainer;