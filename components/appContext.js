import { createContext, useCallback, useEffect, useState } from "react";

const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const [listData, setListData] = useState([]);
  const [resultatIn, setResultatIn] = useState(0);
  const [resultatOut, setResultatOut] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let resIn = listData.reduce((total, current) => {
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
    console.log(localStorage);
  });

  const handleSetDataList = useCallback(
    (data) => {
      setListData([{ ...data, index: index }]);
      localStorage.setItem(index, JSON.stringify(data));
      localStorage.setItem("lastIndex", index);
      console.log(index);
      setIndex(index + 1);
    },
    [index]
  );

  return (
    <AppContext.Provider
      {...props}
      value={{ listData, resultatIn, resultatOut, handleSetDataList }}
    />
  );
};

export default AppContext;
