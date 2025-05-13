import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
import styled from "styled-components";
import { motion } from "framer-motion";
import GameCard from "../components/GameCard";
import GameDetail from "../components/GameDetail";

import { useLocation } from "react-router-dom";
import { fadeIn } from "../Animation";

const Home = () => {
  const dispatch = useDispatch();
  const { upcoming, popular, newGames, searched } = useSelector(
    (state) => state.games
  );

  const location = useLocation();
  const gameID = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <StyledGameListDiv variants={fadeIn} initial="hidden" animate="show">
      {/* only render game detail if pathname have the gameid */}
      {gameID && <GameDetail />}
      {searched.length ? (
        <div className="searched">
          <h2>Searched Games</h2>
          <StyledGamesDiv>
            {searched.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </StyledGamesDiv>
        </div>
      ) : (
        ""
      )}
      <h2>Upcoming Games</h2>
      <StyledGamesDiv>
        {upcoming &&
          upcoming.map((game) => <GameCard key={game.id} game={game} />)}
      </StyledGamesDiv>

      <h2>Popular Games</h2>

      <StyledGamesDiv>
        {popular &&
          popular.map((game) => <GameCard key={game.id} game={game} />)}
      </StyledGamesDiv>

      <h2>New Games</h2>

      <StyledGamesDiv>
        {newGames &&
          newGames.map((game) => <GameCard key={game.id} game={game} />)}
      </StyledGamesDiv>
    </StyledGameListDiv>
  );
};

const StyledGameListDiv = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  @media (max-width: 768px) {
    padding: 0rem 2rem;
    h2 {
      padding: 3rem 0rem;
    }
  }
`;
const StyledGamesDiv = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
  }
`;

export default Home;
