import { createContext, useCallback, useEffect, useState } from "react";

const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const [listData, setListData] = useState([
    {
      index: 0,
      value: 2000,
      description: "1 day consulting",
    },
    {
      index: 1,
      description: "test",
      value: -1000,
    },
    {
      index: 2,
      description: "test2",
      value: -500,
    },
  ]);
  const [resultatIn, setResultatIn] = useState(0);
  const [resultatOut, setResultatOut] = useState(0);

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

  /*useEffect(() => {
    handleSetDataList(window.localStorage);
  });*/

  const handleSetDataList = useCallback(
    (data) => {
      setListData([...listData, { ...data }]);
    },
    [listData]
  );

  return (
    <AppContext.Provider
      {...props}
      value={{ listData, resultatIn, resultatOut }}
    />
  );
};

export default AppContext;
