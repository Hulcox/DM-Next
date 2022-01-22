import { createContext, useCallback, useEffect, useState } from "react";

const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const [listData, setListData] = useState([]);
  const [resultatIn, setResultatIn] = useState(0);
  const [resultatOut, setResultatOut] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let resIn = listData.reduce((total, current) => {
      console.log(current, listData);
      if (current.value > 0) {
        return Number(total) + Number(current.value);
      }
      return Number(total) + 0;
    }, 0);

    let resOut = listData.reduce((total, current) => {
      if (current.value < 0) {
        return Number(total) + Number(current.value);
      }
      return Number(total) + 0;
    }, 0);
    setResultatIn(resultatIn + resIn);
    setResultatOut(resultatOut + resOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listData]);

  useEffect(() => {
    setIndex(localStorage.getItem("lastIndex"));
    let list = [];
    for (let i = 0; i <= index; i++) {
      list.push(JSON.parse(localStorage.getItem(i)));
    }
    setListData(list);
  }, [index]);

  return (
    <AppContext.Provider
      {...props}
      value={{
        listData,
        resultatIn,
        resultatOut,
        index,
        setIndex,
      }}
    />
  );
};

export default AppContext;
