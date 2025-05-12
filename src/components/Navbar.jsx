import { useState } from "react";
import { fetchSearch } from "../actions/gamesActions";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { motion } from "framer-motion";
//importing logo
import logo from "../img/logo.svg";
//import animation
import { fadeIn } from "../Animation";

const Navbar = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearchHandler = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <StyledLogoDiv onClick={clearSearchHandler}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </StyledLogoDiv>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={handleSearch}>SEARCH</button>
      </form>
    </StyledNav>
  );
};
export default Navbar;

const StyledNav = styled(motion.Nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    letter-spacing: 3px;
    font-weight: bold;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
  }
`;
const StyledLogoDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;
