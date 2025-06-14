import axios from "axios";
import { gameDetailURL, gameScreenshotURL } from "../api";

//action creator
export const loadDetail = (game_id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detailData = await axios.get(gameDetailURL(game_id));
  console.log(detailData);
  const screenshotData = await axios.get(gameScreenshotURL(game_id));

  console.log("data");

  console.log(screenshotData);

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshotData.data,
    },
  });
};
