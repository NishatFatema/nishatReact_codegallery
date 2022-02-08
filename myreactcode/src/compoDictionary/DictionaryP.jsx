import React, { useState } from "react";

import { DictionaryC } from "./DictionaryC";
// import { MeaningList } from "./MeaningList";
import "./Dictionary.css";

// import "./Dist.css"

import axios from "axios";

export const DictionaryP = () => {
  const [resData, setResData] = useState([]);
  const [word, setWord] = useState(" ");

  const handleSearch = () => {
    axios
      .get("https://api.dictionaryapi.dev/api/v2/entries/en_US/{wordSearch}")
      .then((res) => {
        console.log(res.Data);
        console.log(word)
        setResData([...res.Data]);
      });
  };
  return (
    <div>
      <DictionaryC 
      handleSearch={handleSearch}
      resData={resData}
      setWord={word}

      />

    </div>
  );
};
