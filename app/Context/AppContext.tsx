import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { getCompetitionsList, getCompetitionsTable } from '../Api/StatisticsApi';
import { processCompetitionsList } from '../Helpers/appContextHelpers';
import { colorScheme } from '../../config';

// Define the context type
interface AppContextType {
  activeTab: number;
  isLoading: boolean;
  backgroundColor: string;
  competitionData: any;
  sortedCompetitionsList: any;
  competitionSeason: any;
  setCompetitionSeason: (season: any) => void;
  setActiveTab: (tab: number) => void;
  competitionsName: string;
  setCompetitionsName: (name: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState<string>(colorScheme[activeTab]);
  const [competitionData, setCompetitionData] = useState<any | null>(null);
  const [competitionSeason, setCompetitionSeason] = useState<any | null>(null);
  const [competitionsList, setCompetitionsList] = useState<any | null>(null);
  const [sortedCompetitionsList, setSortedCompetitionsList] = useState<any | null>(null);
  const [competitionsName, setCompetitionsName] = useState<string>('PL');

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await getCompetitionsTable({
          competitionsName: competitionsName,
          competitionSeason: competitionSeason,
        });
        setCompetitionData(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 30);
      } catch (error) {
        console.error('Error fetching competition data:', error);
      }
    };

    fetchData();
  }, [competitionsName, competitionSeason]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCompetitionsList();
        setCompetitionsList(data);
      } catch (error) {
        console.error('Error fetching competitions list:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!competitionsList) return;
    setSortedCompetitionsList(processCompetitionsList(competitionsList));
  }, [competitionsList]);

  useEffect(() => {
    setBackgroundColor(colorScheme[activeTab]);
  }, [activeTab]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        backgroundColor,
        competitionData,
        sortedCompetitionsList,
        competitionSeason,
        setCompetitionSeason,
        activeTab,
        setActiveTab,
        competitionsName,
        setCompetitionsName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
