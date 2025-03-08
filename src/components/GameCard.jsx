import { memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//importing redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { imageResizeURL } from "../util";
import { popUp } from "../Animation";

import { sharedCardStyles } from "./GlobalStyles";

const GameCard = ({ game }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(game.id));
  };

  return (
    <StyledGameCard layoutId={game.id} onClick={loadDetailHandler}>
      <Link to={`/game/${game.id}`}>
        <motion.h3 layoutId={`title-${game.id}`}>{game.name}</motion.h3>
        <p>{game.released}</p>
        <p>Rating : {game.rating ? game.rating : "not available"}</p>
        {game.background_image ? (
          <motion.img
            layoutId={`image ${game.id}`}
            src={imageResizeURL(game.background_image, 1280)}
            alt={game.name}
          />
        ) : (
          <FallbackImage />
        )}
      </Link>
    </StyledGameCard>
  );
};

const StyledGameCard = styled(motion.div)`
  ${sharedCardStyles}
  width: 100%;
  min-height: 30vh;
  text-align: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

const FallbackImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;
export default memo(GameCard);
