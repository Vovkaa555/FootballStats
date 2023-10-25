import axios, { AxiosResponse } from 'axios';
import { API_URL, authToken } from '../../config';

const headers: Record<string, string> = {
  'X-Auth-Token': authToken,
};

interface CompetitionsTableParams {
  competitionsName: string;
  competitionSeason: string | null;
}

interface Competition {}

export const getCompetitionsTable = async ({
  competitionsName,
  competitionSeason,
}: CompetitionsTableParams): Promise<Competition> => {
  try {
    let url = `${API_URL}/v4/competitions/${competitionsName}/standings`;

    if (competitionSeason !== null) {
      url += competitionSeason;
    }

    const competitionsTable: AxiosResponse<Competition> = await axios.get(url, {
      headers,
    });

    return competitionsTable.data;
  } catch (error) {
    console.error('competitionsTable error:', error);
    throw error;
  }
};

export const getCompetitionsList = async (): Promise<Competition[]> => {
  try {
    const competitionsList: AxiosResponse<Competition[]> = await axios.get(
      `${API_URL}/v4/competitions`,
      {
        headers,
      },
    );

    return competitionsList.data;
  } catch (error) {
    console.error('competitionsList error:', error);
    throw error;
  }
};
