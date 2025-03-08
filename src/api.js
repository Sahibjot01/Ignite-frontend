//Base URL
const base_url = `https://api.rawg.io/api/`;

const api_key = `key=${import.meta.env.VITE_RAWG_API_KEY}`;
//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Getting the day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&`;

export const popularGamesURL = () => `${base_url}${popular_games}${api_key}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}${api_key}`;
export const newGamesURL = () => `${base_url}${new_games}${api_key}`;

//Game Details
export const gameDetailURL = (game_id) =>
  `${base_url}games/${game_id}?${api_key}`;

export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?${api_key}`;

export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9&${api_key}`;
