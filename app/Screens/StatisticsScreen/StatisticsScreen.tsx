import React, { useState } from 'react';

import MainContainer from '../../TemplateComponents/MainContainer';
import { useSwipe } from '../../CustomHooks/customHooks';
import {
  StatisticsScreenHeader,
  StatisticsChangeSeasonModal,
  StatisticsSidebar,
  StatisticsTable,
} from './StatisticsScreenComponents';
import { useAppContext } from '../../Context/AppContext';

const StatisticsScreen: React.FC = () => {
  const { competitionData, backgroundColor } = useAppContext();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSeasonsModal, setShowSeasonsModal] = useState(false);
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 12);

  function onSwipeLeft() {
    setShowSidebar(false);
    setShowSeasonsModal(false);
  }

  function onSwipeRight() {
    setShowSidebar(true);
    setShowSeasonsModal(false);
  }

  return (
    <MainContainer>
      <StatisticsScreenHeader
        backgroundColor={backgroundColor}
        competitionData={competitionData}
        showSeasonsModal={showSeasonsModal}
        setShowSeasonsModal={setShowSeasonsModal}
        setShowSidebar={setShowSidebar}
      />
      <StatisticsChangeSeasonModal
        backgroundColor={backgroundColor}
        showSeasonsModal={showSeasonsModal}
        setShowSeasonsModal={setShowSeasonsModal}
      />
      <StatisticsSidebar
        backgroundColor={backgroundColor}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <StatisticsTable
        backgroundColor={backgroundColor}
        standings={competitionData?.standings}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      />
    </MainContainer>
  );
};

export default StatisticsScreen;
