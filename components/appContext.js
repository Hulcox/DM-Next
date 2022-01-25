import { createContext, useCallback, useEffect, useState } from "react"

const AppContext = createContext({})

const saveData = (data) => {
  localStorage.setItem("data", JSON.stringify(data))
}

export const AppContextProvider = (props) => {
  const [listData, setListData] = useState([])
  const [resultatIn, setResultatIn] = useState(0)
  const [resultatOut, setResultatOut] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let resIn = listData.reduce((total, current) => {
      if (current.value > 0) {
        return Number(total) + Number(current.value)
      }

      return Number(total) + 0
    }, 0)

    let resOut = listData.reduce((total, current) => {
      if (current.value < 0) {
        return Number(total) + Number(current.value)
      }

      return Number(total) + 0
    }, 0)
    setResultatIn(resultatIn + resIn)
    setResultatOut(resultatOut + resOut)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listData])

  const addToList = useCallback((data) => {
    setListData((currentdatas) => [...currentdatas, data])
  }, [])

  useEffect(() => {
    const localStorageDatas = localStorage.getItem("data")

    if (!localStorageDatas) {
      setLoaded(true)

      return
    }

    const data = JSON.parse(localStorageDatas)
    setListData(data)
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) {
      return
    }

    saveData(listData)
  }, [loaded, listData])

  const resetList = useCallback(() => {
    localStorage.clear()
    setListData([])
    setResultatIn(0), setResultatOut(0)
  }, [])

  return (
    <AppContext.Provider
      {...props}
      value={{
        listData,
        resultatIn,
        resultatOut,
        addToList,
        resetList,
      }}
    />
  )
}

export default AppContext
