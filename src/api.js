const base_url = import.meta.env.VITE_BACKEND_URL;

export const popularGamesURL = () => `${base_url}/games/popular`;
export const upcomingGamesURL = () => `${base_url}/games/upcoming`;
export const newGamesURL = () => `${base_url}/games/new`;

export const gameDetailURL = (game_id) => `${base_url}/games/${game_id}`;
export const gameScreenshotURL = (game_id) =>
  `${base_url}/games/${game_id}/screenshots`;
export const searchGameURL = (game_name) =>
  `${base_url}/games/search?query=${game_name}`;
