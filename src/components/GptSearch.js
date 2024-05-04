import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { HEADER_LOGO } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className=" object-cover max-w-max	" src={HEADER_LOGO} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
