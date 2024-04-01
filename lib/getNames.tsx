import getSortedLeaderboard from './getSortedLeaderboard';
import { getDataWithNamesAndAvatars } from './getDataWithNamesAndAvatars';
import { getProfileInfo } from './airstack/getProfileInfo';

const getNames = async (rawData: any[]) => {
  const buyers = rawData.map((item) => item.buyer);
  try {
    const data = await getProfileInfo(buyers);
    const [domains, socials] = [data?.data?.Domains?.Domain, data?.data?.Socials?.Social];
    const dataWithNamesAndAvatars = getDataWithNamesAndAvatars(rawData, domains, socials);
    return getSortedLeaderboard(dataWithNamesAndAvatars);
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getNames;
