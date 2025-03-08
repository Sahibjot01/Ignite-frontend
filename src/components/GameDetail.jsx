import { memo } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
//importing redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { imageResizeURL } from "../util";
//importing platform images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

import starfull from "../img/star-full.png";
import starempty from "../img/star-empty.png";
import { pageAnimation } from "../Animation";
import { sharedCardStyles } from "./GlobalStyles";

const GameDetail = () => {
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  const navigate = useNavigate();
  const exitDetailHandler = (e) => {
    let element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "Xbox Series S/X":
        return xbox;
      case "Xbox S":
        return xbox;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={starfull} alt="star" />);
      } else {
        stars.push(<img key={i} src={starempty} alt="star" />);
      }
    }
    return stars;
  };

  return (
    <>
      <AnimatePresence>
        {!isLoading && (
          <StyledCardShadowDiv className="shadow" onClick={exitDetailHandler}>
            <StyledDetailedCard layoutId={game.id}>
              <StyledStatsDiv>
                <div className="rating">
                  <motion.h3 layoutId={`title-${game.id}`}>
                    {game.name}
                  </motion.h3>
                  <p>rating : </p>
                  {getStars()}
                </div>
                <StyledInfoDiv>
                  <h3>Platforms</h3>
                  <StyledPlatformsDiv>
                    {game.platforms.map((data) => (
                      <img
                        key={data.platform.id}
                        src={getPlatform(data.platform.name)}
                        alt="data.platform.name"
                      />
                    ))}
                  </StyledPlatformsDiv>
                </StyledInfoDiv>
              </StyledStatsDiv>

              <StyledMediaDiv>
                {game.background_image ? (
                  <motion.img
                    layoutId={`image ${game.id}`}
                    src={imageResizeURL(game.background_image, 1280)}
                    alt={game.name}
                  />
                ) : (
                  <FallbackImage />
                )}
              </StyledMediaDiv>
              <StyledDescriptionDiv>
                <motion.p>{game.description_raw}</motion.p>
              </StyledDescriptionDiv>
              <div className="gallery">
                {screen.results.map((screen) => (
                  <img
                    key={screen.id}
                    src={imageResizeURL(screen.image, 1280)}
                    alt={screen.image}
                  />
                ))}
              </div>
            </StyledDetailedCard>
          </StyledCardShadowDiv>
        )}
      </AnimatePresence>
    </>
  );
};

const StyledCardShadowDiv = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const StyledDetailedCard = styled(motion.div)`
  ${sharedCardStyles}
  width: 70%;
  padding: 2rem 5rem;
  position: absolute;
  left: 15%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;
const StyledStatsDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .starContainer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const StyledInfoDiv = styled(motion.div)`
  text-align: center;
`;

const StyledPlatformsDiv = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const StyledMediaDiv = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const StyledDescriptionDiv = styled(motion.div)`
  margin: 5rem 0rem;
`;

const FallbackImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: grey;
`;
export default memo(GameDetail);
