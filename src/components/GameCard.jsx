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
        <p>Release date : {game.released}</p>
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
  max-width: 31.25rem;
  min-height: 30vh;
  text-align: center;
  cursor: pointer;
  margin: 0 auto; /* Center the card horizontally if needed */

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  h3 {
    padding: 1rem 0;
    font-size: 1.5rem;
    color: #333;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.2rem;
      padding: 0.5rem;
    }
    p {
      font-size: 1rem;
    }
    max-width: 25rem; /* Reduce max-width for smaller screens */
    img {
      height: 30vh; /* Adjust image height for smaller screens */
    }
  }
`;

const FallbackImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;
export default memo(GameCard);
