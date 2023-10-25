interface Competition {
  id: string;
  emblem: string;
  name: string;
  code: string;
  numberOfAvailableSeasons: number;
}

interface CompetitionsList {
  competitions: Competition[];
}

export const processCompetitionsList = (competitionsList: CompetitionsList): Competition[] => {
  const preferredOrder = ['PL', 'ELC', 'BL1', 'PD', 'SA', 'FL1', 'DED', 'PPL', 'CL', 'EC', 'WC'];
  const filteredCompetitions = competitionsList.competitions.filter(
    (competition) =>
      competition.code !== 'BSA' && competition.code !== 'CLI' && competition.code !== 'EC',
  );

  const sortedCompetitions = filteredCompetitions.sort((a, b) => {
    const indexA = preferredOrder.indexOf(a.code);
    const indexB = preferredOrder.indexOf(b.code);

    if (indexA === -1 && indexB === -1) {
      return a.name.localeCompare(b.name);
    }

    return indexA - indexB;
  });

  const sortedCompetitionsList = sortedCompetitions.map((competition) => ({
    id: competition.id,
    emblem: competition.emblem,
    name: competition.name,
    code: competition.code,
    numberOfAvailableSeasons: competition.numberOfAvailableSeasons,
  }));

  return sortedCompetitionsList;
};
