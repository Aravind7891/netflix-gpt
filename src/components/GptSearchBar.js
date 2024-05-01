import React from "react";
import lang from "../utils/languageConstants"
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);


  return (
    <div className="pt-[20%] flex justify-">
      <form className="w-1/2 bg-black">
        <input
          type="text"
          className="p-4 m-4 col-span-A9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className=" col-span-3 m-4 py-2 px-4 bg-red-700 text-white">
          {lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
